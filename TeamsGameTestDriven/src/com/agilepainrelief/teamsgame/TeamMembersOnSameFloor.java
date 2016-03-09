package com.agilepainrelief.teamsgame;

public class TeamMembersOnSameFloor extends SocialAction {
	public TeamMembersOnSameFloor(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int currentSprint) {
		int firstEffectiveSprint = getSprintCreated() + 1;
		int lastEffectiveSprint = getSprintCreated() + 5;
		if ((firstEffectiveSprint <= currentSprint)
				&& (currentSprint <= lastEffectiveSprint)) {
			return 1;
		}

		return 0;
	}
}
