var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Shared = require('../models/sharedFH')

router.get('',(req,res)=>{
    Shared.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Shared.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/store/:storeId',(req,res)=>{
    Shared.find({"storeId":req.params.storeId})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let plan= new Shared({
        "htmlH":req.body.htmlH,
        "htmlF":req.body.htmlF,
        "cssH":req.body.cssH,
        "cssF":req.body.cssF,
        "storeId":req.body.storeId
    });

    plan.save()
        .then(plan=>res.send(plan))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Shared.updateOne(
         {"_id":req.params.id},
         {
            "htmlH":req.body.htmlH,
            "htmlF":req.body.htmlF,
            "cssH":req.body.cssH,
            "cssF":req.body.cssF,
            "storeId":req.body.storeId
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Shared.deleteOne({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;