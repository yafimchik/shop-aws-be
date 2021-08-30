import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { toJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { products } from '../../products';

const getProductList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  return toJSONResponse(products);
}

export const main = middyfy(getProductList);
