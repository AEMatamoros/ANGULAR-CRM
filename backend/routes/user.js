const Users = require('../auth/auth.controller');
module.exports = (router) => {

  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);

  router.get('/',()=>{

  })

  router.post('/',()=>{
    
  })

  router.put('/',()=>{
    
  })

  router.delete('/',()=>{
    
  })
















}