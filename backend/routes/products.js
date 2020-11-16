var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Product = require('../models/productModel')
//INIT Multer
const multer= require('multer');

const storage= multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'public/uploads/productsIMG')
    },
    filename:(req,file,callBack)=>{
        callBack(null,`PRO${file.originalname}`)
    },
})

var upload= multer({storage:storage})

router.post('/img',upload.single('file'),(req,res,next)=>{

    const file= req.file;
    console.log(file.filename);

    if(!file){
        const err=new Error('Upload a File!') 
        err.httpStatusCode=400
        return next(err);
    }
    
    res.send({'img_route':`uploads/productsIMG/PRO${file.originalname}`})
})

router.get('',(req,res)=>{
    Product.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Product.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})

router.get('/store/:storeId',(req,res)=>{
    Product.find({"store":req.params.storeId})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})

router.post('',(req,res)=>{
    let product= new Product({
        "productName":req.body.productName,
        "productDesc":req.body.productDesc,
        "price":req.body.price,
        "imgRoute":req.body.imgRoute,
        "store":req.body.store,
    });

    product.save()
        .then(plan=>res.send(plan))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Product.updateOne(
         {"_id":req.params.id},
         {
            "productName":req.body.productName,
            "productDesc":req.body.productDesc,
            "price":req.body.price,
            "imgRoute":req.body.imgRoute,
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Product.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;