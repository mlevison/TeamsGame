package com.agilepainrelief.teamsgame.bdd;

public class Teams {
	private int capacity;
	private int round = 0;
	private boolean engineeringPracticeUsed = false;
	private boolean socialPracticeUsed = false;

	public Teams(int inCapacity) {
		capacity = inCapacity;
	}

	public void executeAction(ActionType actionType) {
		if (ActionType.EngineeringPractice == actionType) {
			engineeringPracticeUsed = true;
		}
		if (ActionType.SocialPractice == actionType) {
			socialPracticeUsed = true;
		}
		round++;
		if (round >= 2) {
			if (!engineeringPracticeUsed) {
				capacity -= 4;
			} else {
				capacity -= 2;
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
