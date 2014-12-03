package com.agilepainrelief.teamsgame;

public class BuildServer {
	private final int sprintCreated;

	public BuildServer(int inSprintCreated) {
		sprintCreated = inSprintCreated;
	}

	public boolean isInEffect(int currentSprint) {
		return sprintCreated + 1 <= currentSprint;
	}
}
