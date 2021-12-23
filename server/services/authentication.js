import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const accessTokenSecret = "bf3be84f-e8ab-43b1-8d14-7e6f42c78291";

// generates a jwt token with the username as payload
export const generateJWT = (user) => {
    return jwt.sign({ username: user.username }, accessTokenSecret);
}

// checks for the existence and validity of the jwt token
// continues with the request when authorized, returns an error, if not
export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, content) => {
            if (err) {
                return res.sendStatus(403);
            }
            // save the username from the token to the request object for later use
            req.username = content.username;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// generates a hash of the provided password for saving it to the database
export const generateHash = async (password) => {
    return await bcrypt.hash(password, 12);
}

// compares a password to the hash that is saved in the database
export const comparePassword = async (testString, hash) => {
    return await bcrypt.compare(testString, hash);
}
