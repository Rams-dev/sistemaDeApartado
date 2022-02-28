async function GetAll(model){
    return await model.findAll()
}

async function GetOne(model, condicion){
    return await model.findAll({where:condicion})
}

async function Create(model, data){
    return await model.create(data)    
}

async function Update(model, data, condicion){
    return await model.update(data,{where:condicion})
}

async function Destroy(model, condicion){
    return await model.update({isActive: 0},{where:condicion})    
}

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    Destroy
}