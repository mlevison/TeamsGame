package com.agilepainrelief.teamsgame;

public class Team {
	private int capacity = 10;
	private int sprint = 0;
	private BuildServer buildServer;

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint >= 2) && (capacity > 0)) {
			if (buildServer == null) {
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
	}
}
