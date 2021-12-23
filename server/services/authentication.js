import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const accessTokenSecret = "bf3be84f-e8ab-43b1-8d14-7e6f42c78291";

// generates a jwt token with the username as payload
export const generateJWT = (user) => {
    return jwt.sign({ username: user.username }, accessTokenSecret);
}

// generates a hash of the provided password for saving it to the database
export const generateHash = async (password) => {
    return await bcrypt.hash(password, 12);
}

// compares a password to the hash that is saved in the database
export const comparePassword = async (testString, hash) => {
    return await bcrypt.compare(testString, hash);
}
