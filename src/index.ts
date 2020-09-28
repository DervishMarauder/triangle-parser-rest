import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

// Enabled cors
app.use(cors());

// Enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// Enable routes
app.use("/", routes());

// Enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Start application 
const port = process.env.PORT || 3001;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);