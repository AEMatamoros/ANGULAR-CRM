var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const plans = require('../models/plansModel')

router.get('',(req,res)=>{
    plans.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    plans.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let plan= new plans({
        "name":req.body.name,
        "description":req.body.description,
        "saveData":req.body.saveData,
        "host":req.body.host,
        "templatesNumber":req.body.templatesNumber,
        "pagesNumber":req.body.pagesNumber,
        "price":req.body.price,
        "storesNumber":req.body.storesNumber
    });

    plan.save()
        .then(plan=>res.send(plan))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{
    console.log(req.body)
    plans.updateOne(
         {"_id":req.params.id},
         {
          "name":req.body.name,
          "description":req.body.description,
          "saveData":req.body.saveData,
          "host":req.body.host,
          "templatesNumber":req.body.templatesNumber,
          "pagesNumber":req.body.pagesNumber,
          "storesNumber":req.body.storesNumber
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    plans.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;