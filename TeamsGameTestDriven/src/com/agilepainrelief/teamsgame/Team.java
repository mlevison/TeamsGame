package com.agilepainrelief.teamsgame;

public class Team {
	private int capacity = 10;
	private int sprint = 0;
	private TeamAction buildServer;
	private TeamMembersOnSameFloor teamMembersOnSameFloor;

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint >= 2) && (capacity > 0)) {
			int changeInCapacity = -4;

			if ((buildServer != null) && (buildServer.isInEffect(sprint))) {
				changeInCapacity += 2;
			}

			if ((teamMembersOnSameFloor != null)
					&& (teamMembersOnSameFloor.isInEffect(sprint))) {
				changeInCapacity += 2;
			}

			capacity += changeInCapacity;
			if (capacity < 0) {
				capacity = 0;
			};
		}
	}
	public void addAction(TeamAction inBuildServer) {
		buildServer = inBuildServer;
	}

	public void addAction(TeamMembersOnSameFloor inTeamMembersOnSameFloor) {
		teamMembersOnSameFloor = inTeamMembersOnSameFloor;
	}
}
