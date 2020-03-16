<?php
header('Access-Control-Allow-Origin: *');
include('koneksi.php');

$nama = $_POST['inputNama'];

if(!empty($nama)){

    $sqlcek = "select * from tb_namasiswa where nama = '$nama' ";
    $rescek = mysqli_query($conn,$sqlcek);

    if(mysqli_num_rows($rescek) > 0){
        return;
    }

    $sql        = "insert into tb_namasiswa (nama) values('$nama')";
    $exec       =  mysqli_query($conn,$sql);
}

print_r(mysqli_num_rows($rescek));

?>