package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

public class StoriesCompleted {

	@Test
	public void OneStoryCommittedOneStoryCompleted() {
		IPercentage fakePercent = new FakePercentage();

		StoryCalculator storyCalculator = new StoryCalculator(fakePercent);

		assertThat(storyCalculator.commit(1), is(1));
	}

	@Test
	public void TwoStoryCommittedOneStoryCompleted() {
		IPercentage fakePercent = new FakePercentage();

		StoryCalculator storyCalculator = new StoryCalculator(fakePercent);

		assertThat(storyCalculator.commit(2), is(1));
	}

	@Test
	public void ThreeStoryCommittedTwoStoryCompleted() {
		IPercentage fakePercent = new FakePercentage();

		StoryCalculator storyCalculator = new StoryCalculator(fakePercent);

		assertThat(storyCalculator.commit(3), is(2));
	}

	@Test
	public void FourStoryCommittedThreeCompleted() {
		IPercentage fakePercent = new FakePercentage();

		StoryCalculator storyCalculator = new StoryCalculator(fakePercent);

		assertThat(storyCalculator.commit(4), is(3));
	}

	@Test
	public void FiveStoryCommittedThreeCompleted() {
		IPercentage fakePercent = new FakePercentage();

		StoryCalculator storyCalculator = new StoryCalculator(fakePercent);

		assertThat(storyCalculator.commit(5), is(3));
	}

	public class FakePercentage implements IPercentage {
		@Override
		public float getCompletionPercentage() {
			return 0.666666f;
		}
	}

}
