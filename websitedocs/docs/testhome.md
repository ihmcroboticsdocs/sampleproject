---
id: testhome
title: Test Home
sidebar_label: test
---

Hello this is some markdown text.

<pre><code id="code" class="hljs css languages- java">

</code>
</pre>

<script>
fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => document.getElementById("code").innerHTML = data)
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
