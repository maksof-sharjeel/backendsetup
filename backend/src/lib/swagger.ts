import { SwaggerOptions } from '@fastify/swagger';
import { FastifySwaggerUiOptions } from '@fastify/swagger-ui';
import { SpecTransformer } from 'fastify-zod';
export const swaggerOptions: SwaggerOptions = {
	hideUntagged: true,
	openapi: {
		info: {
			title: 'API DOCUMENTATION',
			version: '0.0.0',
		},

		components: {
			securitySchemes: {
				apiKey: {
					type: 'apiKey',
					name: 'session-id',
					in: 'header',
				},
			},
		},
		security: [{ apiKey: [] }],
		servers: [{ url: 'http://localhost:7000/api' }],
	},
};

export const swaggerUiOption: FastifySwaggerUiOptions = {
	routePrefix: '/api/_doc',
	staticCSP: true,
	uiConfig: {
		docExpansion: 'list',
		deepLinking: false,
		persistAuthorization: true,
	},

	uiHooks: {
		onRequest: function (request, reply, next) {
			next();
		},
		preHandler: function (request, reply, next) {
			next();
		},
	},
	transformStaticCSP: (header) => header,
	transformSpecification: (swaggerObject, request, reply) => {
		return new SpecTransformer(swaggerObject).transform();
	},
	transformSpecificationClone: true,
};
