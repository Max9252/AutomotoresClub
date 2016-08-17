getDeptos();
getMarcas();

function getDeptos() {
    var url, deptOption;
    url = 'js/colombia.json';

    $.getJSON(url, function (data) {
        $(data).each(function () {
            deptOption = "<option value='" + this.id + "'>" + this.departamento + "</option>";
            $('#deptos').append(deptOption);
            $('#deptosP').append(deptOption);
        });
    });
}

function getMarcas() {
    var url, marcaOption;
    url = 'js/tipoCarros.json';

    $.getJSON(url, function (data) {
        var last;
        $(data).each(function () {
            if (last !== this.make) {
                marcaOption = "<option value='" + this.make + "'>" + this.make + "</option>";
                $('#marca').append(marcaOption);
                last = this.make;
            } else {
                last = this.make;
            }
        });
    });

}

function completeForm(){
    $('#infomsg').empty();
    $('#registroForm').bootstrapValidator("resetForm",true); 
    $('#linea').empty();
    $('#placa').attr("placeholder","");
    $('#ciudades').empty();
    $('#registroForm').trigger("reset");
    $("#modalcontent2,#modalcontent").fadeToggle();
    $('#errors').attr("style","display:none;!important");
}

function completeFormP(){
    $('#infomsg2').empty();
    $('#infomsg3').empty();
    $('#registroFormP').bootstrapValidator("resetForm",true); 
    $('#ciudades').empty();
    $('#registroFormP').trigger("reset");
    $("#modalcontent4,#modalcontent3").fadeToggle();
    $('#errors2').attr("style","display:none;!important");
    $('#boxServicio').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj').attr("style","display:none");
    $('#boxServicio2').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj2').attr("style","display:none");

}

function completeFormP2(){
    $('#infomsg2').empty();
    $('#infomsg3').empty();
    $('#registroFormP').bootstrapValidator("resetForm",true); 
    $('#ciudades').empty();
    $('#registroFormP').trigger("reset");
    $("#modalcontent5,#modalcontent3").fadeToggle();
    $('#errors2').attr("style","display:none;!important");
    $('#boxServicio').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj').attr("style","display:none");
    $('#boxServicio2').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj2').attr("style","display:none");

}

function getLinea() {
    $('#linea').empty();
    $('#linea').append("<option selected disabled>" +"Seleccionar una"+"</option>");
    var url, lineaOption;
    url = 'js/tipoCarros.json';

    $.getJSON(url, function (data) {
        var marca = $('#marca').val();
        var linea = new Array();
        var lineaU = new Array();
        var count = 0;
        $(data).each(function () {
            if (marca === this.make) {
                linea.push(this.model);
            }
        });
        linea.forEach(function (element) {
            if ($.inArray(element, lineaU) === -1) {
                lineaU.push(element);
            }
        });
        lineaU.forEach(function (element) {
            lineaOption = "<option value='" + element + "'>" + element + "</option>";
            $('#linea').append(lineaOption);
        });
    });
}

function clearForm(){
    $('#registroForm').bootstrapValidator("resetForm",true); 
    $('#linea').empty();
    $('#placa').attr("placeholder","");
    $('#ciudades').empty();
    $('#registroForm').trigger("reset");
    $('#errors').attr("style","display:none;!important");
}

function clearFormP(){
    $('#infomsg2').empty();
    $('#infomsg3').empty();
    $('#registroFormP').bootstrapValidator("resetForm",true); 
    $('#ciudades').empty();
    $('#registroFormP').trigger("reset");
    $('#errors2').attr("style","display:none;!important");
    $('#boxServicio').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj').attr("style","display:none");
    $('#boxServicio2').attr("style", "border: 1px solid #ddd");
    $('#bloqueMsj2').attr("style","display:none");

}

