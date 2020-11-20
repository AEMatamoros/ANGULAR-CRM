var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const DataBank = require('../models/databank')
//INIT Multer
const multer= require('multer');

const storage= multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'public/uploads/dataBank')
    },
    filename:(req,file,callBack)=>{
        callBack(null,`dataBank${file.originalname}`)
    },
})

var upload= multer({storage:storage})
//Routes
router.get('',(req,res)=>{
    DataBank.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    DataBank.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/img/:storeId',(req,res)=>{
    DataBank.find({"type":"img","store":req.params.storeId})
         .then(result=>{res.send(result)})
         .catch(err=>res.send(err))
})

router.get('/vid/:storeId',(req,res)=>{
    DataBank.find({"type":"vid","store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.get('/pdf/:storeId',(req,res)=>{
    DataBank.find({"type":"vid","store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.get('/rar/:storeId',(req,res)=>{
    DataBank.find({"type":"vid","store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.get('/other/:storeId',(req,res)=>{
    DataBank.find({"type":"vid","store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})


router.post('/file',upload.single('file'),(req,res,next)=>{

    const file= req.file;
    console.log(file.filename);

    if(!file){
        const err=new Error('Upload a File!') 
        err.httpStatusCode=400
        return next(err);
    }
    
    res.send({'route':`uploads/databank/databank${file.originalname}`})
})
router.post('/',(req,res)=>{
    let dataBank= new DataBank({
        "type":req.body.type,
        "route":req.body.route,
        "store":req.body.store
    });

    dataBank.save()
        .then(template=>res.send(template))
        .catch(err=>res.send(err))
    
})

router.delete('/:id',(req,res)=>{
    DataBank.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})




module.exports = router;