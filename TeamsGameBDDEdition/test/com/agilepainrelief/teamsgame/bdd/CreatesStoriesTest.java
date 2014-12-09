package com.agilepainrelief.teamsgame.bdd;

import org.junit.runner.*;

import cucumber.api.*;
import cucumber.api.junit.*;

// Associates Cucumber-JVM with the JUnit runner
@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/cucumber-html-report",
		"json:target/cucumber-json-report.json"})
public class CreatesStoriesTest {
}