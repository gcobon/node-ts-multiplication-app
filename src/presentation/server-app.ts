import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("server running...");

    const table = new CreateTable().execute({ base, limit });
    const wasCreatedFile = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    if (wasCreatedFile) {
      console.log("File created");
    }

    if (showTable) {
      console.log(table);
    }
  }
}
