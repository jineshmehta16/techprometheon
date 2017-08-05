$(function() 
{
$(document).ready(function()
{
		
$.getJSON("http://localhost/acme-free/webservice/viewBlogsDetails.php",function(data)
{

//console.log(data);

var blog="";

$.each(data.viewBlogsDetails, function(i,data)
{

$.each(data.info, function(j,data){

	
/* 	blog+= "<h3 style='color: green;'>"+data.Title+"</h3>";
	blog+= "<p>"+data.Content+"</p>";
    blog+= "<p>"+data.Date+"</p>"; */
	
	 blog+="<section><div class='blog-item'><div class='row'><div class='col-lg-2 col-sm-2 text-right'>";
			
            blog+="<div class='date-wrap'>";
            blog+="<span class='date'>";
            blog+=data.Id;       
            blog+="</span>";
            blog+="<span class='month'>";
            blog+=data.Date;    
            blog+="</span>";
            blog+="</div>";
			   
            blog+="</div>";
            blog+="<div class='col-lg-10 col-sm-10'>";
            blog+="<h1>";
            blog+="<a href='blog-detail.html'>";
            blog+=data.Title;
            blog+="</a>";
            blog+="</h1>";
            blog+="<p>";
            blog+=data.Content.substr(0,150);
            //blog+="<button type='submit' id='blogDetailId' name='blogDetailId' value="+data.Id+" class='btn btn-primary test'>Continue Reading</button></p>";
            blog+="<div class='button-container'><button type='submit' id='blogDetailId' value="+data.Id+" class='btn btn-primary blogDetailId'>Continue Reading</button></div></p>";
    
	        //blog+="<button type='submit' onclick=test('3') class='btn btn-primary blogDetailId'><input type='text' name='blogDetailId' id='blogDetailId'>Continue Reading</button></p>";

			
			//blog+="<div class='button-container'><button class='blogDetailId1'  id='blogDetailId1' value="+data.Id+">Continue Reading</button></div>";


			
            blog+="</div>";
            blog+="</div>";
            blog+="</div></section>";
			
			
			
	        
});

blog+="<script src='js/viewBlogsDetailsById.js'></script>";
//blog+="<script src='js/test.js'></script>";

});


$(blog).appendTo("#blogs");

/* $('#paginate').easyPaginate({
	paginateElement: 'section',
    elementsPerPage: 2,
    effect: 'climb'
});
 */

});
return false;

});

});

