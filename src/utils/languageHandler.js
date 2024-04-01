import path from 'path';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const config = {
    lang: process.env.APP_LANG || "en",
    basePath: "../src/lang",
    separator: ["."]
}

/**
 * 
 * @param {string} property Properties that are found within the lang folder
 */
const __ = async (property) => {
    if(/\.+/g.test(property)) throw new Error("You must follow the format: filename.property");
    let components = property.split(/\./);
    const [filename, properties] = [components.shift(), components.join(".")]
    
    let file = await fs.readFile(config.basePath, 'utf-8');

    if(file) {

    }


}   

export default __;