package com.agilepainrelief.teamsgame;

public class ScrumMasterProtectsFromOutsideDistraction extends TeamAction {

	public ScrumMasterProtectsFromOutsideDistraction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public ActionType getActionType() {
		return ActionType.Social;
	}

	@Override
	public int calculateEffect(int sprint) {
		// This action doesn't affect capacity just improves delivery odds
		return 0;
	}

}
