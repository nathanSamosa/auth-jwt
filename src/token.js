const { ConsoleReporter } = require('jasmine');
const jwt = require('jsonwebtoken');


//  Documentation: https://www.npmjs.com/package/jsonwebtoken

function createToken(payload, secret) {
    const token = jwt.sign(payload, secret);

    console.log("CREATETOKEN:", token)
    return token
}

function createTokenWithExpiry(payload, secret, time) {
    const token = jwt.sign(
        payload,
        secret,
        { expiresIn: time }
    )

    console.log("CREATETOKENWITHEXPIRY:", token)
    return token
}

function verifyToken(token, secret) {
    try {
        const decoded = jwt.verify(token, secret)
        console.log("VERIFY: ", decoded)
        return decoded

    } catch (err) {
        console.log("ERROR:", err)
        return false
    }
}

function createTokenQ4() {
    const token = jwt.sign(
        {
            "id": 153,
            "username": "sanchez",
            "email": "rick@sanchez.com",
            "role": "ADMIN"
        },
        "87764d1a-92dc-4ced-a758-9c898c31d525"
    )

    console.log("Q4 CREATETOKEN:", token)
    return token
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken,
    createTokenQ4
}
