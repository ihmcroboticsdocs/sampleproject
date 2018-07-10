require('isomorphic-fetch');
var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

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