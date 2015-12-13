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
//terms;
$(".value").keydown(function()
{
	if ($(".value").length > 0)
	{
		$(".value").val(toeng($(".free").first().children().text()));
	}
});

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
	return null;
}