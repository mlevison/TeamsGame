package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

// attempting to illustrate if neither a social or engineering action is taken the teams capacity degrades at a rate of -4 per round
// Round | Capacity
// 1	 | 10
// 2     | 6
// 3     | 2
// 4     | 0
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

	// Attempting to illustrate a Social Practice Introduced in Round 1, slows
	// the rate of degradation to only -2 per sprint
	@Test
	public void socialPracticeIntroducedRoundOneSlowsRateOfDegradation() {
		int beforeCapacity = getTeam().getCapacity();
		// Using a Fake practice so we don't test the effect of the practice
		// itself
		getTeam().addAction(new FakeSocialAction(1));

		executeCountSprints(2);
		assertThat(getTeam().getCurrentSprint(), is(2));
		assertEquals(beforeCapacity - 2, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(3));
		assertEquals(beforeCapacity - 4, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(4));
		assertEquals(beforeCapacity - 6, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(5));
		assertEquals(beforeCapacity - 8, getTeam().getCapacity());
	}

	// Attempting to illustrate a Engineering Practice Introduced in Round 1,
	// slows the rate of degradation to only -2 per sprint
	@Test
	public void engineeringPracticeIntroducedRoundOneSlowsRateOfDegradation() {
		int beforeCapacity = getTeam().getCapacity();
		// Using a Fake practice so we don't test the effect of the practice
		// itself
		getTeam().addAction(new FakeEngineeringAction(1));

		executeCountSprints(2);
		assertThat(getTeam().getCurrentSprint(), is(2));
		assertEquals(beforeCapacity - 2, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(3));
		assertEquals(beforeCapacity - 4, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(4));
		assertEquals(beforeCapacity - 6, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(5));
		assertEquals(beforeCapacity - 8, getTeam().getCapacity());
	}

	// Attempting to illustrate an Engineering and Social Practice Introduced in
	// Round 1, halt degradation
	@Test
	public void engineeringAndSocialPracticeIntroducedRoundOneHaltDegradation() {
		int beforeCapacity = getTeam().getCapacity();
		// Using a Fake practice so we don't test the effect of the practice
		// itself
		getTeam().addAction(new FakeEngineeringAction(1));
		getTeam().addAction(new FakeSocialAction(1));

		executeCountSprints(2);
		assertThat(getTeam().getCurrentSprint(), is(2));
		assertEquals(beforeCapacity, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(3));
		assertEquals(beforeCapacity, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(4));
		assertEquals(beforeCapacity, getTeam().getCapacity());

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(5));
		assertEquals(beforeCapacity, getTeam().getCapacity());
	}
}