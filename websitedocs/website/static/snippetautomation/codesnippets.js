hljs.initHighlightingOnLoad();

var allScripts = document.getElementsByTagName('script');
var script = allScripts[allScripts.length-1];
var sources = eval(script.getAttribute('sources'));
var urls =[];
var allSnippets = [];

//Fill up URL and snippet arrays
var numberOfSources = sources.length;
for(i = 0; i < numberOfSources; i++) 
{
	urls[i] = fetch(sources[i].url).then(function(response) {return response.text()});
	allSnippets[i] = sources[i].snippets; //all the snippet selections per source
}

//Operate on the data from each source code file
Promise.all(urls).then(function(values) {
	for(i = 0; i < numberOfSources; i++) 
		{
		var dataFromSource = values[i];
		//Sets html according to each snippet selection in each source
		var snippetsFromSource = allSnippets[i];
		var numberOfSnippets = snippetsFromSource.length;
		for(var j = 0; j < numberOfSnippets; j++)
			{
			var id = snippetsFromSource[j][0];
			
			//Complete file
			if(snippetsFromSource[j].length == 1)
				{
				document.getElementById(id).innerHTML = hljs.highlight('java', dataFromSource).value;
				}
			//Portion of file
			else 
				{
				var startKey = snippetsFromSource[j][1];
				var endKey = snippetsFromSource[j][2];
				var startIndex = dataFromSource.indexOf(startKey);
				var endIndex = dataFromSource.indexOf(endKey, startIndex);
				var substring = dataFromSource.substring(startIndex, endIndex);
				document.getElementById(id).innerHTML = hljs.highlight('java', substring).value;
				}
			}
		}
});