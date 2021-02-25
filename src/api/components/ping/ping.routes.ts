import { Router } from 'express';
import { ping, foo } from './ping.handler';

const router = Router();

router.get('/ping', ping);
router.post('/foo', foo);

export default router;
