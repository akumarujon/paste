# Documentation
Routes:
- / GET - to get all `paste`s
- /:id GET - to get single `paste`` with `id` id.
- / POST - to create a new `paste`, body:
```json
{
    "body": "body of paste"
}
```