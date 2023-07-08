const mongoose = require('mongoose');

const parameterSchema = new mongoose.Schema({
    rfqNum: {
        type: String,
        required: 'This field is required.'
    },
    general: {
        markupLineItem: {
            type: Number,
            required: true
        },
        markupPercent: {
            type: Number,
            required: true
        },
        withholdingTax: {
            type: Number,
            required: true
        },
        monthlyClientCapitalCost: {
            type: Number,
            required: true
        },
        monthlyNoemdekCapitalCost: {
            type: Number,
            required: true
        },
        oemDiscount: {
            type: Number,
            required: true
        },
        paymentTiming: {
            type: Number,
            required: true
        },
    },
    dutiesAndFees: {
        surcharge: {
            type: Number,
            required: true
        },
        ciss: {
            type: Number,
            required: true
        },
        vat: {
            type: Number,
            required: true
        },
        tls: {
            type: Number,
            required: true
        },
        localClearing: {
            type: Number,
            required: true
        },
    },
    freight: {
        insurance: {
            type: Number,
            required: true
        },
        totalWeight: {
            type: Number,
            required: true
        },
        totalFreightCost: {
            type: Number,
            required: true
        },
        weightApproach: {
            type: String,
            required: true
        },
        deliveryLeadTime: {
            type: String,
            required: true
        },
    }

});

parameterSchema.set('timestamps', true)

module.exports = mongoose.model('parameter', parameterSchema);