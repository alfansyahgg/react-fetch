<?php
header('Access-Control-Allow-Origin: *');
include('koneksi.php');

$sql        = "select * from tb_namasiswa";
$query       =  mysqli_query($conn,$sql);

if(mysqli_num_rows($query) > 0){
    while($row = mysqli_fetch_object($query)){
        $data['status'] = true;
        $data['result'][] = $row;

        // $data2 = respond(true, $row);
    }
}else{
    $data['status'] = false;
    $data['result'][] = "Data not Found";
}

print_r(json_encode($data));



?>