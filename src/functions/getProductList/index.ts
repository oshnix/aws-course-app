import {formatJSONResponse} from '@libs/api-gateway'
import {middyfy} from "@libs/lambda";
import productListMock from '@mock/productList.json';
import productsMock from '@mock/products.json'
import {APIGatewayProxyResult} from "aws-lambda";

function getProductList(): APIGatewayProxyResult {
    return formatJSONResponse({
        productList: productListMock.map(id => productsMock[id]),
    });
}

export const handler = middyfy(getProductList);