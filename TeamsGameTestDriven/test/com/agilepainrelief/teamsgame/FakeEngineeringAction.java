package com.agilepainrelief.teamsgame;

public class FakeEngineeringAction extends EngineeringAction {
	public FakeEngineeringAction(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int sprint) {
		return 0;
	}
}