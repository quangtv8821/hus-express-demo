function find(req, res) {
    res.json({ok: 'ok123'})
}

function create(req, res) {
    res.json({ok: 'create'})
}

export {
    find,
    create
}