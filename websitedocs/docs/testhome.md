---
id: testhome
title: Test Home
sidebar_label: test
---
<script>hljs.initHighlightingOnLoad();</script>

<script>
var start, snippet, end;
var valkyrieClass = fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
            .then(function(response) {return response.text()});
var robotClass = fetch("https://rawgit.com/ihmcroboticsdocs/simulation-construction-set/master/src/main/java/us/ihmc/simulationconstructionset/Robot.java")
            .then(function(response) {return response.text()});
var allData = {"valkyrieClass":{}, "robotClass":{}};
Promise.all([valkyrieClass,robotClass]).then(function(values) {
    allData["valkyrieClass"] = values[0];
    allData["robotClass"] = values[1];
})
.then(() => {
	//Getting code from full .java file
    document.getElementById("ValkyrieDemo").innerHTML = hljs.highlight('java', allData.valkyrieClass).value;
	//Getting snippets of code
	start = allData.robotClass.indexOf("public Robot");
    end = allData.robotClass.indexOf("\n\n", start);
    snippet = allData.robotClass.substring(start, end);
    document.getElementById("RobotConstructor").innerHTML = hljs.highlight('java', snippet).value;
}); 
</script>

Note for future: The raw git links that are retrieved currently are the ones in development mode(new changes to GitHub reflected within minutes, but excessive traffic will be throttled and blacklisted. Alternative is production mode that has no traffic limit BUT has a permanent file link based on commit hash.

<pre><code id="ValkyrieDemo"></code></pre>

This is the beginning of code snippets:

<pre><code id="RobotVariables"></code></pre>

<pre><code id="RobotConstructor"></code></pre>








