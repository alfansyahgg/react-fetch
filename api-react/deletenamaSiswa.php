<?php
header('Access-Control-Allow-Origin: *');
include('koneksi.php');

$id = $_POST['id'];

if(!empty($id)){
    $sql        = "delete from tb_namasiswa where id='$id'";
    $exec       =  mysqli_query($conn,$sql);
}
print_r($id);

?>