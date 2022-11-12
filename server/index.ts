import express from 'express';
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Running app:: Listening at http://localhost:${port}`);
});