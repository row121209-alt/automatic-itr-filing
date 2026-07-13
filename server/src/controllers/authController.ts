import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { prisma } from '../config/database'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_change_in_production'
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d'

const generateToken = (id: string, email: string) => {
  return jwt.sign({ id, email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  })
}

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, pan, aadhaar } = req.body

    // Validate input
    if (!name || !email || !password || !pan || !aadhaar) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered',
      })
    }

    // Check if PAN already exists
    const existingPan = await prisma.user.findUnique({
      where: { pan },
    })

    if (existingPan) {
      return res.status(409).json({
        success: false,
        message: 'PAN already registered',
      })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        pan,
        aadhaar,
      },
    })

    // Generate token
    const token = generateToken(user.id, user.email)

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        pan: user.pan,
        aadhaar: user.aadhaar,
      },
    })
  } catch (error) {
    console.error('Register error:', error)
    return res.status(500).json({
      success: false,
      message: 'Registration failed',
    })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      })
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    // Generate token
    const token = generateToken(user.id, user.email)

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        pan: user.pan,
        aadhaar: user.aadhaar,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({
      success: false,
      message: 'Login failed',
    })
  }
}

export const logout = async (req: Request, res: Response) => {
  try {
    return res.json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.error('Logout error:', error)
    return res.status(500).json({
      success: false,
      message: 'Logout failed',
    })
  }
}
