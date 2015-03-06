package com.agilepainrelief.teamsgame;

public class StoryCalculator {
	private final IPercentage percentage;

	public StoryCalculator(IPercentage inPercent) {
		percentage = inPercent;
	}

	public int commit(int commitedStories) {
		float completedStories = (commitedStories * percentage
				.getCompletionPercentage());

		return (int) Math.rint(completedStories);
	}
}
