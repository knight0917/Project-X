

import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { 
                db_dob, db_time, db_sex, db_driver_no, db_conductor_no, db_super_no, db_plane, db_element, db_quality 
            } = req.body;

            // Check for required fields
            if (!db_dob || !db_time || !db_sex) {
                return res.status(400).json({ error: 'Date, Time, and Gender are required' });
            }

            // Insert data into the database
            await sql`
                INSERT INTO numerology (DOB, time, gender, driver_no, conductor_no, super_no, planes, element, driver_qualities)
                VALUES (${db_dob}, ${db_time}, ${db_sex}, ${db_driver_no}, ${db_conductor_no}, ${db_super_no}, ${db_plane}, ${db_element}, ${db_quality})
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
