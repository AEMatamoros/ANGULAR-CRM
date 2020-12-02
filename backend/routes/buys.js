var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Buys = require('../models/buysModel')

router.get('',(req,res)=>{
    Buys.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/user/:userId',(req,res)=>{
    Buys.find({"userId":req.params.userId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



router.post('/:userId',(req,res)=>{
    let plan= new Buys({
        "userId":req.params.userId,
        "products":req.body.products,
        
    });

    plan.save()
        .then(plan=>res.send(plan))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Buys.updateOne(
         {"_id":req.params.id},
         {
            "products":req.body.products,
         })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Buys.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;