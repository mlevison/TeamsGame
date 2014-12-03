package com.agilepainrelief.teamsgame;

public abstract class TeamAction {
	private final int sprintCreated;

	protected int getSprintCreated() {
		return sprintCreated;
	}

	public TeamAction(int inSprintCreated) {
		sprintCreated = inSprintCreated;
	}

	public abstract ActionType getActionType();

	public abstract int calculateEffect(int sprint);
}