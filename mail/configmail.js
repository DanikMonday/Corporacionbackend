const nodemailer = require('nodemailer');
let fundacion = 'fundacionsemillaco3@gmail.com';

sendMail = async (newForm) =>{
try{
    const config ={
        host : 'smtp.gmail.com',
        port : 587,
        auth : {
            user : fundacion,
            pass : 'qxhwwmtzwctsccbt'
        }}

    const mess = {
        from : fundacion,
        to: newForm.email,
        subject : 'Agradecimiento',
        text :  '¡Gracias por el interés en esta donación ' +newForm.name+'! Con su aporte continúa brotando esta semilla de vida en la comuna 3 de Medellín.\n En los siguientes días un miembro de la fundación se pondrá en contacto contigo para gestionar tu donación'
    }

    const messFund = {
        from : fundacion,
        to: fundacion,
        subject : 'Notificacion Nueva Donación',
        text :'Buen día Fundación Semilla,\n \n ' + newForm.name +', cuyos datos de contacto son: \n CC/NIT: '  + newForm.nit_cedula+'\n Email '  +newForm.email+ ' \n Teléfono: '  + newForm.phone+'.\n Comentarios Adiocionales: '+ newForm.aditional +'.\n \n Está interesado en realizar una donación, por favor revise el gestor de donaciones.' 
    }

        const transport = nodemailer.createTransport(config);
        const transport2 = nodemailer.createTransport(config);

        const info = await transport.sendMail(mess);
        const info2 = await transport2.sendMail(messFund);

        console.log(info);
        console.log(info2)
    }

    catch (error) {
        console.log(error)
    }
}

recoveryMail = async (user) => {
    try {
        const config = {
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: fundacion,
                pass: 'qxhwwmtzwctsccbt'
            }
        }

        const mess = {
            from: fundacion,
            to: 'oscarforjuela@hotmail.com',
            subject: 'Contraseña nueva',
            text: 'En este correo encontrará su nueva contraseña que es: '+ user
        }

        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mess);

        console.log(info);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMail, recoveryMail};