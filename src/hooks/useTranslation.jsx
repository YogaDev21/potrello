import { useState, useEffect, useMemo } from "react";
import { promises as fs } from "fs";
import dotenv from "dotenv";
dotenv.config();

// Import Utils
import {
    _getObjectPropertyUsingPathname,
} from "../utils/languageHandler";

const useTranslation = () => {
    const [lang, setLang] = useState(process.env.APP_LOCALE);
    
    const translationData = useMemo(async () => {
        let obj = {};
    
        const loadTranslation = async (lang) => {
            const basePath = "src/lang";
            
            try {
                let files = await fs.readdir(`${basePath}/${lang}`, 'utf-8');
                
                if(files) {
                    for(const file of files) {
                        const data = JSON.parse(await fs.readFile(`${basePath}/${lang}/${file}`, 'utf-8'))
                        if(data) {
                            obj[file.replace(/\.[a-z]+/g, "")] = data;
                        }
                    }
                }
            } catch (error) {
                console.error(`Error loading translation: ${error}`);
            }

            
    
            return obj;
        }
    
        return await loadTranslation(lang);
    }, []);

    return async function (propertyPath) {
        return _getObjectPropertyUsingPathname(propertyPath, await translationData);
    };
};

export default useTranslation;
