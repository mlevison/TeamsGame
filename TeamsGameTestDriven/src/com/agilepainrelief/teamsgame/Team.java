package com.agilepainrelief.teamsgame;

import java.util.*;

public class Team {
	private int capacity = 10;
	private int sprint = 0;

	private final List<TeamAction> teamActionList = new ArrayList<TeamAction>();

	// private BuildServer buildServer;
	// private TeamMembersOnSameFloor teamMembersOnSameFloor;
	// private TeamWorkingAgreements teamWorkingAgreements;

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint >= 2) && (capacity > 0)) {
			// assume positive action taken
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
		if (teamAction instanceof UnitTesting) {
			if (false == actionsContainsBuildServer()) {
				throw new IllegalStateException();
			}
		}
		teamActionList.add(teamAction);
	}

	private boolean actionsContainsBuildServer() {
		for (TeamAction teamAction : teamActionList) {
			if (teamAction instanceof BuildServer) {
				return true;
			}
		}
		return false;
	}
}
