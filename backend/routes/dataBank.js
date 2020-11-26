var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const DataBank = require('../models/databank')
const DataBankFolder = require('../models/dataBankFolder')
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

router.get('/img/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none' ){
        DataBank.find({"type":"img","store":req.params.storeId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }else{
        DataBank.find({"type":"img","store":req.params.storeId,"parent":req.params.parentId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }
})

router.get('/vid/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none' ){
        DataBank.find({"type":"vid","store":req.params.storeId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }else{
        DataBank.find({"type":"vid","store":req.params.storeId,"parent":req.params.parentId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }
})

router.get('/pdf/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none' ){
        DataBank.find({"type":"pdf","store":req.params.storeId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }else{
        DataBank.find({"type":"pdf","store":req.params.storeId,"parent":req.params.parentId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }
})

router.get('/rar/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none' ){
        DataBank.find({"type":"rar","store":req.params.storeId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }else{
        DataBank.find({"type":"rar","store":req.params.storeId,"parent":req.params.parentId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }
})

router.get('/other/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none' ){
        DataBank.find({"type":"other","store":req.params.storeId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }else{
        DataBank.find({"type":"other","store":req.params.storeId,"parent":req.params.parentId})
            .then(result=>{res.send(result)})
            .catch(err=>res.send(err))
    }
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
        "store":req.body.store,
        "parent":req.body.parent
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


//Folder
router.post('/folder/:storeId',(req,res)=>{
    //console.log(req.body)
    let dataBankFolder= new DataBankFolder({
        "store":req.params.storeId,
        "parentFolder":req.body.parentFolder,
        "name":req.body.folderName
    });

    dataBankFolder.save()
        .then(template=>res.send(template))
        .catch(err=>res.send(err))
    
})

router.get('/folder/:storeId',(req,res)=>{
    DataBankFolder.find({"_id":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})
router.get('/folder/:storeId/:parentId',(req,res)=>{
    if(req.params.parentId=='none'){
        DataBankFolder.find({"store":req.params.storeId,'parentFolder':''})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
    }else{
        DataBankFolder.find({"parentFolder":req.params.parentId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
    }
    
})
module.exports = router;