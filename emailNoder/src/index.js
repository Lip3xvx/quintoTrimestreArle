const express = require ('express');
const app = express();
const nodemailer = require('nodemailer');
const path = require ('path');
const port = 5000;



const transporter = nodemailer.createTransport({
  service: 'Gmail', // Puedes cambiarlo a otro servicio de correo si lo deseas
  auth: {
    user: 'testingnodemailer11@gmail.com', // Tu dirección de correo electrónico
    pass: 'ndnx nyex ymqm uugl', // Tu contraseña de correo electrónico
  },
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) =>{
  req.transporter = transporter;
  next()
})

app.use(require('./routes/index'))

app.listen(5000, () =>{
  console.log('Server on port 5000')
})