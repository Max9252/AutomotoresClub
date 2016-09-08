

function getClaseVehiculo(){
    $('#claseV').empty();
    $('#claseV').append("<option disabled selected>Seleccione una</option>");
    $('#marca').append("<option disabled selected>Seleccione una</option>");
    $('#linea').append("<option disabled selected>Seleccione una</option>");
     $.ajax({    
        type: "GET",
        url: 'cargarClaseVehiculo.php',
        success: function(data){
            data = $.parseJSON(data);
            generarSelectClaseVehiculo(data);
        }
    });
}
function getMarca() {
    $('#marca').empty();
    $('#marca').append("<option disabled selected>Seleccione una</option>");
    $('#linea').empty();
    $('#linea').append("<option disabled selected>Seleccione una</option>");
    var val=$('#claseV option:selected').val();
     $.ajax({    
        type: "POST",
        url: 'cargarMarca.php',
        data: { claseVehiculo: val },
        success: function(data){
            data = $.parseJSON(data);
            generarSelectMarca(data);
        }
    });
}
function getLinea() {
    $('#linea').empty();
    $('#linea').append("<option disabled selected>Seleccione una</option>");
    var val=$('#marca option:selected').val();
     $.ajax({    
        type: "POST",
        url: 'cargarLinea.php',
        data: { marca: val },
        success: function(data){
            data = $.parseJSON(data);
            generarSelectLinea(data);
        }
    });
}
function getAseguradora(){
    $('#empresaA').empty();
    $('#empresaA').append("<option disabled selected>Seleccione una</option>");
     $.ajax({    
        type: "GET",
        url: 'cargarAseguradoras.php',
        success: function(data){
            data = $.parseJSON(data);
            generarSelectAseguradoras(data);
        }
    });
}
function getDepartamentoAsociado(){
    $('#deptos').empty();
    $('#ciudades').empty();
    $('#ciudades').append("<option disabled selected>Seleccione una</option>");
    $('#comuna').attr("value","TODAS");
    $.ajax({    
        type: "GET",
        url: 'cargarDepartamentos.php',
        success: function(data){
            data = $.parseJSON(data);
            generarSelectDepartamentosA(data);
        }
    });
}
function getCiudadAsociado(){
   $('#barrio').empty();
   $('#barrio').append("<option disabled selected>Seleccione una</option>");
   $('#comuna').empty();
   $('#comuna').attr("value",'TODAS');
   var val=$('#deptos option:selected').val();
   $('#ciudades').empty();
   $('#ciudades').append("<option disabled selected>Seleccione una</option>");
   $.ajax({    
    type: "POST",
    url: 'cargarCiudades.php',
    data: { depto: val },
    success: function(data){
        data = $.parseJSON(data);
        organizarPorTag(data, 'NOMBRE');
        generarSelectCiudadA(data);
    }
   });
}
function getBarrioAsociado(){
    var val=$('#ciudades option:selected').val();
    if(val==76001||val==11001||val==5001||val==8001){
        $('#barrio').empty();
        $('#barrio').append("<option disabled selected>Seleccione una</option>");
        $.ajax({    
            type: "POST",
            url: 'cargarBarrios.php',
            data: { ciudad: val },
            success: function(data){
               data = $.parseJSON(data);
               organizarPorTag(data, 'NOMBRE');
               generarSelectBarrioA(data);
           }
       });
    } else{
        $('#barrio').empty();
        $('#barrio').append("<option selected value='1113669744'>TODOS</option>");
    }
}
function getComunaAsociado(){
    var val=$('#ciudades option:selected').val();
    if(val==76001||val==11001||val==5001||val==8001){
        var val2=$('#barrio option:selected').val();
        $('#comuna').empty();
        $('#comuna').append("<option disabled selected>Seleccione una</option>");
        $.ajax({    
            type: "POST",
            url: 'cargarComuna.php',
            data: { barrio: val2 },
            success: function(data){
                data = $.parseJSON(data);
                $('#comuna').attr("value",data[0].NOMBRE_COMUNA);
            }
        });
    } else{
        $('#comuna').empty();
        $('#comuna').append("<option disabled selected>Seleccione una</option>");
    }
}
function generarSelectDepartamentosA(x){
    var deptOption1;
    var i=0;
    $('#deptos').append("<option disabled selected>Seleccione una</option>");
    while(i<x.length){
        deptOption1 = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE  + "</option>";
        $('#deptos').append(deptOption1);
        i++;
    }
}
function generarSelectCiudadA(x){
    var ciudadOption;
    var i=0;
    while(i<x.length){
        ciudadOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE  + "</option>";
        $('#ciudades').append(ciudadOption);
        i++;
    }
}
function generarSelectBarrioA(x){
    var barrioOption;
    var i=0;
    while(i<x.length){
        barrioOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE+ "</option>";
        $('#barrio').append(barrioOption);
        i++;
    }
}
function generarSelectClaseVehiculo(x){
    var claseOption;
    var i=0;
    while(i<x.length){
        claseOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE + "</option>";
        $('#claseV').append(claseOption);
        i++;
    }
}
function generarSelectMarca(x){
    var marcaOption;
    var i=0;
    while(i<x.length){
        marcaOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE  + "</option>";
        $('#marca').append(marcaOption);
        i++;
    }
}
function generarSelectLinea(x){
    var lineaOption;
    var i=0;
    while(i<x.length){
        lineaOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE + "</option>";
        $('#linea').append(lineaOption);
        i++;
    }
}
function generarSelectAseguradoras(x){
    var aseguradoraOption;
    var i=0;
    while(i<x.length){
        aseguradoraOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE  + "</option>";
        $('#empresaA').append(aseguradoraOption);
        i++;
    }
}
function registrarFormaAsociado(){
    $.ajax ({
        url:            'registroAsociado.php',                             /* URL a invocar asíncronamente */
        type:           'post',                                         /* Método utilizado para el requerimiento */
        data:           $('#registroForm').serialize(),       /* Información local a enviarse con el requerimiento */               
    });
}
function iniciarForm(){
  getClaseVehiculo();
   getAseguradora();
  getDepartamentoAsociado();
}
function completeForm(){
    $('#infomsg').empty();
    $('#sendInfoBody').empty();
    $('#registroForm').bootstrapValidator("resetForm",true); 
    $('#linea').empty();
    $('#placa').attr("placeholder","");
    $('#ciudades').empty();
    $('#registroForm').trigger("reset");
    $('#errors').attr("style","display:none;!important");
    $('#claseV').empty();
    $('#marca').empty();
    $('#linea').empty();
    $('#empresaA').empty();
    $('#barrio').empty();
    clearBody();
}
function clearForm(){
    $('#linea').empty();
    $('#placa').attr("placeholder","");
    $('#ciudades').empty();
    $('#registroForm').trigger("reset");
    $('#errors').attr("style","display:none;!important");
    $('#deptos').empty();
    $('#claseV').empty();
    $('#marca').empty();
    $('#linea').empty();
    $('#empresaA').empty();
    $('#barrio').empty();
    $('#registroForm').bootstrapValidator("resetForm",true); 
    clearBody();
}
function submitForm() {
    var validator = $('#registroForm').data('bootstrapValidator');
    validator.validate();
    validator.val
    /*validarId();*/
 
    if (validator.isValid()) {
        registrarFormaAsociado();
        var diasFaltantes=diasRestantes();
        $('#infomsg').append("<p align='center'>Su usuario de ingreso para AUTOMORES CLUB es: "+($('#placa').val()).toUpperCase()+"</p>");
        $('#infomsg').append("<p align='center'>A partir de ahora queda activa la membresia inicial para tu "+($('#claseV').find('option:selected').text())+" / "+($('#marca').find('option:selected').text())+" / "+($('#linea').find('option:selected').text()) +" de placa " +($('input[name="placa"]').val()).toUpperCase()+".</p>");
        $('#infomsg').append("<p align='center'>El valor de esta membresia inicial es de $0.00 y tiene una vigencia de "+diasFaltantes+" días, según la fecha de vencimiento de su SOAT.</p>");
        $('#infomsg').append("<p align='center'>La renovación anual de la membresia directamente en automotores club es de $120.000 + IVA.</p>");
        $('#infomsg').append("<p align='center'>Para renovar esta membresia a $0.00, compra tu próximo SOAT directamente con las empresas aseguradoras a través de este enlace: <a href='Soat.html'><u><strong>Adquiere tu SOAT aquí.</strong></u></a></p>");
        localStorage.setItem('aseguradora', $('#empresaA').val());
        $("#registroA").modal('hide');
        $('#modalRegistroA').modal('show');
    } else{
        $('#errors').attr("style","display:block;!important");
    }
}
function contactanosP(){
    $('#modalContactanos').modal('show');
    $('#modalInfoAdicionalP').modal('hide');
}
function informacionAdicional(){
    var diasFaltantes= diasRestantes();
    $('#informacionAdicional').append("<p align='justify'> Señor(a) "+($('#claseV').find('option:selected').text())+" / "+($('#marca').find('option:selected').text())+" / "+(($('#linea').find('option:selected').text()))+" de placa "+($('#placa').val()).toUpperCase()+", Al registrarse en esta aplicación, ha accedido como asociado en AUTOMOTORES CLUB y ha sido beneficiado con una MEMBRESIA que le habilita el usuario: "+($('#placa').val()).toUpperCase()+" para acceder a nuestra aplicación por "+diasFaltantes+" días, tiempo de vigencia de su <a href='#'><u><strong>SOAT</strong></u></a>.</p>");
    $('#informacionAdicional').append("<p align='justify'>Nuestra empresa AUTOMOTORES CLUB SAS con Nit: 000000000 aplica todas las normas para el tratamiento de datos personales según el decreto 1377 del 2013.</p>");
    $('#informacionAdicional').append("<p align='justify'>La información suministrada por usted, entrará a formar parte en nuestra base de datos y será utilizada bajo la más segura, eficiente y sencilla plataforma virtual en donde Proveedores (de productos y servicios) interactúan con usuarios y/o propietarios de vehículos automotores como usted, para ofrecer soluciones a las necesidades de tipo legal, de mantenimiento (preventivo y correctivo) y de estética que se les presentan en nuestro país.</p>");
    $('#informacionAdicional').append("<p align='justify'>Con la MEMBRESIA activa como ASOCIADO en nuestra aplicación AUTOMOTORES CLUB, usted podrá acceder a visualizar, participar, comprar, recibir y hasta solicitar productos y/o servicios que den solución a su necesidad puntual, haciendo uso de diferentes filtros que le mostraran opciones por Proveedor según su tipo de servicio, Promociones según su requerimiento y recibir volantes publicitaros que vayan acorde a la clase y tipo de su vehículo.</p>");
    $('#informacionAdicional').append("<p align='justify'>Además, tiene derecho a utilizar otras herramientas que ofrece la aplicación en cuanto a seguridad, ubicación, información y todos los demás servicios e innovaciones que traigan nuestras actualizaciones permanentes.</p>");
    $('#informacionAdicional').append("<p align='justify'>Como todos los productos y/o servicios que necesita su automotor los podrá encontrar con nuestros proveedores registrados, así mismo el <a href='#'><u><strong>SOAT</strong></u></a> podrá ser comprado directamente a las <a href='#'><u><strong>Empresas Aseguradoras </strong></u></a> (debidamente autorizadas por el ministerio de Transporte y vigiladas por la Superintendencia Financiera), a través de nuestra aplicación AUTOMOTORES CLUB (<a href='#'><u><strong>comprar su SOAT aqui</strong></u></a>), sin intermediación de terceros y cumpliendo con el <a href='#'><u><strong> decreto 5886 del 24 de diciembre del 2015</strong></u></a>, estas le harán entrega virtual según lo establecido y continuarán entregando el documento físico en su domicilio hasta que este proceso quede completamente abolido.</p>");
    $('#informacionAdicional').append("<p align='justify'>Lo anterior favorecerá sus finanzas, ya que, según este convenio, la renovación de su MEMBRESIA en AUTOMOTORES CLUB por el tiempo de vigencia del nuevo <a href='#'><u><strong>SOAT</strong></u></a> será subsidiada en su totalidad, oséa a $ 0,00.</p>");
    $('#informacionAdicional').append("<p align='justify'>Para renovar la MEMBRESIA como ASOCIADO, directamente en AUTOMOTORES CLUB SAS sin haber tramitado la compra del <a href='#'><u><strong>SOAT</strong></u></a> a uno de nuestros PROVEEDORES a través de nuestra aplicación, tiene un costo de $120,000 + IVA, y deberá seguir el siguiente procedimiento: <a href='Soat.html'><u><strong> comprar renovación de membresía por una año </strong></u></a>.</p>");
    $('#informacionAdicional').append("<p align='justify'>Nuevamente le damos la bienvenida como ASOCIADO en AUTOMOTORES CLUB, esperamos poder cumplir sus expectativas y contamos con su apoyo para seguir creciendo</p>");
    $("#modalInfoAdicional").modal('show');
    $('#modalRegistroA').modal('hide');
}

