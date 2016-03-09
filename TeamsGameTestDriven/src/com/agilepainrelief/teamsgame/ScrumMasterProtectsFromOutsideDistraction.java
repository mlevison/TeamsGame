package com.agilepainrelief.teamsgame;

public class ScrumMasterProtectsFromOutsideDistraction extends SocialAction {
	public ScrumMasterProtectsFromOutsideDistraction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int sprint) {
		// This action doesn't affect capacity just improves delivery odds
		return 0;
	}

}
