require('dotenv').config();

const express = require('express');
const next = require('next');
const fetch = require('isomorphic-unfetch');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const githubAPI = 'https://api.github.com';
const githubAuth =
    CLIENT_ID ?
        `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}` :
        '';

app.prepare()
    .then(() => {
        const server = express();

        server.get('/api/users/:username', (req, res) => {
            fetch(`${githubAPI}/users/${req.params.username}${githubAuth ? `?${githubAuth}` : ''}`)
                .then(resp => resp.json())
                .then((resp) => {
                    res.send(resp);
                });
        });

        server.get('/api/search/repositories', (req, res) => {
            fetch(`${githubAPI}/search/repositories?q=${req.query.q}&sort=${req.query.sort}${githubAuth ? `&${githubAuth}` : ''}`)
                .then(resp => resp.json())
                .then(resp => res.send(resp));
        });

        server.get('/api/repos/:username/:reponame', (req, res) => {
            fetch(`${githubAPI}/repos/${req.params.username}/${req.params.reponame}${githubAuth ? `?${githubAuth}` : ''}`)
                .then(resp => resp.json())
                .then(resp => res.send(resp));
        });

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
