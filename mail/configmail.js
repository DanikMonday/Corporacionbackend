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
        // to : FormModel.get(),
        to: mailer,
        subject : 'Agradecimiento',
        text : namer + 'prueba agradecimiento'
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mess);

    console.log(info);}
    catch(error){
        console.log(error)
    }
}

module.exports = sendMail;