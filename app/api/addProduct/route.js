import fs from "fs";
import path from "path";

export async function POST(req) {
    try {
        // 1️⃣ Read the request body
        const body = await req.json(); // e.g., { name, photo_url, description, price, rating }

        // 2️⃣ Get the file path
        const filePath = path.join(process.cwd(), "data", "products.json");

        // 3️⃣ Read existing data from file
        let products = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf-8");
            products = JSON.parse(fileData);
        }

        // 4️⃣ Add the new product
        products.push(body);

        // 5️⃣ Write back to the file
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

        return new Response(JSON.stringify({ message: "Product added successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to save product" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
