import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';


const app = express();
app.use('/students',studentRoutes);

app.use(bodyParser.json({limit: "20mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb",extended:true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://skillsbuilt:1234@cluster0.itsm9xn.mongodb.net/';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> app.listen(PORT,()=> 
    console.log('connectipn is es and runng port : `${PORT}`')
)).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false);
