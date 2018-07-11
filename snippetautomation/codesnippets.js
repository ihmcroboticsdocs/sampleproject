hljs.initHighlightingOnLoad();

var allScripts = document.getElementsByTagName('script');
var script = allScripts[allScripts.length-1];
console.log("Script name is " + script);
var sources = eval(script.getAttribute('sources'));
var urls, start, end, snippet;

//If there is only one source, then no need to do promises or fill up urls array
if(sources.length == 1) 
{
    var url = sources[0].url;
    var snippets = sources[0].snippets;
    
    //Working with complete file
    if(snippets.length == 1 && snippets[0].length == 1)
    {
        var id = snippets[0][0];
        fetch(url).then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = hljs.highlight('java', data).value)
    }
}


/*
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
*/ 