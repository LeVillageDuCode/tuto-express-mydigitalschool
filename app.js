const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


// style.css dans public -> localhost:3000/style.css
// truc1.png dans img -> localhost:3000/img/truc1.png
app.use(express.static('public'))

app.get('/', (req, res) => {
    // index -> views/index.twig
    res.render('index');
})

app.get('/blog', (req, res) => {
    res.render('articles')
})

app.get('/contact', (req,res) => {
    res.render('contact', {mail: 'jb@truc.fr'})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})