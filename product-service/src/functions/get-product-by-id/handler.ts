import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse, notFoundErrorResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { products } from '../../products';

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { id } = event.pathParameters;
  const product = products.find(prod => prod.id === id);

  if (!product) return notFoundErrorResponse('product not found!');

  return formatJSONResponse(product);
}

export const main = middyfy(getProductById);
