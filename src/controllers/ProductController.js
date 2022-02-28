
const {Products} = require('../database')
const {GetAll,GetOne,Create,Update,Destroy} = require('./baseController')

async function getAll(req, res) {
    let productList = await GetAll(Products)
    res.status(200).json({
        productList
    })
}

async function getOne(req, res) {
    const {productId} = req.params
    let product = await GetOne(Products,{id:productId})
    res.status(200).json({
        product
    })
}

async function store(req, res) {
    let productInformation = req.body
    let product = await Create(Products,productInformation);
    res.status(201).json({
        message: "Producto creado",
        product
    })
}

async function update(req, res) {
    let productInformation = req.body
    const {productId} = req.params

    let resp = await Update(Products,productInformation,{id: productId})
    res.json({
        message: "Producto actualizado",
        resp
    })
}

async function destroy(req, res) {
    const {productId} = req.params
    
    let product = await Destroy(Products,{id:productId})
    res.json({
        message: "Producto Eliminado",
        product
    })
}

module.exports = {
    store,
    getAll,
    getOne,
    update,
    destroy
}