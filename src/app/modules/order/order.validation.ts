import * as z from 'zod';

// Define a Zod validation schema for the order model with custom error messages
const OrderValidateSchema = z.object({
  email: z.string().email().min(1, 'Invalid email format'),
  productId: z.string().min(1, 'Product ID is required'),
  name: z.string().optional(),
  price: z.number().positive().min(1, 'Price must be a positive number'),
  quantity: z
    .number()
    .int()
    .positive()
    .min(1, 'Quantity must be a positive integer'),
});



export default OrderValidateSchema;
