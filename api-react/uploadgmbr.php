<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$gmbr = $_FILES['gmbr'];

if (!is_dir('img')) {
    mkdir('img', 0777, true);
}

for($i = 0;$i < count($gmbr['name']);$i++){
    if(move_uploaded_file($gmbr['tmp_name'][$i],'img/'.$gmbr['name'][$i])){
        $data['status'] = true;
        $data['pesan'] = 'Berhasil';
        echo json_encode($data);
    }else{
        $data['status'] = false;
        $data['pesan'] = 'Gagal Upload';
        echo json_encode($data);
    }
}


?>