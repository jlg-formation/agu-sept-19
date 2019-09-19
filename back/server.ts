import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';

import { ws } from './api.v1';


const app = express();
const port = 3000;
const htdocs = '../front/dist/front/';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

app.use('/api/v1', ws);

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
