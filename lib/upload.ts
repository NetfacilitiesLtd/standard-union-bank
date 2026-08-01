import { mkdir, writeFile } from "fs/promises";
import path from "path";

export async function saveUploadedFile(
  file: File,
  folder: "passports" | "government-ids"
) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    folder
  );

  await mkdir(uploadDir, {
    recursive: true,
  });

  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

  const filePath = path.join(uploadDir, fileName);

  await writeFile(filePath, buffer);

  return `/uploads/${folder}/${fileName}`;
}