package com.agilepainrelief.teamsgame;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import org.junit.*;

public class ProtectedFromOutsideDistractionTest {
	// *TODO write these tests
	// Has no effect on capacity
	// If Used for two rounds in succession it is permanent
	// if used in one round, not the next and the round afterward it is not
	// permanent

	@Test
	public void scrumMasterProtectsTeamFromDistractionsHasNoEffectOnCapacityInFirstRound() {
		Team team = new Team();
		team.addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		team.executeSprint();
		assertEquals(10, team.getCapacity());
	}

	@Test
	public void scrumMasterProtectsTeamFromDistractionsHasNoAffectOnCapacityInAnyRound() {
		Team team = new Team();
		team.addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		team.executeSprint();
		team.executeSprint();
		assertEquals(8, team.getCapacity());
	}

	@Test
	public void scrumMasterDoesnProectFromDistractionsDefaultSuccessPercentage() {
		Team team = new Team();

		assertThat(Team.defaultStorySuccess,
				is(equalTo(team.getStorySuccessPercentage())));
	}

	@Test
	public void scrumMasterProtectsTeamFromDistractionsAffectsStorySuccessPercentageInCurrentRound() {
		Team team = new Team();
		team.addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		team.executeSprint();

		assertThat(0.83f, is(equalTo(team.getStorySuccessPercentage())));
	}

	@Test
	public void scrumMasterProtectsForOnlyOneRoundOnlyProtectsTeamFromDistractionsAffectsStorySuccessPercentageForCurrentRound() {
		Team team = new Team();
		team.addAction(new ScrumMasterProtectsFromOutsideDistraction(1));

		team.executeSprint();
		team.executeSprint();

		assertThat(Team.defaultStorySuccess,
				is(equalTo(team.getStorySuccessPercentage())));
	}
}
