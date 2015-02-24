package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

// Getting all team members on the same floor reduces the rate at which capacity degrades.
// 	However capacity still degrades
// 	After 5 rounds the effect has run its course
public class GetAllTeamMembersOnSameFloor {
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
		team.executeSprint();
		team.executeSprint();
		assertEquals(9, team.getCapacity());
	}

	@Test
	public void thirdRoundCapcityReducedByOnlyTwo() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		assertEquals(8, team.getCapacity());
	}

	@Test
	public void improvesCapacityForFirstFiveRounds() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));

		// Round No effect
		team.executeSprint();

		// Five rounds with effect
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		assertEquals(5, team.getCapacity());
	}

	@Test
	public void improvesCapacityForFiveRoundsButNotRoundSeven() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		// the crucial 7th round - productivity degrades more rapidly again
		team.executeSprint();
		assertEquals(3, team.getCapacity());
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

		// First two rounds no effect -
		team.executeSprint();
		team.executeSprint();

		team.executeSprint();
		assertEquals(7, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundHasAnEffectToRoundSeven() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));

		// First two rounds no effect -
		team.executeSprint();
		team.executeSprint();

		// Five rounds of positive effect
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		assertEquals(3, team.getCapacity());
	}

	@Test
	public void appliedInSecondRoundHelpsForFiveRoundsButNotRoundEight() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(2));

		// First two rounds no effect -
		team.executeSprint();
		team.executeSprint();

		// Five rounds of positive effect
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		// the crucial 8th round - productivity degrades more rapidly again
		team.executeSprint();
		assertEquals(1, team.getCapacity());
	}

}
