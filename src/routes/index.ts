import type { RequestHandler } from './__types/index.d';

export const get: RequestHandler = async ({ locals }) => {
	// locals.username comes from src/hooks.js
	const username: string = locals.username

	return {
		body: username
	}
}