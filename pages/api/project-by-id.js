import sql from "@/utils/postgres";

export default async function SingleProjectHandler(req, res) {

    const id = req.query.id;
    console.log(id);

    const projectById = await sql`
        SELECT * from projects WHERE id=${id}
    `;

    res.json(projectById[0]);
}