import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, ServiceUnavailableException } from "@nestjs/common";

import {FastifyReply} from 'fastify'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply>()
        response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
            code: HttpStatus.SERVICE_UNAVAILABLE,
            message: exception.message,
        })
    }
}