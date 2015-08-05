package com.agilepainrelief.teamsgame;

import java.util.*;

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

	public boolean validate(List<TeamAction> teamActionList) {
		return true;
	}
}