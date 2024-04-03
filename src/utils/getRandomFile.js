import { promises as fs } from "fs";
import path from "path";

/**
 * @param {string} fileDir The file directory path
 * @param {number} [limit=0] Limit the amount of files returned
 * @returns
 */
const getFiles = async (fileDir, limit = 0) => {
  try {
    let files = await fs.readdir(fileDir);

    if (limit && files.length && limit <= files.length)
    files = files.slice(0, limit);
    return files;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
};

export default getFiles;
