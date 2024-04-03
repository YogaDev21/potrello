import path from "path";
import { promises as fs } from "fs";
import { useMemo } from "react";

import dotenv from "dotenv";
dotenv.config();

const config = {
  lang: process.env.APP_LANG || "en",
  basePath: "src/lang",
  separator: ["."],
};

const _getObjectPropertyUsingPathname = (propertyPath, obj) => {
  const properties = propertyPath.split(".");
  let currentObj = obj;

  try {
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      if (property in currentObj) {
          currentObj = currentObj[property];
        } else {
            throw new Error("Property doesn't exist!");
        }
    }
    
    return currentObj;
  } catch (err) {}
};

const loadTranslation = async (lang) => {
  const basePath = config.basePath;
  let obj = {};

  try {
    let files = await fs.readdir(`${basePath}/${lang}`, "utf-8");

    if (files) {
      for (const file of files) {
        const data = JSON.parse(
          await fs.readFile(`${basePath}/${lang}/${file}`, "utf-8")
        );
        if (data) {
          obj[file.replace(/\.[a-z]+/g, "")] = data;
        }
      }
    }
    return obj;
  } catch (err) {
    console.error(err);
  }
};

export { _getObjectPropertyUsingPathname, loadTranslation };
