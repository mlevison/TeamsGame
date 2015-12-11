package com.agilepainrelief.teamsgame;

import org.junit.*;
import org.junit.rules.*;

public class UnitTestingStarted extends TeamTestBase {
	@Rule
	public ExpectedException exception = ExpectedException.none();

	@Test
	public void cantUnitTestWithoutBuildServer() {
		UnitTesting unitTesting = new UnitTesting(2);

		exception.expect(IllegalStateException.class);
		getTeam().addAction(unitTesting);
	}

	@Test
	public void canUnitTestWithBuildServer() {
		getTeam().addAction(new BuildServer(1));
		UnitTesting unitTesting = new UnitTesting(2);

		getTeam().addAction(unitTesting);
	}

	@Test
	public void cannotUnitTestTwiceInTheSameGame() {
		getTeam().addAction(new BuildServer(1));
		getTeam().addAction(new UnitTesting(2));

		exception.expect(IllegalStateException.class);
		getTeam().addAction(new UnitTesting(3));
	}

	@Test
	public void unitTestCanOnlyBeAppliedInRoundTwo() {
		exception.expect(IllegalStateException.class);
		new UnitTesting(1);
	}

	@Test
	public void unitTestingHasNoEffectInRoundTwo() {
		getTeam().addAction(new BuildServer(1));
		getTeam().addAction(new UnitTesting(2));

		// two rounds has no effect
		executeCountSprints(2);
		Assert.assertEquals(8, getTeam().getCapacity());
	}

	@Test
	public void unitTestingSlowsTheRateOfDecayInRoundThree() {
		getTeam().addAction(new BuildServer(1));
		getTeam().addAction(new UnitTesting(2));

		executeCountSprints(3);
		Assert.assertEquals(7, getTeam().getCapacity());
	}
}
