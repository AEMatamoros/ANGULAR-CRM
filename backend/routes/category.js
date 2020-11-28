var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Category = require('../models/categoryModel')

router.get('',(req,res)=>{
    Category.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Category.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/store/:storeId',(req,res)=>{
    Category.find({"store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let plan= new Category({
        "name":req.body.name,
        "description":req.body.description,
        "store":req.body.store
    });

    plan.save()
        .then(plan=>res.send(plan))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Category.updateOne(
         {"_id":req.params.id},
         {
          "name":req.body.name,
          "description":req.body.description,
          "store":req.body.store
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Category.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;