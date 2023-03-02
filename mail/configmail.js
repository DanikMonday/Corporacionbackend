const nodemailer = require('nodemailer');

sendMail = async (mailer, namer, ider, mobiler, aditionaler) => {
    try {
        const config = {
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'fundacionsemillac3@gmail.com',
                pass: 'rlebwvospburcpdh'
            }
        }

        const mess = {
            from: 'fundacionsemillac3@gmail.com',
            to: mailer,
            subject: 'Agradecimiento',
            text: '¡Gracias por el interés en esta donación ' + namer + '! Con su aporte continúa brotando esta semilla de vida en la comuna 3 de Medellín.\n En los siguientes días un miembro de la fundación se pondrá en contacto contigo para gestionar tu donación'
        }

        const messFund = {
            from: 'fundacionsemillac3@gmail.com',
            to: 'fundacionsemillac3@gmail.com',
            subject: 'Notificacion Nueva Donación',
            text: 'Buen día Fundación Semilla,\n \n ' + namer + ', cuyos datos de contacto son: \n CC/NIT: ' + ider + '\n Email ' + mailer + ' \n Teléfono: ' + mobiler + '.\n Comentarios Adiocionales: ' + aditionaler + '.\n \n Está interesado en realizar una donación, por favor revise el gestor de donaciones.'
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
                user: 'fundacionsemillac3@gmail.com',
                pass: 'rlebwvospburcpdh'
            }
        }

        const mess = {
            from: 'fundacionsemillac3@gmail.com',
            to: user.email,
            subject: 'Agradecimiento',
            text: 'En este correo encontrará'+ user.password
        }

        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mess);

        console.log(info);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMail, recoveryMail};