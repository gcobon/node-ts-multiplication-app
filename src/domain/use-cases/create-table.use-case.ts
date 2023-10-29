export interface CreateTableUseCase {
  execute: ({ base, limit }: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions): string {
    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} * ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}
