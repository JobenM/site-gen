import type { NextApiResponse } from 'next';

interface ImageRequest {
    query: { url: string; }
}

const imageProxy = async (req: ImageRequest,
    res: NextApiResponse<any>) => {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body = await result.body;
    if (!body) return;
    // @ts-ignore
    body.pipe(res);
}


export default imageProxy