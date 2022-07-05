import type { RequestHandler } from './__types/[id].d';

export const get: RequestHandler = async ({ params }) => {
    return {
        body: params
    }
}