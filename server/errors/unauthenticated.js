
import CustomApiError from "./custom-api.js";

import  {StatusCodes}  from "http-status-codes";

class UnAuthenticatedError extends CustomApiError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED;

    }

}

export default UnAuthenticatedError;