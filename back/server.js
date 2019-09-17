const express = require('express');
const serveIndex = require('serve-index');


const app = express();
const port = 3000;
const htdocs = '.';

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
