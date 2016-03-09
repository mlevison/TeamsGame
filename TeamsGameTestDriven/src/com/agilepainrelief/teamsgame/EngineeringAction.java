package com.agilepainrelief.teamsgame;

public abstract class EngineeringAction extends TeamAction {
	public EngineeringAction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Engineering;
	}
}
