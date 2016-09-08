<?php
header('Content-type: text/html; charset=UTF-8');  

$tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=pruebas.czsf3gnrfqtq.us-west-2.rds.amazonaws.com)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))";
$conn = oci_connect("pruebas", "ninise92", $tns);
/*
$conn = oci_connect('AUTOMOTOR', 'automotor', '192.168.1.89/automotor');*/
if (!$conn) {
	$e = oci_error();
	trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}
//foreach ($_POST as $key => $value) {
    //$_POST[$key] = htmlspecialchars($value, ENT_QUOTES,"UTF-8");
//}

$idUsuario= $_POST["placa"];
$contrasena= $_POST["pass"];
$telefono= $_POST["phone"];
$tipoUsuario="AS";
$ciudad=$_POST["ciudades"];
$departamento = $_POST['deptos'];
$pais="Colombia";
$puntosKilometraje= 0;
$linea=$_POST['linea'];
$aseguradora=$_POST['empresaA'];
$email=$_POST['email'];
$barrio=$_POST['barrio'];
$tipoVehiculo=3;
$vigenciaSoat=$_POST['vigencia'];

echo $vigenciaSoat;
echo $linea;


$arrayDatosUsuario="INSERT INTO AC_USUARIO (Id_usuario, Tipo_Usuario, Contrasena, Telefono, Ciudad, Departamento, Pais, Puntos_usuario_kilometraje) 
VALUES ('${idUsuario}','${tipoUsuario}', '${contrasena}', '${telefono}','${ciudad}', '${departamento}', '${pais}',   '${puntosKilometraje}')";

$ingresoDatosUsuario= oci_parse($conn, $arrayDatosUsuario);

oci_execute($ingresoDatosUsuario);

$arrayDatosVehiculo="INSERT INTO AC_VEHICULO (Id_usuario, Vigencia_Soat, Aseguradora, Tipo_Vehiculo, Email, Barrio, Linea) 
VALUES ('${idUsuario}','${vigenciaSoat}', '${aseguradora}', '${tipoVehiculo}','${email}', '${barrio}', '${linea}')";

echo $arrayDatosVehiculo;

$ingresoDatosUsuario2= oci_parse($conn, $arrayDatosVehiculo);

oci_execute($ingresoDatosUsuario2);


oci_close($conn);

echo "Registro Completado";

?>