const express = require('express');
const studentRoutes = express.Router();
// const bcrytpt = require('bcryptjs')

let Student = require('./student.model');

studentRoutes.route('/add').post(function (req,res){
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student' : 'new student is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

studentRoutes.route('/:id').get(function (req, res){
    let campusid = req.params.id;
    console.log("yuor campus id is " +campusid);
    Student.findOne({$and:[{campusid : campusid}]},function (err,std){
        if(err)
            console.log(err);
        else{
            res.json(std)
        }
    });

});

studentRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Student.findById(id, function (err,student){
        res.json(student);
    });
});

studentRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Student.findById(id, function (err, student){
        if(!student)
            res.status(404).send("Data is not found??");
        else{
            student.name = req.body.name;
            student.address = req.body.address;
            student.nic = req.body.nic;
            student.phone = req.body.phone;
            student.campusid = req.body.campusid;
            student.email = req.body.email;
            student.password = req.body.password;


            student.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

studentRoutes.route('/delete/:id').get(function(req,res){
    Student.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

studentRoutes.route('/login').post(function (req, res){
    let campusid = req.body.username;
    let password = req.body.password;

    console.log("Your Login Details" +campusid+ +password);

    let student = new Student(req.body);

    Student.findOne({$and:[{campusid : campusid},{password : password}]})
        .then(student => {
            if(student){
                student.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});

module.exports = studentRoutes;