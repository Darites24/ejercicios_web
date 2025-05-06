import {pokemones} from "../database/database.js"

const getSaludo = (req, res) => {
    res.send("Hola soy un endpoint");
};

const getPokemones = (req, res) => {
    res.json(pokemones);
};

export const methodsPokemones = {
    getSaludo,
    getPokemones,
};