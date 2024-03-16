import Property from '../../../../model/property'
import Connection from '../../../../database/config';

export default async function handler(req, res) {
  // Connect to your database
  await Connection();

  // Ensure this route only responds to DELETE requests
  if (req.method === 'DELETE') {
    try {
      // Next.js uses `req.query` to access dynamic route parameters, not `req.params`
      const { id } = req.query;

      const property = await Property.findById(id);
      
      if (!property) {
        return res.status(404).json({ msg: 'Property not found' });
      }

      await Property.findByIdAndDelete(id);

      return res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // Respond with 405 Method Not Allowed if the request is not a DELETE
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}