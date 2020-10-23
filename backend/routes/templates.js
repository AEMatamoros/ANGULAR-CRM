var mongoose= require('mongoose');
const express= require('express');
const router = express.Router();
const Templates = require('../models/templatesModel')
//INIT Multer
const multer= require('multer');

const storage= multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'uploads/templatesIMG')
    },
    filename:(req,file,callBack)=>{
        callBack(null,`TEMP${file.originalname}`)
    },
})

var upload= multer({storage:storage})
//Routes
router.get('',(req,res)=>{
    Templates.find()
         .then(result=>{
             res.send(result);
             res.end();
         })
         .catch(err=>res.send(err))
})

router.get('/:id',(req,res)=>{
    Templates.find({"_id":req.params.id})
         .then(result=>res.send(result[0]))
         .catch(err=>res.send(err))
})


router.post('/img',upload.single('file'),(req,res,next)=>{

    const file= req.file;
    console.log(file.filename);

    if(!file){
        const err=new Error('Upload a File!') 
        err.httpStatusCode=400
        return next(err);
    }
    
    res.send({'img_route':`uploads/templatesIMGTEMP${file.originalname}`})
})
router.post('/',(req,res)=>{
    let template= new Templates({
        "templateName":req.body.templateName,
        "templateDescription":req.body.templateDescription,
        "img_route":req.body.img_route,
        "html":req.body.html,
        "css":req.body.css,
        "js":req.body.js,
    });

    template.save()
        .then(template=>res.send(template))
        .catch(err=>res.send(err))
    
})

router.put('/:id',(req,res)=>{

    Templates.updateOne(
         {"_id":req.params.id},
         {
          "name":req.body.name,
          "description":req.body.description,
          "saveData":req.body.saveData,
          "host":req.body.host,
          "templatesNumber":req.body.templatesNumber,
          "pagesNumber":req.body.pagesNumber,
        })
         .then(result=>res.send(result))
         .catch(err=>res.send(err))

})

router.delete('/:id',(req,res)=>{
    Templates.remove({"_id":req.params.id})
         .then(result=>res.send(result))
         .catch(err=>res.send(err))
})



module.exports = router;