const Notification = require("../models/Notification.js");
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const jwt_secret = "$52isu23sdw2";
module.exports.getNotifications = async(req, res)=>{
    const {token} = req.cookies;
    try {
        if (token) {
            jwt.verify(token, jwt_secret, {}, async (err, userData) => {
                if (err) {
                    res.status(422).json(err);
                }
                const notif = await Notification.find({owner: userData.id}).populate('placeId user')
                res.json(notif);
            })
        }
    } catch (error) {
        throw new Error(error)
        res.status(422).json(error);
    }
}

module.exports.viewAllNotifications = async(req, res)=>{
    const {token} = req.cookies;
    try {
        if (token) {
            jwt.verify(token, jwt_secret, {}, async (err, userData) => {
                if (err) {
                    res.status(422).json(err);
                }
                const notif = await Notification.updateMany({owner: mongoose.Types.ObjectId(userData.id)}, {isSeen: true}, {new:true});
                res.json(true);
            })
        }
    } catch (error) {
        throw new Error(error)
        res.status(422).json(error);
    }
}

module.exports.deleteAllNotifications = async(req, res)=>{
    const {token} = req.cookies;
    try {
        if (token) {
            jwt.verify(token, jwt_secret, {}, async (err, userData) => {
                if (err) {
                    res.status(422).json(err);
                }
                const notif = await Notification.deleteMany({owner: mongoose.Types.ObjectId(userData.id)});
                res.json(true);
            })
        }
    } catch (error) {
        throw new Error(error)
        res.status(422).json(error);
    }
}