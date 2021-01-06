const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const Schema = mongoose.Schema;

var gameSchema = new Schema({
    name: String,
    released: String,
    platform: String,
    background_image: String
})

var GameModel = mongoose.model("games", gameSchema);



const myConnectionString = 'mongodb+srv://admin:admin@cluster0.3tu8b.mongodb.net/games?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

app.get('/topGames/games', (req, res) => {

    const mygames =
        [
            {
                "id": 3498,
                "name": "Grand Theft Auto V",
                "released": "2013-09-17",
                "platform":"All",
                "background_image": "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
            },
        ]

    res.status(200).json({
        message: "EOK",
        games: mygames
    })


    app.post('/topGames/games', (req, res) => {
        console.log('game Sucessfully posted');
        console.log(req.body.name);
        console.log(req.body.released);
        console.log(req.body.platform);
        console.log(req.body.background_image);

        GameModel.create({
            title: req.body.name,
            year: req.body.released,
            platform: req.body.platform,
            poster: req.body.background_image
        });
        res.send('Item added');

    })


    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`))
})