function submitForm() {
    var validator = $('#registroForm').data('bootstrapValidator');
    validator.validate();
    validator.val
    if (validator.isValid()) {
        var diasRestantes = function(){
            var currentDate = new Date();
            var vigencia = new Date($('#vigencia').val());
            var oneDay = 24*60*60*1000;
            var diffDays = Math.round(Math.abs((vigencia.getTime() - currentDate.getTime())/(oneDay)));
            return diffDays;
        };
        $('#infomsg').append("<p>Su usuario para ingresar a AUTOMORES CLUB es: "+($('#placa').val()).toUpperCase()+"</p>");
        $('#infomsg').append("<br>");
        $('#infomsg').append("<p>A partir de ahora queda activa la membresia inicial para tu "+$('#claseV').val()+" / "+$('#marca').val()+" / "+$('#linea').val()+" de placa: "+($('input[name="placa"]').val()).toUpperCase()+".</p>");
        $('#infomsg').append("<p>El valor de esta membresia inicial es de $0.00 y tiene una vigencia de "+diasRestantes()+" días, según la fecha de vencimiento de su SOAT.</p>");
        $('#infomsg').append("<p>La renovación anual de la membresia directamente en automotores club es de $120.000 + IVA.</p>");
        $('#infomsg').append("<p>Para renovar esta membresia a $0.00, compra tu próximo SOAT directamente con las empresas aseguradoras a través de este enlace: <a href='soat.html'><u><strong>Adquiere tu SOAT aquí.</strong></u></a></p>");
        $("#modalcontent,#modalcontent2").fadeToggle();
        localStorage.setItem('aseguradora', $('#empresaA').val());
    } else{
        $('#errors').attr("style","display:block;!important");
    }
    
}

function submitFormP() {
    var validator = $('#registroFormP').data('bootstrapValidator');
    validator.validate();
    var aux=validarCheckbox();
    var aux2=validarCheckbox2();

    if (validator.isValid() && aux && aux2) {
            $('#infomsg2').append("<p align='center'>Su usuario para ingreso para AUTOMOTORES CLUB es: #######</p>");
            $('#infomsg2').append("<p align='justify'>A partir de ahora queda activa su membresía inicial como proveedor para "+$('#nombreP').val()+" y el valor de esta membresía es de $0.0 y estará activa mientras utilice los servicios de volanteo virtual de esta aplicación.</p>");
            $('#infomsg2').append("<p align='center'>Hasta 5mil volantes por mes, lo mantendrá como proveedor CLASSIC.<br>Entre 6mil y 20mil volantes por mes, lo mantendrá como proveedor PREMIUM.<br>Despues de 21mil volantes por mes, lo mantendrá como proveedor SPECIAL.</p>");
            $('#infomsg2').append("<p align='center'>Si la anterior información es clara ha culminado su proceso de registro.</p>");
            $("#modalcontent3,#modalcontent4").fadeToggle();
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

function submitInformacionP(){
   $('#infomsg4').append("<p align='center'>A su correo electrónico:"+$('#emailCP').val()+", se le enviará información más detallada respecto a la membresía de Proveedor a AUTOMOTORES CLUB SAS.</p>");
   $("#modalcontent4,#modalcontent5").fadeToggle();
}



function validarCheckbox()
{
    var checkboxs=document.getElementsByName("tipoServicio");
    var okay=false;
    var okay2=false;
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

function validarCheckbox2()
{
    var checkboxs=document.getElementsByName("mercadoObjetivo");
    var okay=false;
    var okay2=false;
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
    switch ($('#claseV option:selected').val()) {
        case "MOTOCICLETA":
        case "CUATRIMOTO":
        regex = /^[a-zA-Z]{3}\d{2}[a-zA-Z]{1}$/;
        $('#placa').attr("placeholder", "ABC12A");
        break;

        case "MOTOCARRO":
        regex = /^\d{3}[a-zA-Z]{3}$/;
        $('#placa').attr("placeholder", "123ABC");
        break;

        case "DIPLOMATICO":
        regex = /^[a-zA-Z]{2}\d{4}$/;
        $('#placa').attr("placeholder", "AB1234");
        break;

        default:
        regex = /^[a-zA-Z]{3}\d{3}$/;
        $('#placa').attr("placeholder", "ABC123");
        break;
    }

}

function test() {
    $('#modalcontent').fadeOut();
    $('#modalcontent2').fadeIn();
    localStorage.setItem('aseguradora', $('#empresaA').val());
}

function getCiudadesP() {
    $('#ciudadP').empty();
    $('#ciudadP').append("<option disabled selected>Seleccionar una</option>");
    var url, ciudadOption;
    url = 'js/colombia.json';

    $.getJSON(url, function (data) {
        $(data[$('#deptosP option:selected').val()].ciudades).each(function () {
            ciudadOption = "<option value='" + this + "'>" + this + "</option>";
            $('#ciudadP').append(ciudadOption);
        });
    });
}

function getCiudades() {
    $('#ciudades').empty();
    $('#ciudades').val = null;
    $('#ciudades').append("<option disabled selected>Seleccionar una</option>");
    var url, ciudadOption;
    url = 'js/colombia.json';

    $.getJSON(url, function (data) {
        $(data[$('#deptos option:selected').val()].ciudades).each(function () {
            ciudadOption = "<option value='" + this + "'>" + this + "</option>";
            $('#ciudades').append(ciudadOption);
        });
    });
}