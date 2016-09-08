$(document).ready(function () {
    $('#registroForm').bootstrapValidator({
        excluded: [':disabled'],

        fields: {
            phone: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    regexp: {
                        regexp: /^\d{10}$/,
                        message: 'Debes ingresar un número celular valido'
                    }

                }
            },

            claseV: {
                validators: {
                    notEmpty: {
                        message: 'Debe escoger una opción'
                    }
                }
            },

            departamento: {
                validators: {
                    notEmpty: {
                        message: 'Debe escoger una opción'
                    }
                }
            },

            marca: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    }
                }
            },
            linea: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    }
                }
            },

            ciudad: {
                validators: {
                    notEmpty: {
                        message: 'Debe escoger una opción '
                    }
                }
            },

            placa: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    callback: {
                        callback: function (value, validator, $field) {

                            if ($('#claseV').val() === null) {
                                return {
                                    valid: false,
                                    message: 'Primero debe seleccionar una clase de vehículo'
                                }
                            } else if ($('#claseV option:selected').val() === "1" || $('#claseV option:selected').val() === "3") {
                                regex = /^[a-zA-Z]{3}\d{2}[a-zA-Z]{1}$/;
                                if (regex.exec(value)) {
                                    return {
                                        valid: true,
                                        message: 'Placa correcta'
                                    }
                                } else {
                                    return {
                                        valid: false,
                                        message: 'Formato de placa incorrecto'
                                    }
                                }
                            } else if ($('#claseV option:selected').val() === "2") {
                                regex = /^\d{3}[a-zA-Z]{3}$/;
                                if (regex.exec(value)) {
                                    return {
                                        valid: true,
                                        message: 'Placa correcta'
                                    }
                                } else {
                                    return {
                                        valid: false,
                                        message: 'Formato de placa incorrecto'
                                    }
                                }
                            } else if ($('#claseV option:selected').val() === "DIPLOMATICO") {
                                regex = /^[a-zA-Z]{2}\d{4}$/;
                                if (regex.exec(value)) {
                                    return {
                                        valid: true,
                                        message: 'Placa correcta'
                                    }
                                } else {
                                    return {
                                        valid: false,
                                        message: 'Formato de placa incorrecto'
                                    }
                                }
                            } else {
                                regex = /^[a-zA-Z]{3}\d{3}$/;
                                if (regex.exec(value)) {
                                    return {
                                        valid: true,
                                        message: 'Placa correcta'
                                    }
                                } else {
                                    return {
                                        valid: false,
                                        message: 'Formato de placa incorrecto'
                                    }
                                }
                            }
                        }
                    }

                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    emailAddress: {
                        message: 'Ingresa una dirección de correo electrónico válida'
                    }
                }
            },

            empresaA: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    }
                }
            },
            vigencia: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The value is not a valid date'
                    }
                }
            },

            pass: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    stringLength: {
                        message: 'La contraseña debe tener mínimo 6 caracteres y maximo 12 caracteres',
                        max:12,
                        min: 6
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    identical: {
                        field: 'pass',
                        message: 'Las contraseñas no coinciden. ¿Quieres volver a intentarlo?'
                    }
                }
            }

        }
    });


$('#registroFormP').bootstrapValidator({


    fields: {

        nombreP: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                stringLength: {
                    max: 50,
                    message: 'Este campo no puede tener mas de 50 caracteres'
                }
            }
        },

        ciudadP: {
            validators: {
                notEmpty: {
                    message: 'Debe escoger una opción'
                }
            }
        },

        departamentoP: {
            validators: {
                notEmpty: {
                    message: 'Debe escoger una opción'
                }
            }
        },

        razonS: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },

                stringLength: {
                    max: 70,
                    message: 'Este campo no puede tener mas de 70 caracteres'
                }
            }
        },

        id3: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                callback: {
                    callback: function (value, validator, $field) {
                        if ($('#tipoId').val() === null) {
                            return {
                                valid: false,
                                message: 'Seleccione primero el tipo de documento'
                            }
                        }else if ($('#tipoId').val() === '1') {
                            regex = /^\d{8,10}$/;
                            if (regex.exec(value)) {
                                return {
                                    valid: true,
                                    message: 'correcto'
                                }
                            }
                            else {
                                return {
                                    valid: false,
                                    message: 'Numero de identificacion incorrecto'
                                }
                            }
                        }else if($('#tipoId').val() === '2'){
                         regex = /^\d{9}$/;
                         if (regex.exec(value)) {
                            return {
                                valid: true,
                                message: 'correcto'
                            }
                        }
                        else {
                           return {
                            valid: false,
                            message: 'Numero de identificacion incorrecto'
                        }
                    }
                }
                      //return true;
                  }
              }
          }
      },


      tipoS: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            }
        }
    },

    direccionP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            stringLength: {
                max: 30,
                message: 'Este campo no puede tener mas de 30 caracteres'
            }

        }
    },

    telfijoP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            regexp: {
                regexp: /^\d{7}$/,
                message: 'Debes ingresar un número de telefono valido'
            }
        }
    },

    celularP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            regexp: {
                regexp: /^\d{10}$/,
                message: 'Debes ingresar un número celular valido'
            }

        }
    },

    cubrimientoP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            }
        }
    },

    domicilioP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            }
        }
    },

    nombreCP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            stringLength: {
                max: 50,
                message: 'Este campo no puede tener mas de 50 caracteres'
                
            }

        }
    },

    celularCP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            regexp: {
                regexp: /^\d{10}$/,
                message: 'Debes ingresar un número celular valido'
            }

        }
    },

    emailCP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            emailAddress: {
                message: 'Ingresa una dirección de correo electrónico válida'
            }
        }
    },

    descripcionP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            stringLength: {
                message: 'La descripcion no puede tener mas de 200 caracteres',
                max: 200
            }
        }
    },

    passwordP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            stringLength: {
                message: 'La contraseña debe tener mínimo 6 caracteres y maximo 12 caracteres',
                max:12,
                min: 6
            }
        }
    },


    confirmPasswordP: {
        validators: {
            notEmpty: {
                message: 'No puedes dejar este campo en blanco'
            },
            identical: {
                field: 'passwordP',
                message: 'Las contraseñas no coinciden. ¿Quieres volver a intentarlo?'
            }
        }
    },

    'mercadoObjetivo[]': {
                validators: {
                    choice: {
                        min: 1
                    }
                }
            },

              'tipoServicio[]': {
                validators: {
                    choice: {
                        min: 1
                    }
                }
            }

}
})


$('#contactanos').bootstrapValidator({

    message: 'This value is not valid',
    excluded: [':disabled'],

    fields: {

        asunto: {
            validators: {
                notEmpty: {
                    message: 'Debe escoger una opción'
                }
            }
        },

        remite: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                stringLength: {
                    max: 70,
                    message: 'Este campo no puede tener mas de 70 caracteres'
                }
            }
        },

        emailContactanos: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                emailAddress: {
                    message: 'Ingresa una dirección de correo electrónico válida'
                }
            }
        },

        celularContactanos: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                regexp: {
                    regexp: /^\d{10}$/,
                    message: 'Debes ingresar un número celular valido'
                }
            }
        },

        comentarioContactanos: {
            validators: {
                notEmpty: {
                    message: 'No puedes dejar este campo en blanco'
                },
                stringLength: {
                    max: 200,
                    message: 'Este campo no puede tener mas de 200 caracteres'
                }

            }
        }
    }
})
});