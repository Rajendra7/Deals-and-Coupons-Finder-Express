var express = require('express');
var  router = express.Router();

const Item = require('../modal/couponitem');


//retiving the data
router.get('/coupons',(req, res, next)=>{
   Item.find(function(err, items){
       if(err){
           res.json(err);
       }
       else {
           res.json(items);
       }
   })
});


//inserting the data
router.post('/coupons-item',(req, res, next)=>{
    let newCouponItem = new Item({
        id : req.body.id,
        image : req.body.image,
        heading : req.body.heading,
        terms : req.body.terms
    });
    newCouponItem.save((err, item)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json({msg: 'Item has been added Sucessfully'});
        }
    });
});

//updating the data
router.put('/coupons-item/:id',(req, res, next)=>{
    Item.findOneAndUpdate({_id : req.params.id},{
        $set:{
        id : req.body.id,
        image : req.body.image,
        heading : req.body.heading,
        terms : req.body.terms
        }
    },
    function(err, result){
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

//deleting the data
router.delete('/coupons-item/:id',(req, res, next)=>{
    Item.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;
