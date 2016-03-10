package com.agilepainrelief.teamsgame;

public class TeamRoom extends SocialAction {
	public TeamRoom(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int sprint) {
		int firstEffectiveSprint = getSprintCreated() + 1;

		if ((sprint >= firstEffectiveSprint)
				&& (sprint < firstEffectiveSprint + 5)) {
			if (sprint >= firstEffectiveSprint + 1) {
				return 2;
			}
			return 1;
		}
		return 0;
	}
}
