import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argv = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limite de la multiplicación",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Mostrar la tabla en consola",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Nombre del archivo de salida",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "Destino del archivo",
  })
  .check((args, options) => {
    if (args.b < 1) throw "Error: La base debe ser mayor a 0";
    return true;
  })
  .parseSync();
