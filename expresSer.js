const express = require('express');
const { url } = require('inspector');
const path = require("path");//modulo path, se utiliza para concatenar la ruta raiz
const app = express();
const bodyParser = require('body-parser');



//app.get("/", (req, res)=>{
    //res.send("holas mundos")
    // res.sendFile("C:/Users/Junior/Desktop/programad driver/Nueva carpeta (2)/node/index.html") //forma de traer archivos desde su ubicacion

   // res.sendFile(path.join(__dirname + "/public"))//__dirname = representa la ruta raiz


//});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var array = [
    {
        "id": "1",
        "titulo": "Carne",
        "precio": "$150",
        "categoria": "informatica",
        "descripción":"lorem lorem lorem ",
        "imagen":{
            "url" :"https://th.bing.com/th/id/OIP.7D26CwoHX8IlsHJhjqUgAgHaEK?pid=ImgDet&rs=1"
                }
    }
]

app.use(express.static(__dirname + '/public'))
app.get("/productos",(req,res,next)=>{
    console.log(req)
    console.log("<h1>hola mundo</h1>")
    res.json(array)
}) 

//agregar elementos a la base de datos
app.post("/productos",(req,res,next)=>{
  console.log(req.body);
   //hacemos una peticion (req) , lo concatenamos al cuerpo(req.body) y traemos el array(req.body.id)
  //creamos una const que guarde el objeto luego vamos a agregarlo al array(productoNew)
     const productoNew = {
	id: req.body.id,
    titulo: req.body.titulo,
    precio: req.body.precio,
    categoria: req.body.categoria,
    imagen: req.body.imagen
}

app.delete("/productos",(req,res,next)=>{
    console.log(req.body)
    res.json(array)
    
})

    array.push(productoNew)
  res.json({menssager:"productoAgregadoCorrectamente", producto:productoNew});
})


app.get("/chau-mundo",(req,res,next)=>{ res.send("<h1>estamos en chau mundo</h1>")})


app.listen(3080, () =>{
    console.log("server running on port")
})