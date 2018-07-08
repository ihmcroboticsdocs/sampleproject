require('isomorphic-fetch');

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
    return "<pre><code>\n" + codeString + "\n</code></pre>";
}


//Gets the .java file as a URL from github repo (updated code)

fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => completeFile = data)
    .then(() => console.log(codeToHTML(completeFile)))


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

