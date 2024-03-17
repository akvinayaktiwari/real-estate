import Property from '../../../model/property'
import Connection from '../../../database/config';

export default async function handler(req, res) {
    // Optional: Check if the method is GET
    if (req.method !== 'GET') {
        return res.status(405).json({ msg: 'Method Not Allowed' });
    }

    try {
        // Use req.query to access the URL parameters in Next.js
        const { id } = req.query;

        
        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        return res.status(200).json(property);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}