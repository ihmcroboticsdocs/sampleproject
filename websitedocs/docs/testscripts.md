---
id: testscripts
title: Testing scripts
---

<pre><code id="ValkyrieDemo"></code></pre>

<pre><code id="RobotVariables"></code></pre>

<pre><code id="RobotConstructor"></code></pre>

<script>
var valURL ="https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java";
var valId = "ValkyrieDemo";
var robotURL ="https://rawgit.com/ihmcroboticsdocs/simulation-construction-set/master/src/main/java/us/ihmc/simulationconstructionset/Robot.java"
var robotConstructorId = "RobotConstructor";
var robotConstructorStart = "public Robot";
var robotConstructorEnd = "\n\n";
var robotVariablesId = "RobotVariables";
var robotVariablesStart = "protected";
var robotVariablesEnd = "gravityZ";
</script>

<script src="../snippetautomation/codesnippets.js" sources=Array.of({url:valURL,snippets:[[valId]]},{url:robotURL,snippets:[[robotConstructorId,robotConstructorStart,robotConstructorEnd],[robotVariablesId,robotVariablesStart,robotVariablesEnd]]})></script>