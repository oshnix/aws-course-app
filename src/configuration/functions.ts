import {AWS} from "@serverless/typescript";

export const getProductListConfiguration: AWS['functions']['key'] = {
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