const nodemailer = require('nodemailer');

sendMail = async (mailer, namer) =>{
try{
    const config ={
        host : 'smtp.gmail.com',
        port : 587,
        auth : {
            user :'fundacionsemillac3@gmail.com',
            pass :'rlebwvospburcpdh'
        }
    }

    const mess = {
        from : 'fundacionsemillac3@gmail.com',
        to: mailer,
        subject : 'Agradecimiento',
        text :  '¡Gracias por el interés en esta donación ' + namer +'! Con su aporte continúa brotando esta semilla de vida en la comuna 3 de Medellín. En estos días un miembro de la fundación se pondrá en contacto contigo para gestionar tu donación'
    }

    const messFund = {
        from : 'fundacionsemillac3@gmail.com',
        to: 'fundacionsemillac3@gmail.com',
        subject : 'Notificacion Nueva Donación',
        text :'Buen día Fundación Semilla, ' + namer + ' está interesado en realizar una donación, por favor revise el gestor de donaciones'
    }

    const transport = nodemailer.createTransport(config);
    const transport2 = nodemailer.createTransport(config);

    const info = await transport.sendMail(mess);
    const info2 = await transport2.sendMail( messFund);

    console.log(info);
    console.log(info2)}

    catch(error){
        console.log(error)
    }
}

module.exports = sendMail;