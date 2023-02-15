import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const messages = await sql`
        SELECT * FROM contact_messages
    `;

    res.json({ messages: messages });
}