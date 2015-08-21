package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;
import org.junit.rules.*;

// Getting all team members on the same floor reduces the rate at which capacity degrades.
// 	However capacity still degrades
// 	After 5 rounds the effect has run its course
public class GetAllTeamMembersOnSameFloor {
	@Rule
	public ExpectedException exception = ExpectedException.none();

	@Test
	public void firstRoundNoEffect() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		team.executeSprint();
		assertEquals(10, team.getCapacity());
	}

	@Test
	public void secondRoundCapcityReducedByOnlyOne() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(team, 2);
		assertEquals(9, team.getCapacity());
	}

	@Test
	public void thirdRoundCapcityReducedByOnlyTwo() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(team, 3);
		assertEquals(8, team.getCapacity());
	}

	@Test
	public void improvesCapacityForFirstFiveRounds() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		// Round one No effect
		team.executeSprint();

		// Five rounds with effect
		executeCountSprints(team, 5);

		assertEquals(5, team.getCapacity());
	}

	@Test
	public void capacityDegradesByTwoInTheSeventhSprint() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		executeCountSprints(team, 6);
		int capacityAfterSixSprints = team.getCapacity();

		team.executeSprint();
		assertEquals(capacityAfterSixSprints - 2, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundDoesntHaveImmediateEffect() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));
		team.executeSprint();
		team.executeSprint();
		assertEquals(8, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundTakesEffectInTheThirdRound() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));

		executeCountSprints(team, 3);

		assertEquals(7, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundHasAnEffectToRoundSeven() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));

		// First two rounds no effect -
		executeCountSprints(team, 2);
		// Five rounds of positive effect
		executeCountSprints(team, 5);

		assertEquals(3, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundHelpsForFiveRoundsButNotRoundEight() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));

		// First two rounds no effect -
		executeCountSprints(team, 2);

		// Five rounds of positive effect
		executeCountSprints(team, 5);

		// the crucial 8th round - productivity degrades more rapidly again
		team.executeSprint();
		assertEquals(1, team.getCapacity());
	}

	@Test
	public void cantBeAppliedTwice() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		exception.expect(IllegalStateException.class);
		team.addAction(new TeamMembersOnSameFloor(2));
	}

	private void executeCountSprints(Team team, int number) {
		while (number > 0) {
			team.executeSprint();
			number--;
		}
	}
}
