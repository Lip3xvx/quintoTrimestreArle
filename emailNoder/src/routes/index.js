const { Router} = require ('express');
const router = Router();
const nodemailer = require('nodemailer')


router.post('/send-email', async (req,res) =>{
const {name, email, phone, message} = req.body;
const transporter = req.transporter;


const mailOptions = {
  from: 'testingnodemailer11@gmail.com', // Tu dirección de correo electrónico
  to: email, // Correo electrónico del destinatario
  subject: 'Mensaje de contacto', // Asunto del correo
  html: `<h1>User Information</h1>
  <ul>
  <li>Username: ${name}</li>
  <li>${email}</li>
  <li>${phone}</li>
  </ul>
  <p>${message}</p>`,
};

try {
 await transporter.sendMail(mailOptions);
  console.log('Correo enviado con éxito');
  res.send('Correo enviado con éxito');
} catch (error) {
  console.error('Error al enviar el correo:', error);
  res.status(500).send('Error al enviar el correo');
}
});




module.exports = router;