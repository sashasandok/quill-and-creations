import mongoose, { CallbackError } from 'mongoose'
import bcrypt from 'bcryptjs'

interface IUser extends Document {
  username: string
  email: string
  password: string
  role: 'user' | 'admin' | 'moderator'
  status: 'active' | 'inactive' | 'suspended'
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date

  // Method signatures
  comparePassword(candidatePassword: string): Promise<boolean>
  updateLastLogin(): Promise<IUser>
}

// User Schema
const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active',
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error: unknown) {
    next(error as CallbackError | undefined)
  }
})

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password)
}

// Method to update last login
userSchema.methods.updateLastLogin = async function () {
  this.lastLogin = new Date()
  return await this.save()
}

export const User = mongoose.model('User', userSchema)
