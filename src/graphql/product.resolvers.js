const ProductsService = require('./../services/product.service');
const service = new ProductsService();


const useGraphql = require(".")



const getProduct = (_, { id }) => {
    return service.findOne(id);
}


const getProducts = () => {
    return service.find({});
}

const addProduct = (_, { dto }) => {
    return service.create(dto);
}

const updateProduct =  (_,{id,dto}) =>{
    return service.update(id,dto);
}

const deleteProduct = async () => {
    await service.delete(id);
    return id;
}


const getProductByCategory = (parent) => {
    const id = parent.dataValues.id;
    return service.getBayCategory(id);
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductByCategory };