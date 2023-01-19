const mongoose = require("mongoose");

const pokeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    readyToEat: Boolean,
})

const Poke = mongoose.model("Poke", pokeSchema);

module.exports = Poke;