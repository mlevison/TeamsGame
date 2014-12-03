package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class GetAllTeamMembersOnSameFloor {
	@Test
	public void firstRoundNoEffect() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		assertEquals(10, team.getCapacity());
	}

	@Test
	public void secondCapcityReducedByOnlyOne() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		assertEquals(9, team.getCapacity());
	}

	@Test
	public void thirdCapcityReducedByOnlyTwo() {
		Team team = new Team();
		team.addAction(new TeamMembersOnSameFloor(1));
		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		assertEquals(8, team.getCapacity());
	}
}
