package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class CreateBuildServerTest extends TeamTestBase {
	@Test
	public void noEffectInFirstRound() {
		BuildServer buildServer = new BuildServer(1);

		getTeam().addAction(buildServer);
		executeCountSprints(1);
		assertEquals(10, getTeam().getCapacity());
	}

	@Test
	public void roundTwoLimitsCapacityReductionToTwo() {
		BuildServer buildServer = new BuildServer(1);

		getTeam().addAction(buildServer);
		executeCountSprints(2);
		assertEquals(8, getTeam().getCapacity());
	}

	@Test
	public void roundThreeLimitsCapacityReducedToSix() {
		BuildServer buildServer = new BuildServer(1);

		getTeam().addAction(buildServer);
		executeCountSprints(3);
		assertEquals(6, getTeam().getCapacity());
	}
}
