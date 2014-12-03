package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class CreateBuildServerTest {
	@Test
	public void noEffectInFirstRound() {
		Team team = new Team();
		BuildServer buildServer = new BuildServer();

		team.addAction(buildServer);
		team.executeSprint();

		assertEquals(10, team.getCapacity());
	}

	@Test
	public void roundTwoLimitsCapacityReductionToTwo() {
		Team team = new Team();
		BuildServer buildServer = new BuildServer();

		team.addAction(buildServer);
		team.executeSprint();
		team.executeSprint();

		assertEquals(8, team.getCapacity());
	}

	@Test
	public void roundThreeLimitsCapacityReducedToSix() {
		Team team = new Team();
		BuildServer buildServer = new BuildServer();

		team.addAction(buildServer);
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		assertEquals(6, team.getCapacity());
	}

	@Test
	public void buildServerOnlyHelpsTheRoundAfterItWasApplied() {
		Team team = new Team();
		BuildServer buildServer = new BuildServer();

		team.executeSprint();
		team.addAction(buildServer);
		team.executeSprint(); // no effect
		team.executeSprint();

		// Round 1 - no reduction; Round 2 - reduce by 4; Round 3 - reduce by 2
		assertEquals(4, team.getCapacity());
	}
}
