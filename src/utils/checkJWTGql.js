const boom = require('@hapi/boom');


async function checkJWTGql(context) {
  const {user} = await context.authenticate('jwt', {session: false});
  if (!user){
      throw boom.unauthorized('jwt no es valido')
  }
  return user;
  }


  module.exports = checkJWTGql 