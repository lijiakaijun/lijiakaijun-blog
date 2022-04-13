import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
    try {
        event.respondWith(handleEvent(event));
    } catch (e) {
        event.respondWith(new Response('Internal Error', { status: 500 }));
    }
});

async function handleEvent(event) {
    const url = new URL(event.request.url);
    const { origin, pathname: path, search } = new URL(event.request.url);
    let options = {}

    try {
        // 将 `/index.html` 结尾的请求重定向至 `/`
        if (path.endsWith('/index.html')) {
            return new Response(null, {
                status: 301,
                headers: {
                    Location: `${origin}${path.substring(0, path.length - 10)}${search}`,
                },
            });
        }

        const page = await getAssetFromKV(event, options);

        // 允许更改标题
        const response = new Response(page.body, page);

        response.headers.set("X-XSS-Protection", "1; mode=block");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("Referrer-Policy", "unsafe-url");
        response.headers.set("Feature-Policy", "none");

        return response;
        
      } catch (e) {
        // 未找到资源，返回 404 页面
        let notFoundResponse = await getAssetFromKV(event, {
            mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/nofund.html`, req),
        });

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
    }
}