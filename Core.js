/*eslint-env jquery, browser*/
var termsrgx = /{"terms":\[[^\]]+\]}/;

function parse(code){
	$.ajax({
    url : "https://quizlet.com/"+code+"/export",
    success : function(result){
    	return JSON.parse(result.match(termsrgx));
    }
});
}