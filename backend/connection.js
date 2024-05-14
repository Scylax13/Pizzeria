var Mongodb = require('mongodb');
var express = require('express');
var cors = require('cors');

var mongoClient = Mongodb.MongoClient;

const url = 'mongodb://0.0.0.0:27017'
const dbName = 'menu_item_db';

var app = express();

mongoClient.connect(url,( err,client)=>{
    if(err){
        console.log("error connecting to database : "+err);
    }
    else{
        console.log("Connected to database");
        const db = client.db(dbName);
        // db.createCollection("itemsList");
        console.log("Collection created");
        collection = db.collection('Made_Pizzas');
        collection2 = db.collection('itemsList');
    }
} );

app.use(cors());
app.use(express.json())

app.get('/getPizzas',(req,res)=>{
    collection.find().toArray((err,result)=>{
        if(err){console.log(err);}
        else{
            res.json(result);
        }
    });
});

app.get('/getIngredients',(req,res)=>{
    collection2.find().toArray((err,result)=>{
        if(err){console.log(err);}
        else{
            res.json(result);
        }
    });
});
app.listen(3000,()=>console.log("server is running "));