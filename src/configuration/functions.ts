import {AWS} from "@serverless/typescript";
type FunctionConfiguration = AWS['functions']['key'];

export const getProductsListConfiguration: FunctionConfiguration = {
    handler: `src/functions/getProductList/index.handler`,
    events: [
        {
            http: {
                method: 'GET',
                path: '/products'
            }
        }
    ]
}

export const getProductsByIdConfiguration: FunctionConfiguration = {
    handler: `src/functions/getProductsById/index.handler`,
    events: [
        {
            http: {
                method: 'GET',
                path: '/products/{id}'
            }
        }
    ]
}