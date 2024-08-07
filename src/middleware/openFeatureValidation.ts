import { openFeatureClient } from '../openFeatureInit';

// Define types for the request, response, and next function
import { Request, Response, NextFunction } from 'express';

interface FlagDetails {
  value: boolean;
}

// const { responseWithMessage } = require('../common');
const responseWithMessage = ({ res, message, response, statusCode }) => {
    return res.status(statusCode).json({ message, response })
}

// import { statusCodes } from '../constant/index';
const statusCodes = {
    forbidden: 403,
    success: 200,
    validationError: 400,
    created: 201,
    unAuthorized: 401,
    internalServerError: 500,
  };

// OpenFeature client is initiated.
function openFeatureValidation(key: string) {
  return async function(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const flagDetails: FlagDetails = await openFeatureClient.getBooleanDetails(key, true); 
      // fallback flag turning it on for timebeing 
      console.log('flagDetails -', flagDetails);
      
      if (flagDetails && flagDetails.value) {
        return next();
      }

      return responseWithMessage({
        res,
        message: 'You do not have permission to access this resource',
        response: {},
        statusCode: statusCodes.forbidden,
      });
    } catch (error) {
      console.error('Error in openFeatureValidation', error);

      return responseWithMessage({
        res,
        message: 'Internal server error while validating permission',
        response: {},
        statusCode: statusCodes.internalServerError,
      });
    }
  };
}

export { openFeatureValidation };