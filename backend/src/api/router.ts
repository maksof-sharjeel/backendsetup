import { FastifyPluginAsync } from 'fastify';
import { demoRouter } from './demo';

export const appRouter: FastifyPluginAsync = async (server) => {
	server.route({
		method: 'GET',
		schema: {
			tags: ['health'],
		},
		url: '/health',
		handler: () => ({ message: `ok` }),
	});
	server.register(demoRouter, { prefix: '/demo' });
};
