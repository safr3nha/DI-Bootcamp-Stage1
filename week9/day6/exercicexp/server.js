const express = require('express');
const bodyParser = require('body-parser');
const Parser = require('rss-parser');
const app = express();
const parser = new Parser();
const FEED_URL = 'https://thefactfile.org/feed/';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        let feed = await parser.parseURL(FEED_URL);
        res.render('pages/index', { posts: feed.items, searchResults: null });
    } catch (error) {
        res.status(500).send('Erro ao carregar o feed RSS.');
    }
});

app.get('/search', (req, res) => res.render('pages/search', { searchResults: null }));

app.post('/search/title', async (req, res) => {
    try {
        let feed = await parser.parseURL(FEED_URL);
        let filtered = feed.items.filter(i => i.title.toLowerCase().includes(req.body.title.toLowerCase()));
        res.render('pages/search', { searchResults: filtered });
    } catch (error) {
        res.status(500).send('Erro ao buscar por título.');
    }
});

app.post('/search/category', async (req, res) => {
    try {
        let feed = await parser.parseURL(FEED_URL);
        let filtered = feed.items.filter(i => i.categories && i.categories.includes(req.body.category));
        res.render('pages/search', { searchResults: filtered });
    } catch (error) {
        res.status(500).send('Erro ao buscar por categoria.');
    }
});

app.listen(3000, () => console.log('Servidor em http://localhost:3000'));
