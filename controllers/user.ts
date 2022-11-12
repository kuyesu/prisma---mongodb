import prisma from '../prisma/index'
import cookieToken from '../utils/cookieToken'

 const signup = async (req: any, res: any) => {
    try {
        const { name, email, password } = req.body

        // check if there are no empty fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please fill all fields' })
        }

        // Check if user already exists
        const userExist = await prisma.user.findUnique({
            where: {
                email,
            },
        })
        if (userExist) {
            return res.status(400).json({
                error: 'User already exists',
            })
        }

        // check is password is at least 6 characters
        if (password.length < 6) {
            return res.status(400).json({
                error: 'Password must be at least 6 characters long',
            })
        }

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
            }
        })

        res.cookie('token', cookieToken(user.id), {
            httpOnly: true,
        })

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })
    }
    catch (error) {
        res.status(500).send('Server error')
    }
}

const allUsers = async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).send('Server error')
    }
}


export {
    signup,
    allUsers
}