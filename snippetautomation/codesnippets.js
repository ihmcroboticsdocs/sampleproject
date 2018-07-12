hljs.initHighlightingOnLoad();

//Get the array of urls
var allScripts = document.getElementsByTagName('script');
var script = allScripts[allScripts.length-1];
var sources = eval(script.getAttribute('sources'));
var numberOfSources = sources.length;

//Getting the attributes from all the code blocks
var allCodeBlocks = Array.from(document.getElementsByTagName('code'));
var urls = []; //array of data from each source

//Get and operate on data from source files
for(i = 0; i < numberOfSources; i++) 
	{
	urls[i] = fetch(sources[i]).then(function(response) {return response.text()});
	}
Promise.all(urls).then(function(values) {
	for(i = 0; i < numberOfSources; i++)
		{
		var dataFromSource = values[i];
		var matchIndex = allCodeBlocks.findIndex(function(element) {
			return element.getAttribute('data-url-index') == i.toString();
			});	
		
		//For each URL, find all the code blocks with matching data-url-index 
		while(matchIndex != -1) {				
			//Change inner HTML of code block
			var codeBlock = allCodeBlocks[matchIndex];
			if(codeBlock.getAttribute('data-snippet') == "complete")
				{
				codeBlock.innerHTML = hljs.highlight('java', dataFromSource).value;
				}
			else 
				{
				var startIndex = dataFromSource.indexOf(codeBlock.getAttribute('data-start'));
				var endIndex = dataFromSource.indexOf(codeBlock.getAttribute('data-end'), startIndex);
				var codeChunk = dataFromSource.substring(startIndex, endIndex);
				codeBlock.innerHTML = hljs.highlight('java', codeChunk).value;
				}
			allCodeBlocks.splice(matchIndex, 1);  //removes the element after operating on it
			
			matchIndex = allCodeBlocks.find(function(element) {
				return element.getAttribute('data-url-index') == i.toString();
				});	
			}
		}
});


/*
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
*/
/*
 * Old html stuff that worked:
 * <script src="../snippetautomation/codesnippets.js" sources=Array.of({url:valURL,snippets:[[valId]]},{url:robotURL,snippets:[[robotConstructorId,robotConstructorStart,robotConstructorEnd],[robotVariablesId,robotVariablesStart,robotVariablesEnd]]})></script>
 * 
 */
