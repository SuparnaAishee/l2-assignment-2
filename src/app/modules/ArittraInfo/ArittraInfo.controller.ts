import { Request, Response } from 'express';
import { arittraValidationSchema } from './ArittraInfo.validation';
import { ArittraServices } from './ArittraInfo.services';


export const createArittra = async (req: Request, res: Response) => {
  try {
    const arittraData = arittraValidationSchema.parse(req.body);
    const newArittra = await ArittraServices.createArittra(arittraData);
    res.status(201).json({ success: true, data: newArittra });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ZodError') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errors = error.errors.map((err: any) => err.message).join(', ');
      return res.status(400).json({ error: errors });
    }
    res.status(500).json({ error: error.message });
  }
};

export const getAllArittras = async (_req: Request, res: Response) => {
  try {
    const arittras = await ArittraServices.getAllArittras();
    res.status(200).json({ success: true, data: arittras });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getArittraById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const arittra = await ArittraServices.getSingleArittra(id);
    if (!arittra) return res.status(404).json({ error: 'Arittra not found' });
    res.status(200).json({ success: true, data: arittra });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArittra = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = arittraValidationSchema.partial().parse(req.body);
    const updatedArittra = await ArittraServices.updateArittra(id, updateData);
    if (!updatedArittra)
      return res.status(404).json({ error: 'Arittra not found' });
    res.status(200).json({ success: true, data: updatedArittra });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === 'ZodError') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errors = error.errors.map((err: any) => err.message).join(', ');
      return res.status(400).json({ error: errors });
    }
    res.status(500).json({ error: error.message });
  }
};

export const deleteArittra = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedArittra = await ArittraServices.deleteArittra(id);
    if (!deletedArittra)
      return res.status(404).json({ error: 'Arittra not found' });
    res.status(200).json({ success: true, message: 'Deleted successfully' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
