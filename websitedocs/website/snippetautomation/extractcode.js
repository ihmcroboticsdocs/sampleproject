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


