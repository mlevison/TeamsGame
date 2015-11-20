package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class TestTeamsDegradeIfNothingDone extends TeamTestBase {
	@Test
	public void firstSprintNoEffect() {

		getTeam().executeSprint();
		assertEquals(10, getTeam().getCapacity());
	}

	@Test
	public void twoSprintsCapacityReducedByTwo() {
		executeCountSprints(2);

		assertEquals(6, getTeam().getCapacity());
	}

	@Test
	public void threeSprintsCapacityReducedByFour() {
		executeCountSprints(3);
		assertEquals(2, getTeam().getCapacity());
	}

	@Test
	public void fourSprintsCapacityReducedToZero() {
		executeCountSprints(4);
		assertEquals(0, getTeam().getCapacity());
	}

	@Test
	public void fiveSprintsCapacityReducedToZero() {
		executeCountSprints(5);

		assertEquals(0, getTeam().getCapacity());
	}
}