function getDepartamentosProveedor(){
    $('#ciudadP').empty();
    $('#ciudadP').append("<option disabled selected>Seleccione una</option>");
    $.ajax({    
        type: "GET",
        url: 'cargarDepartamentos.php',
        success: function(data){
            data = $.parseJSON(data);
            generarSelectDepartamentoP(data);
        }
    });
}
function getCiudadProveedor(){
   var val=$('#deptosP option:selected').val();
   $('#ciudadP').empty();
   $('#ciudadP').append("<option disabled selected>Seleccione una</option>");
   $.ajax({    
    type: "POST",
    url: 'cargarCiudades.php',
    data: { depto: val },
    success: function(data){
        data = $.parseJSON(data);
        organizarPorTag(data, 'NOMBRE');
        generarSelectCiudadP(data);
    }
  });
}
function generarSelectDepartamentoP(x){
    var deptOption;
    var i=0;
    $('#deptosP').append("<option disabled selected>Seleccione uno</option>");
    while(i<x.length){
        deptOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE + "</option>";
        $('#deptosP').append(deptOption);
        i++;
    }
}
function generarSelectCiudadP(x){
    var ciudadOption;
    var i=0;
    while(i<x.length){
        ciudadOption = "<option value='" + x[i].CODIGO + "'>" + x[i].NOMBRE  + "</option>";
        $('#ciudadP').append(ciudadOption);
        i++;
    }
}
var idUsuario;
function registarFormaProveedor(callback){
      $.ajax({
            type: 'POST',
            url: 'registroProveedorBD.php',
            data: $('#registroFormP').serialize(),
            success: function (data) {
        setIdUsuario(data);
       $('#infomsg2').append("<p align='center'>Su usuario de ingreso para AUTOMOTORES CLUB es: "+idUsuario+"</p>");
       $('#infomsg2').append("<p align='justify'>A partir de ahora queda activa su membresía inicial como proveedor para "+$('#nombreP').val()+" y el valor de esta membresía es de $0.0 y estará activa mientras utilice los servicios de volanteo virtual de esta aplicación.</p>");
       $('#infomsg2').append("<p align='center'>De 1mil hasta 5mil volantes por mes, lo mantendrá como proveedor CLASSIC.<br>Entre 6mil y 49mil volantes por mes, lo mantendrá como proveedor PREMIUM.<br>Despues de 50mil volantes por mes, lo mantendrá como proveedor SPECIAL.</p>");
       $('#infomsg2').append("<p align='center'>Si la anterior información es clara ha culminado su proceso de registro.</p>");
       $("#registroP").modal('hide');
       $('#modalRegistroP').modal('show');
            }
        });
}
function setIdUsuario(x){
  console.log(x);
  idUsuario=x;
  console.log(idUsuario);
  return idUsuario;
}

