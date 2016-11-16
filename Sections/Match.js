/*eslint-env browser, jquery*/

(function() {
  var a = document.createElement("SCRIPT");
  a.src = location.protocol + "//code.jquery.com/jquery-3.1.1.min.js";
  a.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(a);
  var b = setInterval(function() {
    if ("undefined" === typeof jQuery) {
      return !1;
    }
    clearTimeout(b);
    Main();
  }, 1E3);
})();

function Main(){
	pressButton();
}

function pressButton(){
	($(".UIButton--hero")[0]).click();
}
