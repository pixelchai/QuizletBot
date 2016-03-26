/*eslint-env browser, jquery*/
a();
console.log("Welcome to quizletbot by PixelZerg");
var msctrterms=null;
var msctrdefinitions = null;
var srfailed = false;
var sranswers = null;
try{
sranswers = eval((/QTerm.dataToArray\(.*\)/g).exec($('html').html())[0]);
}catch(e){}
var bno = -1;
var url = "";
var enabled = true;
function stopquizletbot(){
	enabled = false;
}
var shownmsg = false;
var shownrngmsg = false;
try{
	url = window.location.href;
}
catch(e)
{
	console.log("catch");
	url = document.URL;
}

Setup();

function Setup(){
	if(/microscatter$/.test(url)){
		bno = 0;
	} else if (/spacerace$/.test(url)){
		bno = 1;
	}else{
		console.error("The quizlet game you are currently on isn't currently supported! Bot disabled!");
		enabled = false;
	}
	
	console.log(bno);
	
	if(bno == 0){
		console.log("Microscatter detected!");
		$("a#start").trigger("click");
		msctrterms =  $("a.cell[data-type=term]");
		msctrdefinitions = $("a.cell[data-type=definition]");
	} else if (bno == 1){
		console.log("SpaceRace detected!");
	}
}

setInterval(function()//main loop
{
	if(enabled){
		if(bno == 0){
			msctrloop();
		}else if(bno == 1){
			srloop();
		}
		if(!shownrngmsg){
		console.log("quizletbot running...");
		shownrngmsg = true;
	}

	}else{
	if(!shownmsg){console.log("quizletbot stopped!");
	shownmsg=true;
}

	}
}, 1);

function msctrloop(){
	for(var i = 0; i < msctrterms.length; i++){
		
		var ans = msctrtoEng($(msctrterms[i]).children().children().html());
		ans.trigger( "click" );
		$(msctrterms[i]).trigger( "click" );
	}
	enabled = false;
}

function msctrtoEng(word){
	//console.log("word: "+word);
	
	var id;
	for(var i = 0; i < msctrterms.length;i++){
		if($(msctrterms[i]).children().children().html() == word){
			//console.log(terms[i]);
			id = $(msctrterms[i]).attr("data-id");
		}
	}
	
	for(var i = 0; i<msctrdefinitions.length;i++){
		//console.log($(definitions[i]).attr("data-id"));
		//console.log($(definitions[i]).children().children().html());
		if($(msctrdefinitions[i]).attr("data-id") == id){
		//	console.log($(definitions[i]).children().children().html());
		//return $(definitions[i]).children().children().html();
		return $(msctrdefinitions[i]);
		}
	}
	console.error("moo!");
	return null;
}

function srloop(){
	var t = "";
	if ($(".value").length > 0)
	{
		t = srtoeng($(".free").first().children().text());
		$(".value").val(t);
	}
	if(!srfailed){
		srsubmit();
	}
	srfailed=false;
}
function srsubmit() {
    var e = $.Event("keydown");
    e.which = 13;
    $('#gun').trigger(e);
    //ty, the-twee
}
function srtoeng(s)
{
	var no = 0;
	while (no !== sranswers.length)
	{
		if (s == sranswers[no].definition)
		{
			return sranswers[no].word;
		}
		no++;
	}
	console.error("mooo!");
	srfailed=true;
	return "";
}
function a(){
console.log("   ____          _       _        _    ____          _   \r\n  \/ __ \\        (_)     | |      | |  |  _ \\        | |  \r\n | |  | | _   _  _  ____| |  ___ | |_ | |_) |  ___  | |_ \r\n | |  | || | | || ||_  \/| | \/ _ \\| __||  _ <  \/ _ \\ | __|\r\n | |__| || |_| || | \/ \/ | ||  __\/| |_ | |_) || (_) || |_ \r\n  \\___\\_\\ \\__,_||_|\/___||_| \\___| \\__||____\/  \\___\/  \\__|\r\n                                                         \r\n                                                         ");
}