package com.agilepainrelief.teamsgame;

public class TeamMembersOnSameFloor extends TeamAction {
	public TeamMembersOnSameFloor(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Social;
	}

	@Override
	public int calculateEffect(int currentSprint) {
		if (getSprintCreated() + 1 <= currentSprint) {
			return 1;
		}

		return 0;
	}
}