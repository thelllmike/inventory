/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Student = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    nic: {
        type: String
    },
    campusid: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }

 },
  {
    collation: 'student'
});

module.exports = mongoose.model('Student',Student);