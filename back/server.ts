import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';


const app = express();
const port = 3000;
const htdocs = '../front/dist/front/';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

let quizzList = {};

app.get('/api/v1/quizz', (req, res) => {
    res.json(quizzList);
});

app.post('/api/v1/quizz', (req, res) => {
    quizzList = req.body;
    res.status(204).end();
});

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
