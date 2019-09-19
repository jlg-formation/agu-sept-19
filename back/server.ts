import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';
import * as fs from 'fs';


const app = express();
const port = 3000;
const htdocs = '../front/dist/front/';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

try {
    fs.statSync('data.json')
} catch (e) {
    fs.writeFileSync('data.json', '{}');
}
let quizzList = JSON.parse(fs.readFileSync('data.json', { encoding: 'utf8' }));

app.get('/api/v1/quizz', (req, res) => {
    res.json(quizzList);
});

app.post('/api/v1/quizz', (req, res) => {
    quizzList = req.body;
    fs.writeFileSync('data.json', JSON.stringify(quizzList));
    res.status(204).end();
});

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
