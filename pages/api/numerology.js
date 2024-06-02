

import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { 
        dob, time, sex, driver_no, conductor_no, super_no, plane, element, qualities
      } = req.body;

      // Check for required fields
      if (!dob || !time || !sex) {
        return res.status(400).json({ error: 'Date, Time, and Gender are required' });
      }

      // Format date and time
      const formattedDob = new Date(dob).toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
      const formattedTime = time; // Assuming time is in a correct format already

      // Ensure all fields are properly formatted
      const formattedDriverNo = driver_no || null;
      const formattedConductorNo = conductor_no || null;
      const formattedSuperNo = super_no || null;
      const formattedElement = Array.isArray(element) ? element.join(', ') : element;
      const formattedQualities = qualities || '';

      console.log("Received data:", { formattedDob, formattedTime, sex, formattedDriverNo, formattedConductorNo, formattedSuperNo, plane, formattedElement, formattedQualities });

      // Insert data into the database
      await sql`
        INSERT INTO numerology (DOB, time, gender, driver_no, conductor_no, super_no, planes, element, driver_qualities)
        VALUES (${formattedDob}, ${formattedTime}, ${sex}, ${formattedDriverNo}, ${formattedConductorNo}, ${formattedSuperNo}, ${plane}, ${formattedElement}, ${formattedQualities})
      `;

      return res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
      console.error("Database insertion error:", error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
