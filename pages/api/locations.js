import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const search = req.query.search;

    let locations = [];

    if (search === null || search === undefined) {
        locations = await sql`
            SELECT * FROM locations
        `;
    }
    else {
        locations = await sql`
            SELECT * FROM locations
            WHERE title = ${search}
        `;
    }

    res.json(locations);
}