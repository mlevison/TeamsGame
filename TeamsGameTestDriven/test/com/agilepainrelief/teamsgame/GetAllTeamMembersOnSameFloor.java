package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;
import org.junit.rules.*;

// Getting all team members on the same floor reduces the rate at which capacity degrades.
// 	However capacity still degrades
// 	After 5 rounds the effect has run its course
public class GetAllTeamMembersOnSameFloor extends TeamTestBase {
	@Rule
	public ExpectedException exception = ExpectedException.none();

	@Test
	public void firstRoundNoEffect() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		getTeam().executeSprint();
		assertEquals(10, getTeam().getCapacity());
	}

	@Test
	public void secondRoundCapcityReducedByOnlyOne() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(2);
		assertEquals(9, getTeam().getCapacity());
	}

	@Test
	public void thirdRoundCapcityReducedByOnlyTwo() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(3);
		assertEquals(8, getTeam().getCapacity());
	}

	@Test
	public void improvesCapacityForFirstFiveRounds() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		// Round one No effect
		getTeam().executeSprint();

		// Five rounds with effect
		executeCountSprints(5);
		assertEquals(5, getTeam().getCapacity());
	}

	@Test
	public void capacityDegradesByTwoInTheSeventhSprint() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(6);
		int capacityAfterSixSprints = getTeam().getCapacity();

		getTeam().executeSprint();
		assertEquals(capacityAfterSixSprints - 2, getTeam().getCapacity());
	}

	@Test
	public void appliedInSecondRoundDoesntHaveImmediateEffect() {
		getTeam().addAction(new TeamMembersOnSameFloor(2));

		executeCountSprints(2);
		assertEquals(8, getTeam().getCapacity());
	}

	@Test
	public void appliedInSecondRoundTakesEffectInTheThirdRound() {
		getTeam().addAction(new TeamMembersOnSameFloor(2));

		executeCountSprints(3);
		assertEquals(7, getTeam().getCapacity());
	}

	@Test
	public void appliedInSecondRoundHasAnEffectToRoundSeven() {
		getTeam().addAction(new TeamMembersOnSameFloor(2));

		// First two rounds no effect -
		executeCountSprints(2);
		// Five rounds of positive effect
		executeCountSprints(5);

		assertEquals(3, getTeam().getCapacity());
	}

	@Test
	public void appliedInSecondRoundHelpsForFiveRoundsButNotRoundEight() {
		getTeam().addAction(new TeamMembersOnSameFloor(2));
		// First two rounds no effect -
		executeCountSprints(2);

		// Five rounds of positive effect
		executeCountSprints(5);

		// the crucial 8th round - productivity degrades more rapidly again
		getTeam().executeSprint();
		assertEquals(1, getTeam().getCapacity());
	}

	@Test
	public void cantBeAppliedTwice() {
		getTeam().addAction(new TeamMembersOnSameFloor(1));

		exception.expect(IllegalStateException.class);
		getTeam().addAction(new TeamMembersOnSameFloor(2));
	}
}
