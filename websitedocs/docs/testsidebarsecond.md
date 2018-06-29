---
id: testsidebarsecond
title: sidebar second
sidebar_label: second
---

Hello this is some markdown text.

<script>

document.getElementById("code").innerHTML =  "\`\`\` groovy\n" + "task sourceJar(type: Jar, dependsOn: classes) { \n" +
   "classifier = \'sources\' \n" + 
   "from sourceSets.main.allJava \n" +
"}\n" + "\`\`\`\n"

</script>

<p id="code">
</p>

This is the rest of the tutorial.