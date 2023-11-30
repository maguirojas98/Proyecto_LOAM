<?php
class Api{
    private $connect='';
    function __construct()
    {
        $this -> connect = new PDO("mysql:host=localhost;dbname=peliculas;port=3366;charset=utf8", "root", "admin");
    }

    function list_comentarios(){
        
        try {
            $query="select * from comentarios";
            $sql = $this->connect->prepare($query);
            $ok= $sql->execute();						
            if($ok){				
                $data=null;
                while($row = $sql->fetch(PDO::FETCH_ASSOC))
                {
                    $data[] = $row;
                }				
                $datasuccess=[
                    'status'=>200,
                    'data'=>$data
                ];
                return $datasuccess;
            }
            else{	
                $datasuccess=[
                    'status'=>500,
                    'message'=>'error al ejecutar la consulta'
                ];
                return $datasuccess;
            }
        } catch (Exception $e) {
            $datasuccess[]=[
                'status'=>500,
                'menssage'=>'algo malo paso'
            ];
            return  $datasuccess;
        }
    }
}