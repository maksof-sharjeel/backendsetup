import { appRouter } from '@/api/router';
import { swaggerOptions, swaggerUiOption } from '@/lib/swagger';
import compression from '@fastify/compress';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { FastifyPluginAsync } from 'fastify';
import log from 'fastify-log';
import multer from 'fastify-multer';

export const mainPlugin: FastifyPluginAsync = async (app) => {
	app.register(sensible);
	app.register(cors, {
		credentials: false,
		origin: '*',
	});
	app.register(fastifySwagger, swaggerOptions);
	app.register(fastifySwaggerUi, swaggerUiOption);
	app.register(compression, {
		zlibOptions: { level: 9, chunkSize: 512 },
		encodings: ['deflate', 'gzip'],
	});
	app.register(multer.contentParser);
	app.register(appRouter, { prefix: '/api' });
	app.register(log)
}
