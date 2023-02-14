import sql from "@/utils/postgres";

export default async function handle(req, res) {
    const { name, email, message } = req.query;

    const response = await sql`
        INSERT INTO contact_messages
            (name, email, message)
        VALUES
            (${name}, ${email}, ${message});
    `;

    res.json({ message: "Success"});
}