package com.agilepainrelief.teamsgame;

public class BuildServer extends TeamAction {
	public BuildServer(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Engineering;
	}

	@Override
	public int calculateEffect(int sprint) {
		return 0;
	}
}
