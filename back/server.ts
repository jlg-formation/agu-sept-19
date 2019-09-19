import * as express from 'express';
import * as serveIndex from 'serve-index';


const app = express();
const port = 3000;
const htdocs = '../front/dist/front/';

app.use((req, res, next) => {
    console.log('req.url', req.url);
    next();
});

const quizzList = {toto: 'titi'};

app.get('/api/v1/quizz', (req, res) => {
    res.json(quizzList);
});

app.use(express.static(htdocs));
app.use(serveIndex(htdocs, { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
