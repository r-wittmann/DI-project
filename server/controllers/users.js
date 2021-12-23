import User from "../models/user.js";
import {comparePassword, generateHash, generateJWT} from "../services/authentication.js";

// accepts a username and password and creates a new user
// username is checked for uniqueness against the database
// when successful, an authentication token is generated and returned
export const signUp = async (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    const hash = await generateHash(password);
    const newUser = new User({ username, password: hash });

    try {
        await newUser.save();
        const token = generateJWT(newUser);
        res.status(201).json({ token });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// accepts a username and password and checks validity of information
// when successful, an authentication token is generated and returned
export const login = async (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    try {
        const user = await User.findOne({ username });
        if (user && await comparePassword(password, user.password)) {
            const token = generateJWT(user);
            res.status(200).json({ token });
        } else {
            throw new Error("Either username or password are incorrect.");
        }
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}
