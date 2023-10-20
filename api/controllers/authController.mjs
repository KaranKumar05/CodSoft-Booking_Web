import User from "../Schema/User.mjs"
import bcrypt from "bcryptjs"
import createError from "../utils/error.mjs"
import jwt from "jsonwebtoken"
import 'dotenv/config';

///----- Sign Up -----///
export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save()
        res.status(200).send({
            message: "Registration Successfully"
        });

    } catch (err) {
        next(err)
    }
}

///----- Login -----///
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, {
            message: "User not Found"
        }))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, {
            message: "Incorrect username or password"
        }))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY)
        const { password, isAdmin, ...otherDetails } = user._doc
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
            message: "Login Successfully",
            ...otherDetails
        });

    } catch (err) {
        next(err)
    }
}