function iniciarFormP(){
  getDepartamentosProveedor();
}

function completeFormP(){
    $('#infomsg2').empty();
    $('#infomsg3').empty();
    $('#infomsg4').empty();
    $('#registroFormP').bootstrapValidator("resetForm",true); 
    $('#ciudades').empty();
    $('#registroFormP').trigger("reset");
    $('#errors2').attr("style","display:none;!important");
    $('#boxServicio').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj').attr("style","display:none");
    $('#boxServicio2').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj2').attr("style","display:none");
    clearBody();
}
function clearFormP(){
    $('#infomsg2').empty();
    $('#infomsg3').empty();
    $('#infomsg4').empty();
    $('#ciudadP').empty();
    $('#registroFormP').bootstrapValidator("resetForm",true); 
    $('#registroFormP').trigger("reset");
    $('#errors2').attr("style","display:none;!important");
    $('#boxServicio').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj').attr("style","display:none");
    $('#boxServicio2').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj2').attr("style","display:none");
    clearBody();
}
function submitFormP() {
    var validator = $('#registroFormP').data('bootstrapValidator');
    validator.validate();
    var aux=validarCheckbox();
    var aux2=validarCheckbox2();

    if (validator.isValid() && aux && aux2) {
        registarFormaProveedor();
   }
   else{
    if(aux==false && aux2==false){
        $('#errors2').attr("style","display:block;!important");
        $('#bloqueMsj').attr("style","display:block");
        $('#bloqueMsj2').attr("style","display:block");
        $('#boxServicio').attr("style", "border: 1px solid #a94442"); 
        $('#boxServicio2').attr("style", "border: 1px solid #a94442"); 

    }else{
        if(aux==false){
         $('#errors2').attr("style","display:block;!important");
         $('#bloqueMsj').attr("style","display:block");
         $('#boxServicio').attr("style", "border: 1px solid #a94442"); 
     }else{
        if (aux2==false) {
          $('#errors2').attr("style","display:block;!important");
          $('#bloqueMsj2').attr("style","display:block");
          $('#boxServicio2').attr("style", "border: 1px solid #a94442"); 
      }
      else{
         $('#errors2').attr("style","display:block;!important"); 
        } 
    }
    }
    }
}
function contactanosA(){
    $('#modalContactanos').modal('show');
    $('#modalInfoAdicional').modal('hide');
}
function informacionAdicionalP(){
    $('#informacionAdicionalP').append("<p align='justify'>Señores "+($('#razonS').val())+" con "+($('#tipoId').find('option:selected').text())+": "+($('#id3').val())+", Al registrarse en esta aplicación, ha accedido como Proveedor en AUTOMOTORES CLUB y ha sido beneficiado con una MEMBRESIA SPECIAL que le habilita el usuario: para acceder a nuestra aplicación.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>Nuestra empresa AUTOMOTORES CLUB SAS con Nit: 000000000 aplica todas las normas para el tratamiento de datos personales según el decreto 1377 del 2013.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>La información suministrada por usted, entrará a formar parte en nuestra base de datos y será utilizada bajo la más segura, eficiente y sencilla plataforma virtual en donde usuarios y/o propietarios de vehículos automotores interactúan con Proveedores (de productos y servicios) como usted, para recibir soluciones a las necesidades de tipo legal, de mantenimiento (preventivo y correctivo) y de estética que se les presentan en nuestro país.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>Con la MEMBRESIA activa como PROVEEDOR en nuestra aplicación AUTOMOTORES CLUB, usted podrá acceder a visualizar y seleccionar los clientes potenciales que hayan registrados según clasificación: por departamento, por ciudad, por comuna o localidad, por clase de vehículo automotor, por marca, por línea e inclusive podrá filtrar combinando diferentes opciones y así podrá ofrecer y hasta ofertar productos y/o servicios que den solución a necesidades puntuales.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>Además, tiene derecho a utilizar otras herramientas que ofrece la aplicación en cuanto a seguridad, ubicación, información y todos los demás servicios e innovaciones que traigan nuestras actualizaciones permanentes.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>El valor inicial de esta MEMBRESIA como PROVEEDOR es de $0,00 y permanecerá activa a medida que "+($('#nombreP').val())+" participe en el proceso de Volanteo Virtual que hemos desarrollado para que los usuarios y/o propietarios de vehículos automotores conozcan de los productos y/o servicios que ofrece para dar soluciones a las necesidades de tipo legal, de mantenimiento (preventivo y correctivo) y de estética que se les presenten.</p>");
    $('#informacionAdicionalP').append("<p align='justify'>Para que su presencia en el mercado sea visible a la medida de sus posibilidades, hemos habilitado los siguientes paquetes de volantes:</p>");
    $('#informacionAdiciona2P').append("<p align='justify'>Cada mes, se evaluará el comportamiento de Volanteo Virtual y según su participación, se ajustará el estatus de PROVEEDOR, así:</p>");
    $('#informacionAdiciona2P').append("<p align='justify'>Proveedor que haya hecho hasta     5.000 volantes el próximo mes será Tipo CLASSIC</p>");
    $('#informacionAdiciona2P').append("<p align='justify'>Proveedor que haya hecho hasta    49.000 volantes el próximo mes será Tipo PREMIUM</p>");
    $('#informacionAdiciona2P').append("<p align='justify'>Proveedor que haya hecho mas de   50.000 volantes el próximo mes será Tipo SPECIAL</p>");
    $('#informacionAdiciona2P').append("<p align='justify'>Nuevamente le damos la bienvenida como PROVEEDOR en AUTOMOTORES CLUB, esperamos poder cumplir sus expectativas y contamos con su apoyo para seguir creciendo.</p>");
    $('#modalInformacionAdicionalP').modal('show');
    $("#modalRegistroP").modal('hide');
}


