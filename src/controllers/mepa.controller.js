// const { pool } = require('../config/dbConnectMySql');
// import { pool } from '../config/dbConnectMySql';
// const request = require('request');
import request from 'request';

// const request = require('request');
const accounts = [{
    "id": "100001",
    "nombre": 'Sumilda Bengolea',
    "email": "macu05b@gmail.com",
    "password": "123456",
    "telefono": 931741680,
    "accountType": "Chequing",
    "accountBalance": 0
}];
export const mercadoPago = (req, res) => {
    var response = JSON.parse(JSON.stringify(req.body));
    // console.log(response);
    // console.log(req);
    console.log(req.body.email);
    console.log(req.body.password);
    const username1 = req.body.email; //username is their email
    const password1 = req.body.password;

    console.log(username1);
    console.log(password1);
    if (username1 === accounts[0].email && password1 === accounts[0].password) {
        console.log("Correct login");
        res.json({
            message: 'Login correcto',
            data: accounts[0],
            // error: err
        });
        res.render('index', { layout: false });
    } else if (username1 == accounts[0].email && password1 != accounts[0].password) {

        var incorrectp = ("Invalid Password");
        // res.render('login', { layout: false, wrongp: incorrectp });
        console.log('error Invalid Password');
    } else if (username1 != accounts[0].email) {

        var incorrectu = ("Not a registered username");
        // res.render('login', { layout: false, wrongu: incorrectu });
        console.log('error Not a registered username');
    }

}
export const registroList = (req, res) => {
    var response = JSON.parse(JSON.stringify(req.body));
    console.log('aqui');
    console.log(response);
    console.log(req.body);
    // console.log(req);
    var options = {
        'method': 'POST',
        'url': 'https://notification-api.onrender.com/api/v1/notification/send?type=email&title=demo-solicitud-servicio&app=demo',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name_client": req.body.cliente, //"2CLOUD",
            "nro_order": req.body.nropedido,
            "tel_client": req.body.telefono,
            "id_client": req.body.idcliente,
            "email_client": req.body.email,
            "order_received_by": req.body.receptor,
            "order_date": req.body.fepedido,
            "date_planned_start": req.body.feinicio,
            "date_planned_finish": req.body.fefinalizacion,
            "work_description": req.body.descripcion,
            "to_send": req.body.receptor
        })

    };
    request(options, function(error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
    console.log(req.body);
    res.json({
        message: 'Registro correctamente correcto',
        data: req.body,
        datos: options
            // error: err
    });
}