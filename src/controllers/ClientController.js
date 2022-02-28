
const {Clients} = require('../database')
const {GetAll,GetOne,Create,Update,Destroy} = require('./baseController')

async function getAll(req, res) {
    let clientList = await GetAll(Clients)
    res.status(200).json({
        clientList
    })
}

async function getOne(req, res) {
    const {clientId} = req.params
    let client = await GetOne(Clients,{id:clientId})
    res.status(200).json({
        client
    })
}

async function store(req, res) {
    let clientInformation = req.body
    let client = await Create(Clients,clientInformation);
    res.status(201).json({
        message: "cliente creado",
        client
    })
}

async function update(req, res) {
    let clientInformation = req.body
    const {clientId} = req.params

    let resp = await Update(Clients,clientInformation,{id: clientId})
    res.json({
        message: "cliente actualizado",
        resp
    })
}

async function destroy(req, res) {
    const {clientId} = req.params
    
    let client = await Destroy(Clients,{id:clientId})
    res.json({
        message: "client Eliminado",
        client
    })
}

module.exports = {
    store,
    getAll,
    getOne,
    update,
    destroy
}