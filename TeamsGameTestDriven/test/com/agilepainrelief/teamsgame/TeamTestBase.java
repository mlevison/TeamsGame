package com.agilepainrelief.teamsgame;

public abstract class TeamTestBase {
	private final Team team = new Team();

	public TeamTestBase() {
		super();
	}

	protected void executeCountSprints(int number) {
		while (number > 0) {
			team.executeSprint();
			number--;
		}
	}

	protected final Team getTeam() {
		return team;
	}

}