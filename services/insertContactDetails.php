<?php

include_once('connect.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $data = json_decode(file_get_contents("php://input"));
  
}

$name1 = $data->name;
$email1 = $data->email;
$contact1 = $data->number;
$message1 = $data->message;

$sql = "INSERT INTO `techprometheon`.`contact` (`Name`, `Email`,`Contact`,`Message`, `Date`) VALUES ( '$name1', '$email1','$contact1','$message1','".date("Y/m/d")."')";

$qur = mysql_query($sql);

$id = mysql_insert_id();
 
 if($qur){
 //$json = array("status" => 1, "msg" => "Done Contact added!","id" => $id);
 
 $result[]= array("status" => 1, "msg" => "Done Contact added!","id" => $id);
 
 $json  = array("insertContactDetails"=>$result);
 
 }else{
	 
	 $result[]= array("status" => 0, "msg" => "Error adding contact!","id" => $id);
 
 $json  = array("insertContactDetails"=>$result); 
	 
 //$json = array("status" => 0, "msg" => "Error adding contact!","id" => $id);
 }
//}else{

// $json = array("status" => 0, "msg" => "Request method not accepted");
//}
 
@mysql_close($conn);
 
/* Output header */
 //header('Content-type: application/json');
 echo json_encode($json);
 ?>

