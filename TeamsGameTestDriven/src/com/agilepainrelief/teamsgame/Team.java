package com.agilepainrelief.teamsgame;

import java.util.*;

public class Team {
	public static final float defaultStorySuccess = 0.66f;

	private int capacity = 10;
	private int sprint = 0;

	private final List<TeamAction> teamActionList = new ArrayList<TeamAction>();

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint >= 2) && (capacity > 0)) {
			int changeInCapacity = -4;
			boolean engineeringActionTaken = false;
			boolean socialActionTaken = false;

			for (TeamAction teamAction : teamActionList) {
				if (teamAction.getActionType() == ActionType.Engineering) {
					engineeringActionTaken = true;
				} else {
					socialActionTaken = true;
				}

				changeInCapacity += teamAction.calculateEffect(sprint);
			}

			if (engineeringActionTaken) {
				changeInCapacity += 2;
			}
			if (socialActionTaken) {
				changeInCapacity += 2;
			}

			capacity += changeInCapacity;
			if (capacity < 0) {
				capacity = 0;
			};
		}
	}

	public void addAction(TeamAction teamAction) {
		if (false == teamAction.validate(teamActionList)) {
			throw new IllegalStateException();
		}
		if (teamAction instanceof UnitTesting) {
			if (false == actionsContainsBuildServer()) {
				throw new IllegalStateException();
			}

			if (true == actionsContainsUnitTest()) {
				throw new IllegalStateException();
			}
		}

		if (teamAction instanceof TeamMembersOnSameFloor) {
			if (true == actionsContainsTeamMembersOnSameFloor()) {
				throw new IllegalStateException();
			}
		}

		teamActionList.add(teamAction);
	}

	private boolean actionsContainsUnitTest() {
		for (TeamAction teamAction : teamActionList) {
			if (teamAction instanceof UnitTesting) {
				return true;
			}
		}

		return false;
	}

	private boolean actionsContainsTeamMembersOnSameFloor() {
		for (TeamAction teamAction : teamActionList) {
			if (teamAction instanceof TeamMembersOnSameFloor) {
				return true;
			}
		}
		return false;
	}

	private boolean actionsContainsBuildServer() {
		for (TeamAction teamAction : teamActionList) {
			if (teamAction instanceof BuildServer) {
				return true;
			}
		}
		return false;
	}

	public float getStorySuccessPercentage() {
		if (scrumMasterProtectsTeamFromDistractionCurrentlyInPlace()) {
			return 0.83f;
		}
		return defaultStorySuccess;
	}

	private boolean scrumMasterProtectsTeamFromDistractionCurrentlyInPlace() {
		for (TeamAction teamAction : teamActionList) {
			if (teamAction instanceof ScrumMasterProtectsFromOutsideDistraction) {
				if (teamAction.getSprintCreated() == sprint) {
					return true;
				}
			}
		}
		return false;
	}
}
