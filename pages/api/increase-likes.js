import sql from "@/utils/postgres";

export default async function handler (req, res) {
    const id = req.query.id;
    const likes = req.query.likes;

    if(id === null || id === undefined){
        res.status(400).json({ message: "Book id is required"});
        return;
    }

    if(likes === null || likes === undefined){
        res.status(400).json({ message: "Likes is required"});
        return;
    }

    const projects = await sql`
        UPDATE projects
        SET likes = ${likes}
        WHERE id= ${id}
    `;

    res.json({ message:" Number of likes updated"});
}