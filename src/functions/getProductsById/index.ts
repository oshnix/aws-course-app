import {formatJSONResponse, ValidatedAPIGatewayProxyEvent} from '@libs/api-gateway'
import {middyfy} from "@libs/lambda";
import productsMock from '@mock/products.json'
import {APIGatewayProxyResult} from "aws-lambda";
import createHttpError from "http-errors";

function getProduct(id: string) {
    const product = productsMock[id] || null;
    if (!product) {
        throw createHttpError(404, `Product with id ${id} not found`);
    }
    return product;
}

function getProductsById(event: ValidatedAPIGatewayProxyEvent<any>): APIGatewayProxyResult {
    const { id } = event.pathParameters;
    const product = getProduct(id);

    return formatJSONResponse(product);
}

export const handler = middyfy(getProductsById);