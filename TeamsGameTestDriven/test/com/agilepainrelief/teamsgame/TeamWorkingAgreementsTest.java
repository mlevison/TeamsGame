package com.agilepainrelief.teamsgame;

import static org.junit.Assert.*;

import org.junit.*;

public class TeamWorkingAgreementsTest extends TeamTestBase {
	@Test
	public void teamWorkingAgreementsHaveNoAffectInFirstRound() {
		getTeam().addAction(new TeamWorkingAgreements(1));

		executeCountSprints(1);
		assertEquals(10, getTeam().getCapacity());
	}

	@Test
	public void teamWorkingAgreementsLimitCapacityReductionInFirstSprintAfterUse() {
		getTeam().addAction(new TeamWorkingAgreements(1));

		executeCountSprints(2);
		assertEquals(9, getTeam().getCapacity());
	}

	@Test
	public void teamWorkingAgreementsLimitCapacityReductionInOneTimeEffectProvenOverThreeSprints() {
		getTeam().addAction(new TeamWorkingAgreements(1));

		executeCountSprints(3);
		assertEquals(7, getTeam().getCapacity());
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