function organizarPorTag(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function clearBody(){
    $('body').css('overflow','auto');
    $('body').css('position','absolute');
}
function diasRestantes(){
            var currentDate = new Date();
            var vigencia = new Date($('#vigencia').val());
            var oneDay = 24*60*60*1000;
            var diffDays = Math.round(Math.abs((vigencia.getTime() - currentDate.getTime())/(oneDay)));
            return diffDays;  
}
function validarCheckbox(){
    var checkboxs=document.getElementsByName("tipoServicio[]");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    return okay;
}
function validarCheckbox2(){
    var checkboxs=document.getElementsByName("mercadoObjetivo[]");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    return okay;
}
function formatoPlaca() {
    getMarca();
    switch ($('#claseV option:selected').val()) {
        case "1":
        case "3":
        regex = /^[a-zA-Z]{3}\d{2}[a-zA-Z]{1}$/;
        $('#placa').attr("placeholder", "ABC12A");
        break;

        case "2":
        regex = /^\d{3}[a-zA-Z]{3}$/;
        $('#placa').attr("placeholder", "123ABC");
        break;

        default:
        regex = /^[a-zA-Z]{3}\d{3}$/;
        $('#placa').attr("placeholder", "ABC123");
        break;
    }
}
function ajustarCuerpo(){
    $('body').addClass('test');
    $('body').css('overflow','hidden');
    $('body').css('position','fixed');
}
function test() {
    $('#modalcontent').fadeOut();
    $('#modalcontent2').fadeIn();
    localStorage.setItem('aseguradora', $('#empresaA').val());
}


function validarId(){
   var val= $('#placa').val();
   var res = val.toUpperCase();
   $.ajax({    
    type: "POST",
    url: 'validarId.php',
    data: { id_usuario: res },
    success: function(data){
         data = $.parseJSON(data);
         if(data){
          alert("La placa no existe");
         }else{
            alert("La placa ya existe");
         }
    }
   });
}
   function clearContactanos(){
    $('#contactanos').bootstrapValidator("resetForm",true); 
    $('#contactanos').trigger("reset");
}

function enviarFormContactanos(){
    var validator = $('#contactanos').data('bootstrapValidator');
    validator.validate();
    validator.val
}


