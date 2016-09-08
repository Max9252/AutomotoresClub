<?php
// Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
$tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=pruebas.czsf3gnrfqtq.us-west-2.rds.amazonaws.com)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))";
$conn = oci_connect("pruebas", "ninise92", $tns);
//Tabla con informacion de los usuarios
$stid = oci_parse($conn, "SELECT v.Id_Usuario, u.Tipo_usuario, u.Contrasena, u.Telefono, v.Vigencia_soat, a.NOMBRE AS ASEGURADORA, v.Email, b.NOMBRE AS BARRIO, h.NOMBRE AS CLASE_VEHICULO, m.NOMBRE AS MARCA, l.NOMBRE AS LINEA, u.Pais, c.NOMBRE_COMUNA AS COMUNA, d.NOMBRE AS CIUDAD, e.NOMBRE AS DEPARTAMENTO FROM AC_USUARIO u, AC_VEHICULO v, AC_P_ASEGURADORA a, AC_P_BARRIO b, AC_P_COMUNA c, AC_P_CIUDAD d, AC_P_DEPARTAMENTO e, AC_P_LINEA l, AC_P_MARCA m, AC_P_CLASE_VEHICULO h WHERE u.ID_USUARIO=v.ID_USUARIO AND v.ASEGURADORA=a.CODIGO AND v.BARRIO=b.CODIGO AND b.CODIGO_COMUNA=c.CODIGO AND c.CODIGO_CIUDAD=d.CODIGO AND d.CODIGO_DEPARTAMENTO=e.CODIGO AND v.LINEA=l.CODIGO AND l.MARCA=m.CODIGO AND m.CLASE_VEHICULO=h.CODIGO");
oci_execute($stid);

$rows = [];

while($row = oci_fetch_assoc($stid))
{
	$rows[] = $row;
}



echo "<table border='1'>\n";
echo "    <th>" . "ID" . "</th>\n";
echo "    <th>" . "TIPO_USUARIO" . "</th>\n";
echo "    <th>" . "CONTRASENA" . "</th>\n";
echo "    <th>" . "EMAIL" . "</th>\n";
echo "    <th>" . "TELEFONO" . "</th>\n";
echo "    <th>" . "CLASE VEHICULO" . "</th>\n";
echo "    <th>" . "MARCA" . "</th>\n";
echo "    <th>" . "LINEA" . "</th>\n";
echo "    <th>" . "ASEGURADORA" . "</th>\n";
echo "    <th>" . "VIGENCIA" . "</th>\n";
echo "    <th>" . "CIUDAD" . "</th>\n";
echo "    <th>" . "COMUNA" . "</th>\n";
echo "    <th>" . "BARRIO" . "</th>\n";
echo "    <th>" . "DEPARTAMENTO" . "</th>\n";
echo "    <th>" . "PAIS" . "</th>\n";
//echo "    <th>" . "PUNTOS" . "</th>\n";

foreach ($rows as $item) {

	echo "<tr>";
	echo "    <td>" . $item["ID_USUARIO"] . "</td>";
    echo "    <td>" . $item["TIPO_USUARIO"] . "</td>";
	echo "    <td>" . $item["CONTRASENA"] . "</td>";
	echo "    <td>" . $item["EMAIL"] . "</td>";
	echo "    <td>" . $item["TELEFONO"] . "</td>";
	echo "    <td>" . $item["CLASE_VEHICULO"] . "</td>";
	echo "    <td>" . $item["MARCA"] . "</td>";
	echo "    <td>" . $item["LINEA"] . "</td>";
	echo "    <td>" . $item["ASEGURADORA"] . "</td>";
	echo "    <td>" . $item["VIGENCIA_SOAT"] . "</td>";
	echo "    <td>" . $item["CIUDAD"] . "</td>";
    echo "    <td>" . $item["COMUNA"] . "</td>";
	echo "    <td>" . $item["BARRIO"] . "</td>";
	echo "    <td>" . $item["DEPARTAMENTO"] . "</td>";
	echo "    <td>" . $item["PAIS"] . "</td>";
	//echo "    <td>" . $item["PUNTOS_USUARIO_KILOMETRAJE"] . "</td>";

	
	echo "</tr>";

}
echo "</table>\n";

$stid = oci_parse($conn, "SELECT COUNT(ID_USUARIO) AS USUARIOS FROM AC_VEHICULO");
oci_execute($stid);

$rows = [];

while($row = oci_fetch_assoc($stid))
{
	$rows[] = $row;
}

echo "<table border='1'>\n";
echo "    <th>" . "TOTAL" . "</th>\n";

foreach ($rows as $item) {

	echo "<tr>";
	echo "    <td>" . $item["USUARIOS"] . "</td>";
	
	echo "</tr>";

}
echo "</table>\n";

?>