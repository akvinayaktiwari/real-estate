// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Connection from '../../database/config';
Connection();
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import Property from '../../model/property'


// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {
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


