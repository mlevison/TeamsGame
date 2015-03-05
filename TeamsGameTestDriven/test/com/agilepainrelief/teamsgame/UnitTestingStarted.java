package com.agilepainrelief.teamsgame;

import org.junit.*;
import org.junit.rules.*;

public class UnitTestingStarted {
	@Rule
	public ExpectedException exception = ExpectedException.none();

	@Test
	public void cantUnitTestWithoutBuildServer() {
		Team team = new Team();
		UnitTesting unitTesting = new UnitTesting(2);

		exception.expect(IllegalStateException.class);
		team.addAction(unitTesting);
	}

	@Test
	public void canUnitTestWithBuildServer() {
		Team team = new Team();
		team.addAction(new BuildServer(1));
		UnitTesting unitTesting = new UnitTesting(2);

		team.addAction(unitTesting);
	}

	@Test
	public void unitTestCanOnlyBeAppliedInRoundTwo() {
		exception.expect(IllegalStateException.class);
		new UnitTesting(1);
	}

	@Test
	public void unitTestingHasNoEffectInRoundTwo() {
		Team team = new Team();
		team.addAction(new BuildServer(1));
		team.addAction(new UnitTesting(2));

		// two rounds has no effect
		team.executeSprint();
		team.executeSprint();

		Assert.assertEquals(8, team.getCapacity());
	}

	@Test
	public void unitTestingSlowsTheRateOfDecayInRoundThree() {
		Team team = new Team();
		team.addAction(new BuildServer(1));
		team.addAction(new UnitTesting(2));

		// two rounds has no effect
		team.executeSprint();
		team.executeSprint();

		// round 3 it finally has an effect
		team.executeSprint();
		Assert.assertEquals(7, team.getCapacity());
	}
}
