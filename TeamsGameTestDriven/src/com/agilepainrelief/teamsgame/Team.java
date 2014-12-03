package com.agilepainrelief.teamsgame;

public class Team {
	private int capacity = 10;
	private int sprint = 0;

	public int getCapacity() {
		return capacity;
	}

	public void executeSprint() {
		sprint++;
		if ((sprint > 1) && (capacity > 0)) {
			capacity -= 4;
			if (capacity < 0) {
				capacity = 0;
			};
		}
	}
}
