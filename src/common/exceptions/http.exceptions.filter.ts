import { FastifyReply } from 'fastify';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply>();
        const status = exception.getStatus();

        response.status(200).send({
            code: status,
            message: exception.message
        })
    }
    
}