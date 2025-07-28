import { z } from 'zod';
import { IController } from '../contracts/Controller';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email').min(1, 'E-mail is required'),
})

export class HelloController implements IController<unknown> {
  async handle(request: IController.Request): Promise<IController.Response<unknown>> {

    const parsedBody = schema.safeParse(request.body)

    return {
      statusCode: 200,
      body: { parsedBody }
    }
  }
}
