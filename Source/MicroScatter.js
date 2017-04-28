/*eslint-env jquery, browser*/
$("#start").children().trigger("click");
var terms = $("a.cell[data-type=term]");
var definitions = $("a.cell[data-type=definition]");
setInterval(function()
{
	for(var i = 0; i < terms.length; i++){
		var ans = toEng($(terms[i]).children().children().html());
		ans.trigger( "click" );
		$(terms[i]).trigger( "click" );
	}
}, 1);

function toEng(word){
	console.log("word: "+word);
	
	var id;
	for(var i = 0; i < terms.length;i++){
		if($(terms[i]).children().children().html() == word){
			//console.log(terms[i]);
			id = $(terms[i]).attr("data-id");
		}
	}
	
	for(var i = 0; i<definitions.length;i++){
		//console.log($(definitions[i]).attr("data-id"));
		//console.log($(definitions[i]).children().children().html());
		if($(definitions[i]).attr("data-id") == id){
		//	console.log($(definitions[i]).children().children().html());
		//return $(definitions[i]).children().children().html();
		return $(definitions[i]);
		}
	}
	console.error("moo!");
	return null;
}
