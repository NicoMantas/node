import express from 'express';

const app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});

app.get(
    '/', 
    (req, res) => {
    res.send('Hello World NODEMON');
    }
);

app.post("/create-user", (req, res) => {
    const newUser = {
        
    };
});



app.post("/create-user", (req, res) => {
            //Todo lo que tengo que hacer para crear el usuario
    //Valido JWT
    //Verifico los datos de la req
    //Envio los datos a la DB
    //Envio un mensaje de exito
    res.send('Hello World NODEMON')
});