<?php
	// Include confi.php
include_once('connect.php');

$uid=100;

	if(!empty($uid)){
		$qur = mysql_query("select id,title,content,date from `blogs` where status='Active' order by id desc");
		$result =array();
		while($r = mysql_fetch_array($qur)){
			extract($r);
			$result[] = array("Id" => $id,"Title" =>$title, "Content" =>$content,"Date" =>$date); 
		}
		$result1[]= array("status" => 1, "info" => $result);
		
		$json  = array("viewBlogsDetails"=>$result1);
		
		//$json = array("status" => 1, "info" => $result);
	}else{
			 $result2[] = array("status" => 0, "msg" => "Error");
		 
		 $json  = array("viewBlogsDetails"=>$result2);
		
		//$json = array("status" => 0, "msg" => "Error");
	}
	@mysql_close($conn);

	/* Output header */
	// header('Content-type: application/json');
	echo json_encode($json);
	
?>