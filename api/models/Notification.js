const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    placeId:{type: mongoose.Schema.Types.ObjectId, required: true, ref:'Place'},
    owner:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    isSeen: {type: Boolean, default: false},
    purpose: {type: String},
    reason: {type: String}
}, {
    timestamps: true
})

const NotificationModel = mongoose.model('Notification', NotificationSchema);
module.exports = NotificationModel;