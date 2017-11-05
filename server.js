const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/', (req, res) => {
            app.render(req, res, '/');
        });

        server.get('/users', (req, res) => {
            app.render(req, res, '/');
        });

        server.get('/users/:id', (req, res) => {
            const queryParams = {
                username: req.params.id,
                sort: 'repos-by-stars',
            };
            app.render(req, res, '/users', queryParams);
        });

        server.get('/users/:id/:sort', (req, res) => {
            const queryParams = {
                username: req.params.id,
                sort: req.params.sort,
            };
            app.render(req, res, '/users', queryParams);
        });

        server.get('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    });
