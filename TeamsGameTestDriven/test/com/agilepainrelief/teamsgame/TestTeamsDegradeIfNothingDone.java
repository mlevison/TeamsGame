package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class TestTeamsDegradeIfNothingDone {
	@Test
	public void firstSprintNoEffect() {
		Team team = new Team();

		team.executeSprint();
		assertEquals(10, team.getCapacity());
	}

	@Test
	public void twoSprintsCapacityReducedByTwo() {
		Team team = new Team();

		team.executeSprint();
		team.executeSprint();

		assertEquals(8, team.getCapacity());
	}
}
