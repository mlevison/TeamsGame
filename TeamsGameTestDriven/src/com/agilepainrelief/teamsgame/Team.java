package com.agilepainrelief.teamsgame;

public class Team {
	private int capacity = 10;
	private int sprint = 0;
	private BuildServer buildServer;
	private int buildServerAddedInSprint = -1;

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint >= 2) && (capacity > 0)) {
			if ((buildServerAddedInSprint == -1)
					|| (buildServerAddedInSprint + 1 == sprint)) {
				capacity -= 4;
			} else {
				capacity -= 2;
			}
			if (capacity < 0) {
				capacity = 0;
			};
		}
	}
	public void addAction(BuildServer inBuildServer) {
		buildServer = inBuildServer;
		buildServerAddedInSprint = sprint;
	}
}
