import Property from '../../../model/property'
import Connection from '../../../database/config';


export default async function handler(req, res) {
    await Connection();
    let category = req.query.category;
    let properties;
    try {
        if (category) {
            // Assuming your Property model has a `categories` field to filter by
            properties = await Property.find({ categories: category });
        } else {
            properties = await Property.find({});
        }
        return res.status(200).json(properties);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
