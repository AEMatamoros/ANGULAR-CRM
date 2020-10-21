var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Company = require('../models/companyModel')

router.get('',(req,res)=>{
    Company.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Company.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})
router.get('/user/:userId',(req,res)=>{
    Company.find({"owner":req.params.userId})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let company= new Company({
        "companyName":req.body.companyName,
        "owner":req.body.owner,
        "description":req.body.description
    });

    company.save()
        .then(company=>res.send(company))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Company.updateOne(
         {"_id":req.params.id},
         {
            "companyName":req.body.companyName,
            "owner":req.body.owner,
           "description":req.body.description
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Company.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;