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
	// Team team = new Team();
	//
	// final int capacityBefore = team.getCapacity();
	// team.addAction(new TeamRoom(1));
	//
	// team.executeSprint();
	// team.executeSprint();
	//
	// assertThat(team.getCapacity(), is(capacityBefore - 1));
	// }
}