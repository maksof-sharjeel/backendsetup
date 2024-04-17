import { FastifyPluginAsync } from 'fastify';
import { DemoDocument, DemoSchema } from './schema';
export const demoRouter: FastifyPluginAsync = async (server) => {
	for (const schema of DemoSchema) server.addSchema(schema);

	server.route({
		method: 'POST',
		schema: DemoDocument.demo,
		url: '/',
		handler: () => 'opk2',
	});
	server.route({
		method: 'GET',
		schema: {
			tags: ['chat-gpt'],
		},
		url: '/',
		handler: () => 'ok',
	});


};
