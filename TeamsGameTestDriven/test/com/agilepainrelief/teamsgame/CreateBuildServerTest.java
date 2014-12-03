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
}
