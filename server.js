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

        server.get('/repos/:username/:reponame', (req, res) => {
            const queryParams = {
                username: req.params.username,
                reponame: req.params.reponame,
            };
            app.render(req, res, '/repos', queryParams);
        });

        server.get('/users', (req, res) => {
            app.render(req, res, '/');
        });

        server.get('/users/:username', (req, res) => {
            const queryParams = {
                username: req.params.username,
                sort: 'repos-by-stars',
            };
            app.render(req, res, '/users', queryParams);
        });

        server.get('/users/:username/:sort', (req, res) => {
            const queryParams = {
                username: req.params.username,
                sort: req.params.sort,
            };
            app.render(req, res, '/users', queryParams);
        });

        server.get('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
            if (err) throw err;
            process.stdout.write(`> Ready on http://localhost:${port}\n`);
        });
    });
