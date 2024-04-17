import { FastifySchema } from 'fastify';
import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const sampleSchema = z.object({
	sample: z.string()
});

export type SampleSchema = z.infer<typeof sampleSchema>;

export const { schemas: DemoSchema, $ref } = buildJsonSchemas(
	{
		sampleSchema,
	},
	{ $id: 'Demo' }
);

export const DemoDocument = {
	demo: {
		tags: ['chat-gpt'],
		body: $ref('sampleSchema'),
	},
} satisfies Record<string, FastifySchema>;
