// ==UserScript==
// @name         QuizletBot
// @namespace    http://pixelzerg.github.io/
// @version      0.1
// @description  Quizlet Space Race
// @author       PixelZerg
// @include      *
// @grant        none
// ==/UserScript==
/* jshint -W097 */
/*eslint-env browser, jquery*/
'use strict';
var answers = eval((/QTerm.dataToArray\(.*\)/g).exec($('html').html())[0]);
setInterval(function()
{
	var t = "";
	if ($(".value").length > 0)
	{
		t = toeng($(".free").first().children().text());
		$(".value").val(t);
	}
	if(t !== ""){
		submit();
	}
}, 1);

function submit() {
    var e = $.Event("keydown");
    e.which = 13;
    $('#gun').trigger(e);
    //ty, the-twee
}
function toeng(s)
{
	var no = 0;
	while (no !== answers.length)
	{
		if (s == answers[no].definition)
		{
			return answers[no].word;
		}
		no++;
	}
	console.error("mooo!");
	return "";
}
