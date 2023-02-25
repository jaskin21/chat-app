import responseFactory from './responseFactory.js';

/**
 * @typedef {import('express').Response} Response
 */

/**
 * @param {Response} response The Response object of express
 * @param {string} statusCode Response HTTP Status Code
 * @param {string} errorMessage Readable error message
 * @param {object|undefined} otherDetails Any other details
 *
 * @returns {Response}
 */
const errorResponseFactory = (
  response,
  statusCode,
  errorMessage,
  otherDetails = undefined
) => {
  return responseFactory(response, statusCode, {
    error: errorMessage,
    ...otherDetails,
  });
};

export default errorResponseFactory;