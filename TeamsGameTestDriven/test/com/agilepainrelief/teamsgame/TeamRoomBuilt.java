package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

public class TeamRoomBuilt extends TeamTestBase {

	@Test
	public void builtInRoundOneHasNoEffect() {
		getTeam().addAction(new TeamRoom(1));

		executeCountSprints(1);

		assertThat(getTeam().getCapacity(), is(10));
	}

	// @Test
	// public void builtInRoundOneTakesFirstEffectInRoundTwo() {
	// final int capacityBefore = getTeam().getCapacity();
	// getTeam().addAction(new TeamRoom(1));
	//
	// executeCountSprints(1);
	// assert (2 == getTeam().getCurrentSprint());
	//
	// // after one sprint there should be no noticeable effect
	// assertThat(getTeam().getCapacity(), is(capacityBefore - 2));
	// }

	@Test
	public void builtInRoundOneTakesFirstEffectTwoRoundsLater() {
		final int capacityBefore = getTeam().getCapacity();
		getTeam().addAction(new TeamRoom(1));

		executeCountSprints(2);
		assert (3 == getTeam().getCurrentSprint());

		// Capacity -2 per round for a lack of improvement. Team room improves
		// by +1 in the first round it helps and +2 there after
		assertThat(getTeam().getCapacity(), is(capacityBefore - 1));
	}

}