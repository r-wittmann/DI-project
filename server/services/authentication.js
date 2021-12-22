import jwt from "jsonwebtoken";

const accessTokenSecret = "bf3be84f-e8ab-43b1-8d14-7e6f42c78291";

// generates a jwt token with the username as payload
export const generateJWT = (user) => {
    return jwt.sign({ username: user.username }, accessTokenSecret);
}


