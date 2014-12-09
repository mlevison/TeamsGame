package com.agilepainrelief.teamsgame.bdd;

import static org.junit.Assert.*;
import cucumber.api.java.en.*;

public class TeamDegradesStepsdef {
	private Teams teams;

	@Given("^My Teams IntialCapacity is (\\d+)$")
	public void My_Teams_IntialCapacity_is(int capacity) throws Throwable {
		teams = new Teams(capacity);
	}

	@When("^I don't improve Engineering Practice or Social Practice$")
	public void I_don_t_improve_Engineering_Practice_or_Social_Practice()
			throws Throwable {
		// Was Capacity better expressed as a when?
	}

	@Then("^After (\\d+) rounds the teams capacity to (\\d+)$")
	public void After_rounds_the_teams_capacity_to(int inRound,
			int expectedFinalCapacity) throws Throwable {

		for (int round = 0; round < inRound; round++) {
			teams.executeAction();
		}

		assertEquals(expectedFinalCapacity, teams.getCapacity());
	}
}
