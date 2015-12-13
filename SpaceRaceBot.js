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
/*globals terms */
'use strict';
var answers=[ 
     "Healthy eating","Manger sain",
     "fizzy drinks","les boissons gazeuses (fpl)",
     "cereals","les céréales (fpl)",
     "crisps","les chips (mpl)",
     "water","l'eau (f)",
     "fruit","les fruits (mpl)",
     "cakes","les gâteaux (mpl)",
     "vegetables","les légumes (mpl)",
     "pulses","les légumes secs (mpl)",
     "salty food","la nourriture salée",
     "eggs","les œufs (mpl)",
     "bread","le pain",
     "fish","le poisson",
     "potatoes","les pommes de terre (fpl)",
     "dairy products","les produits laitiers (mpl)",
     "meal","le repas",
     "salt","le sel",
     "sweets/confectionery","les sucreries (fpl)",
     "meat","la viande",
     "to have a balanced diet","manger équilibré",
     
];
//var quizbotrunning=true;

$(".value").keydown
(
function(){
if($(".value").length > 0)
{
	//	console.log("Translating:"+$(".free").first().children().text());
		$(".value").val(toeng(
		$(".free").first().children().text()
		));

}
function executeAsync(func) {
    setTimeout(func, 0);
}
});
function toeng(s){
	var no = 0;
	while(no !== answers.length){
		//console.log("comparing: "+answers[no] +" and "+s);
	if(s==answers[no]){
	//	console.log("Translation got: "+answers[no+1]);
		return answers[no+1];
	}
	no+=2;
	}
	console.error("mooo!");
}