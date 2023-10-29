"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const base = 5;
let content = "";
const heder = `
==========================
     Tabla del ${base}
==========================\n
`;
for (let i = 1; i <= 10; i++) {
    content += `${base} * ${i} = ${base * i}\n`;
}
const outputMessage = heder + content;
console.log(outputMessage);
const outputPath = "outputs";
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
