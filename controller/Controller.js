const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

let servidor = models.Servidor;
let patrimonio = models.Patrimonio;
let area = models.Area;

//--------------------------------Padrão----------------------------------//
app.get('/',(req,res)=>{
    res.send('Servidor back-end funcionando!');
});

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor ON');
});


//--------------------------------Servidor----------------------------------//

//Inserir Servidor
app.post('/gravaServidor',async(req,res) => {
    console.log(req.body);
    let insere = await servidor.create({  
        prontuario: req.body.prontuario,      
        nome: req.body.nome,
        senha: req.body.senha,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
});

//Consultar Servidor [Prontuário]
app.post('/consultaServidor',async(req,res) =>{
    let response = await servidor.findOne({where:{prontuario:req.body.prontuario}});
    res.send(response);
});

//Consultar Servidor [Nome]
app.post('/consultaServidor',async(req,res) =>{
    let response = await servidor.findOne({where:{nome:req.body.nome}});
    res.send(response);
});

//Alterar Senha Servidor
app.post('/alteraSenhaServidor',async(req,res) => {
    let alterar = await servidor.update({       
        senha: req.body.senhaUser,       
        updateAT: new Date()
        }, 
        {where: { id: req.body.id }}
    ); 
    console.log(alterar);   
    res.send(alterar);
});

//Alteração Servidor
app.post('/alteraServidor',async(req,res) => {
    let alterar = await servidor.update({       
        prontuario: req.body.prontuario,
        nome: req.body.nome,  
        updateAT: new Date()
        }, 
        {where: { id: req.body.id }}
    ); 
    console.log(alterar);   
    res.send(alterar);
});

//Exclusão Servidor
app.post('/excluiServidor', async(req,res) => {
    let excluir = await servidor.destroy({
        where: { id: req.body.id }
    });    
});

//Listar Servidor
app.post('/ListaServidor',async(req,res) => {
    let response = await servidor.findAll({attributes: ['id', 'prontuario', 'nome']}); 
    console.log(response);
    res.send(response);    
});

//--------------------------------  Area   ----------------------------------//

//Inserir gravação por meio de chamada
app.post('/gravaArea',async(req,res) => {
    console.log(req.body);
    let insere = await area.create({      
        nome: req.body.nome,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
});

//Consultar Area
app.post('/consultaArea',async(req,res) =>{
    let response = await area.findOne({where:{nome:req.body.nome}});
    res.send(response);
})

//Alteração Area
app.post('/alteraArea',async(req,res) => {
    let alterar = await area.update({       
        nome: req.body.nome,
        updateAT: new Date()
        }, 
        {where: { id: req.body.id }}
    ); 
    console.log(alterar);   
    res.send(alterar);
});

//Exclusão Area
app.post('/excluiArea', async(req,res) => {
    let excluir = await area.destroy({
        where: { id: req.body.id }
    });    
});

//Listar Area
app.post('/ListaArea',async(req,res) => {
    let response = await area.findAll({attributes: ['id', 'nome']}); 
    console.log(response);
    res.send(response);    
});

//--------------------------------Patrimonio----------------------------------//

//Inserir gravação por meio de chamada
app.post('/gravaPatrimonio',async(req,res) => {
    console.log(req.body);
    let insere = await patrimonio.create({  
        codigo: req.body.codigo,      
        nome: req.body.nome,
        estado: req.body.estado,
        areaId: req.body.areaId,
        createAt: new Date(),
        updateAT: new Date()
    });
    console.log(insere);
    res.send(insere);
});

//Consultar Patrimonio [Nome]
app.post('/consultaPatrimonio',async(req,res) =>{
    let response = await patrimonio.findOne({where:{nome:req.body.nome}});
    res.send(response);
});

//Consultar Patrimonio [Codigo]
app.post('/consultaPatrimonio',async(req,res) =>{
    let response = await patrimonio.findOne({where:{codigo:req.body.codigo}});
    res.send(response);
});

//Alteração Patrimonio
app.post('/alteraPatrimonio',async(req,res) => {
    let alterar = await patrimonio.update({       
        codigo: req.body.codigo,
        nome: req.body.nome,
        estado: req.body.estado,
        areaId: req.body.areaId,
        updateAT: new Date()
        }, 
        {where: { id: req.body.id }}
    ); 
    console.log(alterar);   
    res.send(alterar);
});

//Exclusão Patrimonio
app.post('/excluiPatrimonio', async(req,res) => {
    let excluir = await patrimonio.destroy({
        where: { id: req.body.id }
    });    
});

//Listar Patrimonio
app.post('/ListaPatrimonio',async(req,res) => {
    let response = await patrimonio.findAll({attributes: ['id', 'codigo', 'nome', 'estado', 'areaId']}); 
    console.log(response);
    res.send(response);    
});


