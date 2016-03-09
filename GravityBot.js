/*eslint-env jquery, browser*/
'use strict';
var norgx = /\d+/;
var termsrgx = /{"terms":\[[^\]]+\]}/;
var termrgx = /\$term-\d+/;

	$.ajax({
    url : "https://quizlet.com/"+window.location.href.match(norgx)[0]+"/export",
    success : function(result){
    	data= JSON.parse(result.match(termsrgx));
    }
});


var data = null;
//setInterval(
$("textarea").keydown(
function()
{
	console.log("proc");
	var raw = $(".GravityTerm-contentWrapper").attr("data-reactid").toString();
	var no = raw.match(termrgx)[0].match(norgx)[0];
	$("textarea").val(toeng(no));
	//submit();
}
//,1
);

function submit(){
	var e = $.Event("keydown");
    e.which = 13;
    e.keyCode=13;
    $("textarea").trigger(e);
    e = $.Event("keyup");
    e.which = 13;
    e.keyCode=13;
    $("textarea").trigger(e);
    e= $.Event("submit");
    $("textarea").trigger(e);
}

function toeng(id){
for(var i=0;i<data.terms.length;i++){
	if(id==data.terms[i].id){
		return data.terms[i].definition;
	}
}
console.error("moo!!");
return "MOOO! ERROR!!";
}