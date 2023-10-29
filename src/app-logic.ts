import fs from "fs";
import { argv } from "./config/plugins/args.plugin";

const base = argv.b;
const limit = argv.l;
const show = argv.s;

let content = "";

const heder = `
==========================
     Tabla del ${base}
==========================\n
`;

const outputMessage = heder + content;
