package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class TeamWorkingAgreementsTest {
	@Test
	public void teamWorkingAgreementsHaveNoAffectInFirstRound() {
		Team team = new Team();
		team.addAction(new TeamWorkingAgreements(1));

		team.executeSprint();
		assertEquals(10, team.getCapacity());
	}

	@Test
	public void teamWorkingAgreementsLimitCapacityReductionInFirstSprintAfterUse() {
		Team team = new Team();
		team.addAction(new TeamWorkingAgreements(1));

		team.executeSprint();
		team.executeSprint();
		assertEquals(9, team.getCapacity());
	}

	@Test
	public void teamWorkingAgreementsLimitCapacityReductionInOneTimeEffectProvenOverThreeSprints() {
		Team team = new Team();
		team.addAction(new TeamWorkingAgreements(1));

		team.executeSprint();
		team.executeSprint();
		team.executeSprint();
		assertEquals(7, team.getCapacity());
	}

	@Test
	public void teamWorkingAgreementsHaveNoEffectInTheCurrentSprint() {
		TeamWorkingAgreements teamWorkingAgreements = new TeamWorkingAgreements(
				1);

		assertEquals(0, teamWorkingAgreements.calculateEffect(1));
	}

	@Test
	public void teamWorkingAgreementsHavEffectInTheNextSprint() {
		TeamWorkingAgreements teamWorkingAgreements = new TeamWorkingAgreements(
				1);

		assertEquals(1, teamWorkingAgreements.calculateEffect(2));
	}

	@Test
	public void teamWorkingAgreementsHaveNoEffectTwoSprintsAfterCreation() {
		TeamWorkingAgreements teamWorkingAgreements = new TeamWorkingAgreements(
				1);

		assertEquals(0, teamWorkingAgreements.calculateEffect(3));
	}
}
