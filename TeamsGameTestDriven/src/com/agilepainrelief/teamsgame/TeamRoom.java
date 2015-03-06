package com.agilepainrelief.teamsgame;

public class TeamRoom extends TeamAction {
	public TeamRoom(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Social;
	}

	@Override
	public int calculateEffect(int sprint) {
		int firstEffectiveSprint = getSprintCreated() + 1;

		if (firstEffectiveSprint >= sprint) {
			return 1;
		}

		return 0;
	}

}
