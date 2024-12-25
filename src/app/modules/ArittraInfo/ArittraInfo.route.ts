import express from 'express';
import { createArittra, deleteArittra, getAllArittras, getArittraById, updateArittra } from './ArittraInfo.controller';

const router = express.Router();

router.post('/', createArittra);
router.get('/', getAllArittras);
router.get('/:id', getArittraById);
router.put('/:id', updateArittra);
router.delete('/:id', deleteArittra);

export const ArittraInfoRouters = router;
