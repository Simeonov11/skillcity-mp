import sql from "@/utils/postgres";

export default async function handler (req, res) {
    const id = req.query.id;
    const dislikes = req.query.dislikes;

    if(id === null || id === undefined){
        res.status(400).json({ message: "Book id is required"});
        return;
    }

    if(dislikes === null || dislikes === undefined){
        res.status(400).json({ message: "Dislikes is required"});
        return;
    }

    const projects = await sql`
        UPDATE projects
        SET dislikes = ${dislikes}
        WHERE id= ${id}
    `;

    res.json({ message:" Number of dislikes updated"});
}