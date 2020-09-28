import { Router } from 'express';
import TriangleController from '../controllers/triangleController';

export default () => {
    const app = Router();

    app.post("/parse", TriangleController.Parse);

    return app;
}