package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

public class ProtectedFromOutsideDistractionTest extends TeamTestBase {
	// *TODO write these tests
	// Has no effect on capacity
	// If Used for two rounds in succession it is permanent
	// if used in one round, not the next and the round afterward it is not
	// permanent

	@Test
	public void scrumMasterProtectsTeamFromDistractionsHasNoEffectOnCapacityInFirstRound() {

		getTeam().addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		executeCountSprints(1);
		assertEquals(10, getTeam().getCapacity());
	}

	@Test
	public void scrumMasterProtectsTeamFromDistractionsHasNoAffectOnCapacityInAnyRound() {
		getTeam().addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		executeCountSprints(2);
		assertEquals(8, getTeam().getCapacity());
	}

	@Test
	public void scrumMasterDoesnProectFromDistractionsDefaultSuccessPercentage() {
		assertThat(Team.defaultStorySuccess, is(equalTo(getTeam()
				.getStorySuccessPercentage())));
	}

	@Test
	public void scrumMasterProtectsTeamFromDistractionsAffectsStorySuccessPercentageInCurrentRound() {
		getTeam().addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		executeCountSprints(1);
		assertThat(0.83f, is(equalTo(getTeam().getStorySuccessPercentage())));
	}

	@Test
	public void scrumMasterProtectsForOnlyOneRoundOnlyProtectsTeamFromDistractionsAffectsStorySuccessPercentageForCurrentRound() {
		getTeam().addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		executeCountSprints(2);

		assertThat(Team.defaultStorySuccess, is(equalTo(getTeam()
				.getStorySuccessPercentage())));
	}
}
