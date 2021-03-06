package com.agilepainrelief.teamsgame;

public class UnitTesting extends EngineeringAction {
	public UnitTesting(int inSprintCreated) {
		super(inSprintCreated);

		if (inSprintCreated == 1) {
			throw new IllegalStateException("Can't be applied in Round 1");
		}
	}

	@Override
	public int calculateEffect(int currentSprint) {
		int firstEffectiveSprint = getSprintCreated() + 1;

		if (firstEffectiveSprint <= currentSprint) {
			return 1;
		}

		return 0;
	}
}
