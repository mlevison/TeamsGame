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
	public void secondCapcityReducedByOnlyOne() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		assertEquals(9, team.getCapacity());
	}

	@Test
	public void thirdCapcityReducedByOnlyTwo() {
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
	public void improvesCapacityForFirstFiveRoundsButNotRoundSix() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		// the crucial 6th round
		team.executeSprint();
		assertEquals(3, team.getCapacity());
	}
}
