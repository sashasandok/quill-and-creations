import { Request, Response } from 'express'
import { User } from '../models'

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 64cc01fbb7f13b9a3fc4fa2e
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: john@example.com
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get list of all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successful response with list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 list:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to fetch users
 */
export const getUsersList = async (req: Request, res: Response) => {
  try {
    const list = await User.find({})
    res.status(200).json({ message: 'success', list })
  } catch (error: unknown) {
    const message = (error as Error).message
    console.error(`Failed fetching users list: ${message}`)
    res.status(500).json({ message })
  }
}
