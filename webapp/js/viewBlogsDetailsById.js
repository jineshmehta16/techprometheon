$(document).ready(function(){
$(".blogDetailId").click(function(e)

{
	

var obj ={ id : $(this).val()};

var MyForm = $("#ajaxformlogin1").serializeJSON();
console.log(MyForm);


 $.post("http://localhost/acme-free/webservice/viewBlogsDetailsByID.php", obj , function(data){
             
            // show the response
			console.log(data);
			var loginResponse = JSON.parse(data);
			registerUser(loginResponse);
			
             
        }).fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;

 e.preventDefault(); //STOP default action

   


});

});
	
	function  registerUser(loginResponse)
	{ 
		$.each(loginResponse.viewBlogsDetailsById, function(i,data)
       {		
	
	    var title="";
		var content="";
	
		if(data.status == '1')
		{
			console.log(data);
			$.each(data.info, function(j,data)
			{
				
				localStorage.setItem("object", JSON.stringify(data));
				window.location.href = 'blogdetailCopy.html';
				
				});
				
		}
		else if(data.status == '0')
		{
									  
		}
		else
		{
			
		}
	   });
	}
	

 