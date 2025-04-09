export async function GET({ params,platform }) {
        switch(params.content) {
                case "gallery":
                        return await reqContent(platform?.env.GALLERY,platform?.env.GALLERY_URL,params.name);
                case "article":
                        return await reqContent(platform?.env.ARTICLE,platform?.env.ARTICLE_URL,params.name);
                default:
                        return new Response(null, { status: 404 });
        }
}

async function reqContent(r2Api: unknown,r2Url: string, name: string):Promise<Response> {
        if(name !== "") {
                const file = await fetch(`${r2Url}${name}`);
                if (!file) return new Response(null, { status: 404 });
                return new Response(file.body, {
                        headers: { "Content-Type": file.headers.get("content-type"), "cf-cache-status": file.headers.get("cf-cache-status")},
                });
        }else{
                const list = await r2Api.list();
                return new Response(await JSON.stringify(list));
        }
}