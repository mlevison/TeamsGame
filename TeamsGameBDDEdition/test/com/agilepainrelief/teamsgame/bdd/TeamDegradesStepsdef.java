package com.agilepainrelief.teamsgame.bdd;

import static org.junit.Assert.*;
import cucumber.api.*;
import cucumber.api.java.en.*;

public class TeamDegradesStepsdef {
	private Teams teams;
	private ActionType actionType;

	@Given("^My Teams IntialCapacity is (\\d+)$")
	public void My_Teams_IntialCapacity_is(int capacity) throws Throwable {
		teams = new Teams(capacity);
	}

	@When("^(\\w*) Improved$")
	public void actionTaken(String action) throws Throwable {
		actionType = actionParser(action);
	}

	private ActionType actionParser(String action) {
		if (action.contains("Nothing")) {
			return ActionType.NoImprovement;
		} else if (action.contains("BuildServerAdded")) {
			return ActionType.BuildServerAdded;
		} else if (action.contains("UnitTesting")) {
			return ActionType.UnitTesting;
		} else if (action.contains("Social")) {
			return ActionType.SocialPractice;
		}

		return ActionType.NoImprovement;
	}

	@When("^No (\\w+) Change$")
	public void actionNotTaken(String action) throws Throwable {
		throw new PendingException();
	}

	@Then("Disallowed")
	public void actionDisallowed() {
		try {
			teams.executeAction(actionType);
			fail("IllegalArgumentExceptio expected");
		} catch (IllegalArgumentException iae) {

		}
	}

	@Then("^After (\\d+) rounds the teams capacity to (\\d+)$")
	public void After_rounds_the_teams_capacity_to(int inRound,
			int expectedFinalCapacity) throws Throwable {

		for (int round = 0; round < inRound; round++) {
			teams.executeAction(actionType);
		}

		assertEquals(expectedFinalCapacity, teams.getCapacity());
	}
}
