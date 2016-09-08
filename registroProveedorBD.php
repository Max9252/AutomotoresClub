<?php


header('Content-type: text/html; charset=UTF-8');  

$tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=pruebas.czsf3gnrfqtq.us-west-2.rds.amazonaws.com)(PORT=1521))(CONNECT_DATA=(SID=ORCL)))";
$conn = oci_connect("pruebas", "ninise92", $tns);
if (!$conn) {
	$e = oci_error();
	trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}



$tipoUsuario="PV";
//DATOS PROVEEDOR
$nit= $_POST["id3"];
$nombre= $_POST["nombreP"];
$razon= $_POST["razonS"];
//$servicio= $_POST["servicio"];
$tipo_sede= $_POST["tipoS"];
$descripcion= $_POST["descripcionP"];
$pais= 'colombia';
$departamentoP= $_POST["deptosP"];
$ciudadP= $_POST["ciudadP"];
$direccionP= $_POST["direccionP"];
$telefonof= $_POST["telfijoP"];
$paginaW= $_POST["paginawebP"];
$cubrimiento= $_POST["cubrimientoP"];
$domicilios= $_POST["domicilioP"];
$tel_contacto= $_POST["celularCP"];
$nombre_con= $_POST["nombreCP"];
$emailContac= $_POST["emailCP"];
$contrasena= $_POST["passwordP"];
$mercadoObjetivo= $_POST["mercadoObjetivo"];
$tipoServicio= $_POST["tipoServicio"];
$puntosKilometraje= 0;

//VARIABLES DE UTILIDAD
$var2="P";
$var3=0;
//REGISTRO COMO SEDE PRINCIPAL 
if(strcmp($tipo_sede, $var2) == 0){

	$cantidadProveedores = oci_parse($conn, "SELECT COUNT(Nit_proveedor) FROM AC_PROVEEDOR WHERE Nit_proveedor='${nit}' AND Tipo_sede='${tipo_sede}'");

	oci_execute($cantidadProveedores);

	$cantidad=oci_fetch_array($cantidadProveedores);

	if(strcmp($cantidad[0], $var3) == 0){

		$contador=$cantidad[0]+1;

		$idUsuario= $nit . $tipo_sede . $contador;

		$arrayDatosUsuario="INSERT INTO AC_USUARIO (Id_usuario, Tipo_Usuario, Contrasena, Telefono, Ciudad, Departamento, Pais, Puntos_usuario_kilometraje) 
		VALUES('${idUsuario}','${tipoUsuario}', '${contrasena}', '${telefonof}', '${ciudadP}', '${departamentoP}', '${pais}', '${puntosKilometraje}')";

		$datosUsuario= oci_parse($conn, $arrayDatosUsuario);

		oci_execute($datosUsuario);

		$insercionProveedor="INSERT INTO AC_PROVEEDOR (Nit_proveedor, Nombre_proveedor, Razon_social, Tipo_sede, Direccion, Numero_contacto, Descripcion, Id_usuario, Telefono_fijo, Pagina_web, Tipo_cobertura, Servicio_mensajeria, Nombre_contacto, Email_contacto) VALUES ('${nit}', '${nombre}', '${razon}','${tipo_sede}','${direccionP}', '${tel_contacto}','${descripcion}', '${idUsuario}', '${telefonof}', '${paginaW}', '${cubrimiento}', '${domicilios}',  '${nombre_con}','${emailContac}')";

		$datosProveedor= oci_parse($conn, $insercionProveedor);

		oci_execute($datosProveedor);

		for($i=0; $i<sizeof($tipoServicio); $i++){
			$insercionTipoServicio="INSERT INTO AC_TIPO_PROVEEDOR (Servicio, Proveedor) VALUES ('${tipoServicio[$i]}', '${idUsuario}')";
		$datosTipoServicio= oci_parse($conn, $insercionTipoServicio);
		oci_execute($datosTipoServicio);
		}

		for($i=0; $i<sizeof($mercadoObjetivo); $i++){
			$insercionMercadoObjetivo="INSERT INTO AC_MERCADO_OFERENTE (Proveedor, Mercado_objetivo) VALUES ('${idUsuario}', '${mercadoObjetivo[$i]}')";
		$datosMercadoObjetivo= oci_parse($conn, $insercionMercadoObjetivo);
		oci_execute($datosMercadoObjetivo);
		}

		oci_close($conn);
		echo $idUsuario;


	}
	else{
		oci_close($conn);
		echo "No registro";
	}
}
else{

	$cantidadProveedores = oci_parse($conn, "SELECT COUNT(Nit_proveedor) FROM AC_PROVEEDOR WHERE Nit_proveedor='${nit}' AND Tipo_sede='${tipo_sede}'");

	oci_execute($cantidadProveedores);

	$cantidad=oci_fetch_array($cantidadProveedores);

	$contador=$cantidad[0]+1;

	$idUsuario= $nit . $tipo_sede . $contador;

	$arrayDatosUsuario="INSERT INTO AC_USUARIO (Id_usuario, Tipo_Usuario, Contrasena, Telefono, Ciudad, Departamento, Pais, Puntos_usuario_kilometraje) 
	VALUES('${idUsuario}','${tipoUsuario}', '${contrasena}', '${telefonof}', '${ciudadP}', '${departamentoP}', '${pais}', '${puntosKilometraje}')";

	$datosUsuario= oci_parse($conn, $arrayDatosUsuario);

	oci_execute($datosUsuario);

	$insercionProveedor="INSERT INTO AC_PROVEEDOR (Nit_proveedor, Nombre_proveedor, Razon_social, Tipo_sede, Direccion, Numero_contacto, Descripcion, Id_usuario, Telefono_fijo, Pagina_web, Tipo_cobertura, Servicio_mensajeria, Nombre_contacto, Email_contacto) VALUES ('${nit}', '${nombre}', '${razon}','${tipo_sede}','${direccionP}', '${tel_contacto}','${descripcion}', '${idUsuario}', '${telefonof}', '${paginaW}', '${cubrimiento}', '${domicilios}',  '${nombre_con}','${emailContac}')";

	$datosProveedor= oci_parse($conn, $insercionProveedor);

	oci_execute($datosProveedor);
	
		for($i=0; $i<sizeof($tipoServicio); $i++){
			$insercionTipoServicio="INSERT INTO AC_TIPO_PROVEEDOR (Servicio, Proveedor) VALUES ('${tipoServicio[$i]}', '${idUsuario}')";
		$datosTipoServicio= oci_parse($conn, $insercionTipoServicio);
		oci_execute($datosTipoServicio);
		}

		for($i=0; $i<sizeof($mercadoObjetivo); $i++){
			$insercionMercadoObjetivo="INSERT INTO AC_MERCADO_OFERENTE (Proveedor, Mercado_objetivo) VALUES ('${idUsuario}', '${mercadoObjetivo[$i]}')";
		$datosMercadoObjetivo= oci_parse($conn, $insercionMercadoObjetivo);
		oci_execute($datosMercadoObjetivo);
		}

		echo $idUsuario;

		oci_close($conn);
}
?>