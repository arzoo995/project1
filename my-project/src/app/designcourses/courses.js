import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Path to your JSON file
  const filePath = path.join(process.cwd(), "public", "data.json");

  try {
    // Read and parse the JSON file
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);

    // Send JSON response
    res.status(200).json({ success: true, courses: data["Sheet 1"] }); // "Sheet 1" is the key from your JSON
  } catch (error) {
    res.status(500).json({ success: false, message: "Error loading data" });
  }
}
