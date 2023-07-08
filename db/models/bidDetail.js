const mongoose = require('mongoose');

const bidDetail = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required.'
    },
    partNum: {
        type: String,
        required: 'This field is required.'
    },
    longTextDesc: {
        type: String,
        required: 'This field is required.'
    },
    mfgName: {
        type: String,
        required: 'This field is required.'
    },
    quantity: {
        type: Number,
        required: 'This field is required.'
    },
    weight: {
        type: String,
        required: 'This field is required.'
    },
    unitPriceCIF: {
        priceInUsd: {
            type: String,
            required: false
        },
        freightPortion: {
            type: String,
            required: false
        },
        freightPercent: {
            type: Number,
            required: false
        },
        unitFreightPrice: {
            type: Number,
            required: false
        },
    },
    unitPriceDuties: {
        dutyHSCode: {
            type: String,
            required: false
        },
        dutyRate: {
            type: String,
            required: false
        },
        totalDuty: {
            type: Number,
            required: false
        },
        localClearing: {
            type: Number,
            required: false
        },
        markupPercent: {
            type: Number,
            required: false
        },
        markup: {
            type: Number,
            required: false
        },
    },
    totalUnitPrice: {
        ncdChargeOnePercent: {
            type: Number,
            required: false
        },
        WHT: {
            type: String,
            required: false
        },
        costOfCapital: {
            type: Number,
            required: false
        }
    },
    statUplift: {
        type: Number,
        required: true
    },
    totalUplift: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('BidDetail', bidDetail);