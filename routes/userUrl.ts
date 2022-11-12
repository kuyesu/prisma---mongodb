import express from 'express';
import { signup, allUsers } from "../controllers/user";

const router = express.Router();

router.route('/signup').post(signup);
router.route('/').get(allUsers)

export default router;
