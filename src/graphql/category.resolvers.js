const checkRolesGql = require('./../utils/checkRolesGql')
const checkJWTGql = require('./../utils/checkJWTGql')
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = async (_, {dto}, context) => {
    const user = await checkJWTGql(context);
    checkRolesGql(user, 'admin');
    return service.create(dto);
}

const getCategory = (_, { id }) => {
    return service.findOne(id);
}

module.exports = { addCategory, getCategory };