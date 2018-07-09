---
id: testhome
title: Test Home
sidebar_label: test
---
<script>
var codeString;
hljs.initHighlightingOnLoad();
fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => codeString = data)
    .then(() => document.getElementById("code").innerHTML = hljs.highlight('java', codeString).value) 
</script>

<pre><code id="code">

</code>
</pre>



