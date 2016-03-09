package com.agilepainrelief.teamsgame;

public class TeamRoom extends SocialAction {
	public TeamRoom(int inSprintCreated) {
		super(inSprintCreated);
	}

	@Override
	public int calculateEffect(int sprint) {
		int firstEffectiveSprint = getSprintCreated() + 1;

		System.out.println("Currrent Sprint " + sprint + "FirstEffective "
				+ firstEffectiveSprint);

		if (firstEffectiveSprint >= sprint) {
			if (firstEffectiveSprint >= sprint + 1) {
				System.out.println("  result 2");
				return 2;
			}
			System.out.println("  result 1");
			return 1;
		}
		System.out.println("  result 0");
		return 0;
	}

}
