import express from "express";
import routes from "./routes/pokemones.router.js"

const app = express();

//Seteado de puerto
app.set("port", 3000);
//Rutas
app.use(routes);

export default app;
