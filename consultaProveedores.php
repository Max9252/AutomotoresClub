<?php
// Conectar al servicio XE (es deicr, la base de datos) en la máquina "localhost"
$tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=pruebas.czsf3gnrfqtq.us-west-2.rds.amazonaws.com)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))";
$conn = oci_connect("pruebas", "ninise92", $tns);
//Tabla con informacion de los usuarios
$stid = oci_parse($conn, "SELECT p.Id_usuario, u.Tipo_usuario, u.Contrasena, u.Telefono, p.NIT_PROVEEDOR, p.NOMBRE_PROVEEDOR, p.RAZON_SOCIAL, p.TIPO_SEDE, p.DIRECCION, p.SERVICIO_MENSAJERIA, p.TIPO_COBERTURA, p.NOMBRE_CONTACTO, p.EMAIL_CONTACTO, p.TELEFONO_FIJO, p.PAGINA_WEB, p.DESCRIPCION, u.Pais, d.NOMBRE AS CIUDAD, e.NOMBRE AS DEPARTAMENTO FROM AC_USUARIO u, AC_PROVEEDOR p, AC_P_CIUDAD d, AC_P_DEPARTAMENTO e WHERE u.Id_usuario=p.Id_usuario AND u.CIUDAD=d.CODIGO AND d.CODIGO_DEPARTAMENTO=e.CODIGO");
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
echo "    <th>" . "TELEFONO" . "</th>\n";
echo "    <th>" . "IDENTIFICACION" . "</th>\n";
echo "    <th>" . "NOMBRE PROVEEDOR" . "</th>\n";
echo "    <th>" . "RAZON SOCIAL" . "</th>\n";
echo "    <th>" . "TIPO SEDE" . "</th>\n";
echo "    <th>" . "DIRECCION" . "</th>\n";
echo "    <th>" . "SERVICIO_MENSAJERIA" . "</th>\n";
echo "    <th>" . "TIPO_COBERTURA" . "</th>\n";
echo "    <th>" . "NOMBRE_CONTACTO" . "</th>\n";
echo "    <th>" . "EMAIL_CONTACTO" . "</th>\n";
echo "    <th>" . "TELEFONO_FIJO" . "</th>\n";
echo "    <th>" . "PAGINA_WEB" . "</th>\n";
echo "    <th>" . "DESCRIPCION" . "</th>\n";
echo "    <th>" . "CIUDAD" . "</th>\n";
echo "    <th>" . "DEPARTAMENTO" . "</th>\n";
echo "    <th>" . "PAIS" . "</th>\n";

//echo "    <th>" . "PUNTOS" . "</th>\n";

foreach ($rows as $item) {

	echo "<tr>";
	echo "    <td>" . $item["ID_USUARIO"] . "</td>";
    echo "    <td>" . $item["TIPO_USUARIO"] . "</td>";
	echo "    <td>" . $item["CONTRASENA"] . "</td>";
	echo "    <td>" . $item["TELEFONO"] . "</td>";
	echo "    <td>" . $item["NIT_PROVEEDOR"] . "</td>";
	echo "    <td>" . $item["NOMBRE_PROVEEDOR"] . "</td>";
	echo "    <td>" . $item["RAZON_SOCIAL"] . "</td>";
	echo "    <td>" . $item["TIPO_SEDE"] . "</td>";
	echo "    <td>" . $item["DIRECCION"] . "</td>";
	echo "    <td>" . $item["SERVICIO_MENSAJERIA"] . "</td>";
	echo "    <td>" . $item["TIPO_COBERTURA"] . "</td>";
	echo "    <td>" . $item["NOMBRE_CONTACTO"] . "</td>";
	echo "    <td>" . $item["EMAIL_CONTACTO"] . "</td>";
    echo "    <td>" . $item["TELEFONO_FIJO"] . "</td>";
	echo "    <td>" . $item["PAGINA_WEB"] . "</td>";
	echo "    <td>" . $item["DESCRIPCION"] . "</td>";
	echo "    <td>" . $item["CIUDAD"] . "</td>";
	echo "    <td>" . $item["DEPARTAMENTO"] . "</td>";
	echo "    <td>" . $item["PAIS"] . "</td>";

	
	echo "</tr>";

}
echo "</table>\n";

$stid = oci_parse($conn, "SELECT COUNT(ID_USUARIO) AS USUARIOS FROM AC_PROVEEDOR");
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