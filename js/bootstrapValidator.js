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
                            } else if ($('#claseV option:selected').val() === "MOTOCICLETA" || $('#claseV option:selected').val() === "CUATRIMOTO") {
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
                            } else if ($('#claseV option:selected').val() === "MOTOCARRO") {
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

            password: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    stringLength: {
                        message: 'La contraseña debe tener mínimo 6 caracteres',
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
                        field: 'password',
                        message: 'Las contraseñas no coinciden. ¿Quieres volver a intentarlo?'
                    }
                }
            }

        }
    });

    $('#registroFormP').bootstrapValidator({

        message: 'This value is not valid',
        excluded: [':disabled'],

        fields: {

            nombreP: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
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
                    }
                }
            },

            nit: {
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

            tipoS: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    }
                }
            },

            tipoR: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    }
                }
            },

            phoneP: {
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

            emailP: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    emailAddress: {
                        message: 'Ingresa una dirección de correo electrónico válida'
                    }
                }
            },
            passwordP: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar este campo en blanco'
                    },
                    identical: {
                        field: 'confirmPasswordP',
                        message: 'Las contraseñas no coinciden. ¿Quieres volver a intentarlo?'
                    },
                    stringLength: {
                        message: 'La contraseña debe tener mínimo 6 caracteres',
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
            }

        }

    });


});