---
id: testhome
title: Test Home
sidebar_label: test
---
<script>hljs.initHighlightingOnLoad();</script>
<script>
fetch("https://rawgit.com/ihmcroboticsdocs/sampleproject/master/src/us/ihmc/testeuclid/ValkyrieDemo.java")
    .then(response =>response.text())
    .then(data => document.getElementById("code").innerHTML = hljs.highlight('java', data).value) 
</script>

<pre><code id="code">

</code>
</pre>



