package com.agilepainrelief.teamsgame.bdd;

public class Teams {
	private int capacity;
	private int round = 0;

	public Teams(int inCapacity) {
		capacity = inCapacity;
	}

	public void executeAction() {
		round++;
		if (round >= 2) {
			capacity -= 4;
		}
	}

	public int getCapacity() {
		return capacity;
	}
}
