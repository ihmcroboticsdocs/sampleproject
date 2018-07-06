---
id: testsidebarsecond
title: sidebar second
sidebar_label: second
---

Hello this is some markdown text.

<p id="code">
</p>

<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<script>
var completeFile;
fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => completeFile = data)
    .then(() => document.getElementById("code").innerHTML = codeToHTML(completeFile))
</script>


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
