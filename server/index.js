import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";

import Connection from './database/db.js';
import Router from './routes/route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app= express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({extended:true}))
app.use('/',Router)
app.use('/blog-images', express.static(path.join(__dirname, 'blog-images')));
app.use('/property-images', express.static(path.join(__dirname, 'property-images')));

const PORT=8000;

app.listen(PORT,()=>{console.log('server is running on 8000')});

Connection();
