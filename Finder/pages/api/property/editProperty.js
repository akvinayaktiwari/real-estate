import Property from '../../../model/property'
import Connection from '../../../database/config';

export default async function handler(req, res) {
    await Connection();
    if (req.method === "PUT" || req.method === "PATCH") {
        
        
        const id  = req.body._id;
        console.log(id);
        try {
            const property = await Property.findById(id);
            if (!property) {
                return res.status(404).json({ msg: 'Property not found' });
            }
            await Property.findByIdAndUpdate(id, { $set: req.body });
            return res.status(200).json({ msg: 'Property updated successfully' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    } else {
        // If the request is not PUT or PATCH, return a 405 Method Not Allowed
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}