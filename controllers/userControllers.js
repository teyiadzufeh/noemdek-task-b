require('../db');
const { JsonResponse } = require('../lib/apiResponse');
const { MSG_TYPES } = require('../constants/types');
const Parameter = require('../db/models/parameter');
const BidDetail = require('../db/models/bidDetail');

/**
 * CREATE PARAMETERS
 * POST /user/createParameters
 * @param {*} req 
 * @param {*} res 
 */
exports.createParameters = async (req, res) => {
  try {
    let {rfqNum, general, dutiesAndFees, freight} = req.body;
    const parameter = await Parameter.insertMany({
      rfqNum,
      general,
      dutiesAndFees,
      freight
    })

    return JsonResponse(res, 200, MSG_TYPES.CREATED, parameter);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR);
  }
}

/**
 * GET PARAMETERS
 * GET /user/getParameters
 * @param {*} req 
 * @param {*} res 
 */
exports.getParameters = async (req,res) => {
  try {
    const parameter = await Parameter.findOne({"rfqNum": req.body.rfqNum});
    if (!parameter){
      JsonResponse(res, 400, 'No parameter with that rfq number');
      return false;
    }

    return JsonResponse(res, 200, MSG_TYPES.FETCHED, parameter);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR, error);
  }
}

/**
 * CREATE BID DETAILS
 * POST /user/createBidDetails
 * @param {*} req 
 * @param {*} res 
 */
exports.createBidDetails = async (req, res) => {
  try {
    let {productName, partNum, longTextDesc, mfgName, quantity, weight, unitPriceCIF, unitPriceDuties, totalUnitPrice, statUplift, totalUplift} = req.body;
    const bidDetails = await BidDetail.insertMany({
      productName,
      partNum,
      longTextDesc,
      mfgName,
      quantity,
      weight, 
      unitPriceCIF, 
      unitPriceDuties, 
      totalUnitPrice, 
      statUplift, 
      totalUplift
    })

    return JsonResponse(res, 200, MSG_TYPES.CREATED, bidDetails);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR);
  }
}

/**
 * UPDATE BID DETAILS
 * PUT /user/updateBidDetails/:id
 * @param {*} req 
 * @param {*} res 
 */
exports.updateBidDetails = async (req,res) => {
  try {
    const bidDetails = await BidDetail.findById(req.params.id);
    if (!bidDetails){
      JsonResponse(res, 404, 'Bid Details not found');
      return false;
    }

    await BidDetail.findByIdAndUpdate(req.params.id, req.body);
    const updatedBidDetails = await BidDetail.findById(req.params.id);
    return JsonResponse(res, 200, MSG_TYPES.UPDATED, updatedBidDetails);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR);
  }
}

/**
 * GET BID DETAILS
 * POST /user/getBidDetails/:id
 * @param {*} req 
 * @param {*} res 
 */
exports.getBidDetails = async (req,res) => {
  try {
    const bidDetails = await BidDetail.findById(req.params.id);
    if (!bidDetails){
      JsonResponse(res, 404, 'Bid Details not found');
      return false;
    }

    return JsonResponse(res, 200, MSG_TYPES.FETCHED, bidDetails);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR, error);
  }
}

/**
 * GET UNIT PRICE CIF
 * POST /user/getUnitPriceCIF/:id
 * @param {*} req 
 * @param {*} res 
 */
exports.getUnitPriceCIF = async (req,res) => {
  try {
    const unitPriceCIF = await BidDetail.findById(req.params.id).select('unitPriceCIF');
    if (!unitPriceCIF){
      JsonResponse(res, 404, 'Bid Details not found');
      return false;
    }

    return JsonResponse(res, 200, MSG_TYPES.FETCHED, unitPriceCIF);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR, error);
  }
}

/**
 * GET UNIT PRICE DUTIES
 * POST /user/getUnitPriceDuties/:id
 * @param {*} req 
 * @param {*} res 
 */
exports.getUnitPriceDuties = async (req,res) => {
  try {
    const unitPriceDuties = await BidDetail.findById(req.params.id).select('unitPriceDuties');
    if (!unitPriceDuties){
      JsonResponse(res, 404, 'Bid Details not found');
      return false;
    }

    return JsonResponse(res, 200, MSG_TYPES.FETCHED, unitPriceDuties);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR);
  }
}

/**
 * GET TOTAL PRICE
 * POST /user/getTotalUnitPrice/:id
 * @param {*} req 
 * @param {*} res 
 */
exports.getTotalUnitPrice = async (req,res) => {
  try {
    const totalUnitPrice = await BidDetail.findById(req.params.id).select('totalUnitPrice');
    if (!totalUnitPrice){
      JsonResponse(res, 404, 'Bid Details not found');
      return false;
    }

    return JsonResponse(res, 200, MSG_TYPES.FETCHED, totalUnitPrice);
  } catch (error) {
    console.log(error);
    return JsonResponse(res, 500, MSG_TYPES.SERVER_ERROR);
  }
}