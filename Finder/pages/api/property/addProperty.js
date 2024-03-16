
import Connection from '../../../database/config';
import Property from '../../../model/property'

export default async function handler(req, res) {
  // Connect to database
  await Connection();
  console.log('hello add property')

  
  if (req.method === 'POST') {
    try {
      const property = await new Property(req.body);
      await property.save(); 
      return res.status(200).json({ message: 'Property saved successfully...' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}