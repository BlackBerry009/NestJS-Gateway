import { parse } from 'yaml';
import * as fs from 'fs'
import  * as path from 'path';
export const getEnv = () => process.env.ENV;

export const getConfig = () => {
    const env = getEnv();
    const ymlPath = path.join(process.cwd(), `/config/${env}.yml`);
    const file = fs.readFileSync(ymlPath, 'utf-8');
    const config = parse(file);
    return config;
}