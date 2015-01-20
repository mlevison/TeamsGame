package com.agilepainrelief.teamsgame.bdd;

import static org.hamcrest.CoreMatchers.*;

import org.junit.*;

import cucumber.api.java.en.*;

public class CapacityDegradesIfNothingDone {
	private final Teams teams = new Teams(10);

	@When("^the team only focuses on delivering stories$")
	public void the_team_only_focuses_on_delivering_stories() throws Throwable {
	}

	@Then("^capacity decreases by (\\d+) each round    # The support code is responsible for looping & checking$")
	public void capacity_decreases_by_each_round_The_support_code_is_responsible_for_looping_checking(
			int capacityReduction) throws Throwable {

		// First Round no effect
		teams.executeAction(ActionType.NoImprovement);

		while (teams.getCapacity() > 0) {
			int expectedCapacity = Math.max(0, teams.getCapacity()
					- capacityReduction);
			teams.executeAction(ActionType.NoImprovement);
			Assert.assertThat(teams.getCapacity(),
					is(equalTo(expectedCapacity)));
		}
	}
}
