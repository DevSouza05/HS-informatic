const exprees = require('express');


const app = exprees();
const port =  process.env.PORT || 5000;

app.use(exprees.json());


app.get('/', (req,res) =>{
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });