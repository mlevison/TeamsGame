package com.agilepainrelief.teamsgame;

public abstract class SocialAction extends TeamAction {
	public SocialAction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Social;
	}
}
