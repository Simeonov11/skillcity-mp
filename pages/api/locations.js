import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const locations = await sql`
        SELECT * FROM locations
    `;
    
    res.json(locations);
}