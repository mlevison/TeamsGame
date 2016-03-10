package com.agilepainrelief.teamsgame;

public class FakeSocialAction extends SocialAction {
	public FakeSocialAction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int sprint) {
		return 0;
	}
}