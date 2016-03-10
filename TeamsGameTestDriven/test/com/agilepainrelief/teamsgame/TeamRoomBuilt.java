package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

// *** Consider introducing a fake engineering practice to simplify the bookkeeping

// Team Room - effects - assuming no other degradation due to lack of Engineering Practices
// Round | Capacity
// 1     | 10
// 2     | 11
// 3     | 13
// 4     | 15
// 5     | 17
// 6     | 19
// 7     | 19
//
// Comparing two styles of writing Unit Tests
public class TeamRoomBuilt extends TeamTestBase {
	@Test
	public void builtInRoundOneHasNoEffect() {
		getTeam().addAction(new TeamRoom(1));

		executeCountSprints(1);

		assertThat(getTeam().getCapacity(), is(10));
	}

	@Test
	public void builtInRoundOneTakesFirstEffectInRoundTwo() {
		final int capacityBefore = getTeam().getCapacity();
		getTeam().addAction(new TeamRoom(1));

		// use a fakeengineeraction so that the only effect we're studying is
		// that of team rooms
		getTeam().addAction(new FakeEngineeringAction(1));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(1));

		// after one sprint there should be no noticeable effect
		assertThat(getTeam().getCapacity(), is(capacityBefore));
	}

	@Test
	public void builtInRoundOneTakesFirstEffectTwoRoundsLater() {
		final int capacityBefore = getTeam().getCapacity();
		getTeam().addAction(new TeamRoom(1));
		// use a fakeengineeraction so that the only effect we're studying is
		// that of team rooms
		getTeam().addAction(new FakeEngineeringAction(1));

		executeCountSprints(2);
		assertThat(getTeam().getCurrentSprint(), is(2));

		assertThat(getTeam().getCapacity(), is(capacityBefore + 1));
	}

	@Test
	public void builtInRoundOneHasLargerEffectInRoundThree() {
		final int capacityBefore = getTeam().getCapacity();
		getTeam().addAction(new TeamRoom(1));
		// use a fakeengineeraction so that the only effect we're studying is
		// that of team rooms
		getTeam().addAction(new FakeEngineeringAction(1));

		executeCountSprints(3);
		assertThat(getTeam().getCurrentSprint(), is(3));

		assertThat(getTeam().getCapacity(), is(capacityBefore + 3));
	}

	@Test
	public void builtInRoundOneIllustratesAllCases() {
		final int capacityBefore = getTeam().getCapacity();
		getTeam().addAction(new TeamRoom(1));

		// use a fakeengineeraction so that the only effect we're studying is
		// that of team rooms
		getTeam().addAction(new FakeEngineeringAction(1));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(1));
		assertThat(getTeam().getCapacity(), is(capacityBefore));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(2));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 1));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(3));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 3));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(4));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 5));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(5));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 7));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(6));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 9));

		executeCountSprints(1);
		assertThat(getTeam().getCurrentSprint(), is(7));
		assertThat(getTeam().getCapacity(), is(capacityBefore + 9));
	}
}