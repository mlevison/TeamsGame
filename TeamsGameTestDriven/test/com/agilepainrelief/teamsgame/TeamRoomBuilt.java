package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

public class TeamRoomBuilt {

	@Test
	public void builtInRoundOneHasNoEffect() {
		Team team = new Team();
		team.addAction(new TeamRoom(1));

		team.executeSprint();

		assertThat(team.getCapacity(), is(10));
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