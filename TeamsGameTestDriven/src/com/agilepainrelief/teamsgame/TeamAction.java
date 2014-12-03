package com.agilepainrelief.teamsgame;

public class TeamAction {
	protected final int sprintCreated;

	public TeamAction(int inSprintCreated) {
		sprintCreated = inSprintCreated;
	}

	public boolean isInEffect(int currentSprint) {
		return sprintCreated + 1 <= currentSprint;
	}
}