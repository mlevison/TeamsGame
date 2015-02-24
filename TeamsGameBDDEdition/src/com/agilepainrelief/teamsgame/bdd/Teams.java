package com.agilepainrelief.teamsgame.bdd;

public class Teams {
	private int capacity;
	private int round = 0;
	private boolean buildServerAdded = false;
	private boolean unitTestingUsed = false;
	private boolean socialPracticeUsed = false;

	public Teams(int inCapacity) {
		capacity = inCapacity;
	}

	public void executeAction(ActionType actionType) {
		if (ActionType.BuildServerAdded == actionType) {
			buildServerAdded = true;
		}
		if (ActionType.UnitTesting == actionType) {
			unitTestingUsed = true;
		}
		if (ActionType.SocialPractice == actionType) {
			socialPracticeUsed = true;
		}
		round++;
		if (round >= 2) {
			capacity -= 4;
			if (unitTestingUsed) {
				capacity += 2;
			}

			if (socialPracticeUsed) {
				capacity += 2;
			}
		}

		if (capacity < 0) {
			capacity = 0;
		}
	}

	public int getCapacity() {
		return capacity;
	}
}
