import { z } from "zod";

/**
 * for explanation of the schema see:
 * https://developer.marvel.com/documentation/apiresults
 *
 * results will be a discriminated union of result | error
 */
const MarvelApiResultSchema = z.object({
	code: z.number().int(),
	status: z.string(),
	data: z.object({}),
	etag: z.string(),
	copyright: z.string(),
	attributionText: z.string(),
	attributionHTML: z.string(),
});

const MarvelApiContainerSchema = z.object({
	offset: z.number().int(),
	limit: z.number().int(),
	total: z.number().int(),
	results: z.array(z.object({})),
});

const MarvelApiErrorSchema = z.object({
	code: z.number().int(),
	status: z.string(),
});
