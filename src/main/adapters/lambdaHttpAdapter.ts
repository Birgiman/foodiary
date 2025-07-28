import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { lambdaBodyParser } from '../utils/lambdaBodyParser';

export function lambdaHttpAdapter(controller: any) {
  return async (event: APIGatewayProxyEventV2) => {
    const body = lambdaBodyParser(event.body);
    const params = event.pathParameters ?? {}

    const queryParams = event.queryStringParameters ?? {}
    return controller.handle({
      body,
      params,
      queryParams,
    });
  }
}
