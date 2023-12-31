const winston = require('winston');
const { JsonResponse } = require('../lib/apiResponse');

module.exports = function (err, req, res, next) {
  const errorMessage = err.msg || err.message || "Something went wrong";
  const statusCode = err.code || err.statusCode || 500;

  console.log("err ==> ", new Date(), "<===>", err.service, "<===>", errorMessage);

  winston.error(errorMessage, err);
  return JsonResponse(res, statusCode, errorMessage);
}