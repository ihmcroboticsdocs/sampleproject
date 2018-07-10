require('isomorphic-fetch');
var hljs = require('highlight.js');


//Gets the file path from html file
var CODESOURCE = CODESOURCE || (function () {
    var arguments = {};

    return {
        init: function (Args) {
            arguments = Args;
            //assume this gets the right arg
            //fileSource = _args[0];
        }
    };
}());

var completeFile;

//Changes string of code to html
function codeToHTML(codeString)
{
    console.log(hljs.highlightAuto(codeString));
    // "<pre><code>\n" + codeString + "\n</code></pre>";
}




//Gets the .java file as a URL from github repo (updated code)
var file, start, snippet, end;
fetch("https://rawgit.com/ihmcroboticsdocs/simulation-construction-set/master/src/main/java/us/ihmc/simulationconstructionset/Robot.java")
    .then(response =>response.text())
    .then(data => file = data)
    .then(() => {
        start = file.indexOf("public Robot");
        end = file.indexOf("\n\n", start);
        snippet = file.substring(start, end);
        //console.log(hljs.highlight('java', snippet).value);
    })   
    //.then(() => console.log(hljs.highlight('java', completeFile)));


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
    console.log(hljs.highlight('java', allData.robotClass).value);
});

//console.log(hljs.highlight('java', completeFile));
//Testing script code to insert straight into tutorials
/*


<pre><code id="code">

</code>
</pre>

<script>
hljs.initHighlightingOnLoad();</script>
<script>
fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => document.getElementById("code").innerHTML = data)
</script>

*/

/*

<!--
<script>
document.getElementById("code").innerHTML = "testing code";
</script>

<script src="../snippetautomation/extractcode.js"></script>
<script type="text/javascript">
    CODESOURCE.init(["../../src/us/ihmc/testeuclid/ValkyrieDemo.java"]);
    CODESOURCE.testing();
</script>

<p> does raw html work? </p>

<p>
``` java
System.out.println("Does this look like code?");

```
</p>


This is the rest of the tutorial, attempt #3.

-->
*/

