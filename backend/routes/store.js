var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Store = require('../models/storeModel')

router.get('',(req,res)=>{
    Store.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Store.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/company/:companyId',(req,res)=>{
    Store.find({"company":req.params.companyId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let store= new Store({
        "storeName":req.body.storeName,
        "storeDescription":req.body.storeDescription,
        "company":req.body.company
    });
    
    store.save()
        .then(Store=>res.send(Store))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Store.updateOne(
         {"_id":req.params.id},
         {
            "storeName":req.body.storeName,
            "storeDescription":req.body.storeDescription,
            "company":req.body.company
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Store.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;