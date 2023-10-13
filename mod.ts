import { opine, json } from "./deps.ts"
import { get, getAll, create } from "./kv.ts";

const app = opine()
app.use(json())

app.get("/", async(_req, res) => {
    res.send(await getAll())
});

app.get("/:id", async(req, res) => {
    res.send(await get(req.params.id as unknown as number))
});

app.post("/", async(req, res) => {
    await create(req.body.body);

    res.send((await getAll()).pop())
});

app.get('/doc/', (_req, res) => {
    res.redirect("https://github.com/akumarujon/paste#documentation")
})

app.listen(3000);