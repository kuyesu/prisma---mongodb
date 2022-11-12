import express from 'express';
import cookieParser from "cookie-parser";
import userUrl from '../routes/userUrl';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/user', userUrl);

app.listen(port, () => {
    console.log(`Running app:: Listening at http://localhost:${port}`);
});