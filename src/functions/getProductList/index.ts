import {formatJSONResponse, ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway'
import {middyfy} from "@libs/lambda";
import productListMock from '@mock/productList.json'

function getProductList(event: ValidatedEventAPIGatewayProxyEvent<any>) {
    return formatJSONResponse({
        productList: productListMock,
    });
}

export const handler = middyfy(getProductList);