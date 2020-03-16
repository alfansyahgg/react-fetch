<?php
header('Access-Control-Allow-Origin: *');
include('koneksi.php');

$id = $_POST['id'];
$nama = $_POST['inputNama'];

if(!empty($nama)){
    $sql        = "update tb_namasiswa set nama='$nama' where id='$id'";
    $exec       =  mysqli_query($conn,$sql);
}

print_r(mysqli_num_rows($rescek));

?>