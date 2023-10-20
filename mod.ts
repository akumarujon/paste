import { Hono } from "./deps.ts"
import { get, getAll, create } from "./kv.ts";

const app = new Hono();

app.get("/", async(ctx) => {
    return ctx.json(await getAll())
});

app.get('/doc/', (ctx) => {
    return ctx.redirect("https://github.com/akumarujon/paste#documentation")
});

app.get("/:id", async(ctx) => {
    console.log()
    return ctx.json(await get(ctx.req.param().id))
});

app.post("/",async (ctx) => {
    await create((await ctx.req.json()).body);
    return ctx.json((await getAll()).pop())
});


Deno.serve(app.fetch);