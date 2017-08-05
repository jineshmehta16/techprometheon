$(document).ready(function(){

var localObj = JSON.parse(localStorage.getItem("object"));
//alert(localObj.Title);


var title="";
var content="";
var id1="";
var date1="";

title+="<h1>"+localObj.Title+"</h1>"
content+="<p>"+localObj.Content+"</p>";
id1+="<p>"+localObj.Id+"</p>";
date1+="<p>"+localObj.Date+"</p>";

$(title).appendTo("#title");
$(content).appendTo("#content");
$(id1).appendTo("#id1");
$(date1).appendTo("#date1");

});
	

 