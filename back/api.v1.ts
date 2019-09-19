import * as express from 'express';
import * as fs from 'fs';

const app = express.Router();

try {
    fs.statSync('data.json')
} catch (e) {
    fs.writeFileSync('data.json', '{}');
}
let quizzList = JSON.parse(fs.readFileSync('data.json', { encoding: 'utf8' }));

app.get('/quizz', (req, res) => {
    res.json(quizzList);
});

app.post('/quizz', (req, res) => {
    quizzList = req.body;
    fs.writeFileSync('data.json', JSON.stringify(quizzList));
    res.status(204).end();
});

export const ws = app;