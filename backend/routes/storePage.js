var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const StorePage = require('../models/storePage')

router.get('',(req,res)=>{
    StorePage.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    StorePage.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/store/:storeId',(req,res)=>{
    StorePage.find({"store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})


router.post('',(req,res)=>{
    let storePage= new StorePage({
        "pageName":req.body.pageName,
        "pageType":req.body.pageType,
        "store":req.body.store,
        "html":req.body.html,
        "css":req.body.css,
        "js":req.body.js
    });
    
    storePage.save()
        .then(page=>res.send(page))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    StorePage.updateOne(
         {"_id":req.params.id},
         {
            "pageName":req.body.pageName,
            "pageType":req.body.pageType,
            "store":req.body.store,
            "html":req.body.html,
            "css":req.body.css,
            "js":req.body.js
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    StorePage.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;