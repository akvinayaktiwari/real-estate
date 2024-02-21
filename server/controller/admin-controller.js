
import jwt from 'jsonwebtoken';


import Admin from '../model/admin.js'
import Token from '../model/token.js'



export const signinAdmin = async (request, response) => {
    let admin = await Admin.findOne({ email: request.body.email });
    if (!admin) {
        return response.status(400).json({ msg: 'Email does not match' });
    }

    try {
        let match = await request.body.password==admin.password;
        if (match) {
            const accessToken = jwt.sign(admin.toJSON(), "84834fjnjsnfjnsg", { expiresIn: '15m'});
            const refreshToken = jwt.sign(admin.toJSON(), "99224fjnjsnfjnsg");
            
            const newToken = new Token({ token: refreshToken });
            await newToken.save();
        
            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, email: admin.username });
        
        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the admin' })
    }
}