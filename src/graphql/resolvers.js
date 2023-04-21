const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductByCategory } = require('./product.resolvers')
const { login } = require('./auth.resolvers')
const { addCategory, getCategory } = require('./category.resolvers')

const resolvers = {
    Query : {
        hello: () => 'hola mundoooo ',
        getPerson: (_, args) => `hola, mi nombre es ${args.name} y tengo ${args.age} años`,
        getInt: () => 6,
        getFloat: () => 3.3,
        getString: () => 'string',
        getBoolean: () => true,
        getId: () => 111,
        getNumbers: (_, args) => args.numbers,
        product: getProduct,
        products: getProducts,
        category: getCategory
        
    },
    Mutation: {
        addProduct,
        updateProduct,
        deleteProduct,
        login,
        addCategory
    },
    Category: {
        products: getProductByCategory
    } 
}


module.exports = resolvers