import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import httpErrorHandler from "@middy/http-error-handler";
import httpCors from "@middy/http-cors";

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser()).use(httpErrorHandler()).use(httpCors({
    origin: 'https://dtcqr3jir4q2g.cloudfront.net'
  }));
}
