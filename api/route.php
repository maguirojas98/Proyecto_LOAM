<?php
/*
http://192.168.0.108/PROYECTO_FINAL/api/route.php?option=list_comentarios
*/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/json;charset=utf-8'); 
include('api.php');

$api = new Api();

$option = $_GET['option'];

if($option=='list_comentarios')
{
    $data = $api->list_comentarios();
}

echo json_encode($data);
?>