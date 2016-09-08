<?php
// Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"

header('Content-type: text/html');  

$tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=pruebas.czsf3gnrfqtq.us-west-2.rds.amazonaws.com)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))";
$conn = oci_connect("pruebas", "ninise92", $tns);
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
/*
$conn = oci_connect('AUTOMOTOR', 'automotor', '192.168.1.89/automotor');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}*/
$idUsuario= $_POST['id_usuario'];
//Tabla con informacion de las ciudades
$stid = oci_parse($conn, "SELECT Id_usuario FROM AC_USUARIO WHERE Id_usuario= '${idUsuario}'");
oci_execute($stid);

$rows = [];

$i = 0;
while ($row =  oci_fetch_assoc($stid)) {
    $i++;
}
if ($i == 0) {
    echo "true";
}else{
  echo "false";
}



function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}

function is_array_empty($arr){
  if(is_array($arr)){     
      foreach($arr as $key => $value){
          if(!empty($value) || $value != NULL || $value != ""){
              return true;
              break;//stop the process we have seen that at least 1 of the array has value so its not empty
          }
      }
      return false;
  }
}
?>
