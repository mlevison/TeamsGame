package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class CreateBuildServerTest {
	@Test
	public void noEffectInFirstRound() {
		Team team = new Team();
		TeamAction buildServer = new BuildServer(1);

		team.addAction(buildServer);
		team.executeSprint();

		assertEquals(10, team.getCapacity());
	}

	@Test
	public void roundTwoLimitsCapacityReductionToTwo() {
		Team team = new Team();
		TeamAction buildServer = new BuildServer(1);

		team.addAction(buildServer);
		team.executeSprint();
		team.executeSprint();

		assertEquals(8, team.getCapacity());
	}

	@Test
	public void roundThreeLimitsCapacityReducedToSix() {
		Team team = new Team();
		TeamAction buildServer = new BuildServer(1);

		team.addAction(buildServer);
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();

		assertEquals(6, team.getCapacity());
	}

	@Test
	public void buildServerOnlyHelpsTheRoundAfterItWasApplied() {
		Team team = new Team();
		TeamAction buildServer = new BuildServer(2);

		team.executeSprint();
		team.addAction(buildServer);
		team.executeSprint(); // no effect
		team.executeSprint();

		// Round 1 - no reduction; Round 2 - reduce by 4; Round 3 - reduce by 2
		assertEquals(4, team.getCapacity());
	}

	@Test
	public void buildServerReportsEffectOneSprintLaterFailCurrentSprint() {
		TeamAction buildServer = new BuildServer(1);

		assertFalse(buildServer.isInEffect(1));
	}

	@Test
	public void buildServerReportsEffectOneSprintLaterSucceedNextSprint() {
		TeamAction buildServer = new BuildServer(1);

		assertTrue(buildServer.isInEffect(2));
	}
}
