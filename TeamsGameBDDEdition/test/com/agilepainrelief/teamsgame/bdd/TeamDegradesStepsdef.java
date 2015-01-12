package com.agilepainrelief.teamsgame.bdd;

import static org.junit.Assert.*;
import cucumber.api.java.en.*;

public class TeamDegradesStepsdef {
	private Teams teams;
	private ActionType actionType;

	@Given("^My Teams IntialCapacity is (\\d+)$")
	public void My_Teams_IntialCapacity_is(int capacity) throws Throwable {
		teams = new Teams(capacity);
	}

	@When("^(\\w*) Improved$")
	public void ActionTaken(String action) throws Throwable {
		if (action.contains("Nothing")) {
			actionType = ActionType.NoImprovement;
		} else if (action.contains("BuildServerAdded")) {
			actionType = ActionType.EngineeringPractice;
		} else if (action.contains("Social")) {
			actionType = ActionType.SocialPractice;
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
