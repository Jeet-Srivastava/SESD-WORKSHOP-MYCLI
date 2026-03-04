import { Command } from "commander";
import { Commands } from "./Commands";

export class CommandManager {

  private program: Command;
  private commands: Commands;

  constructor() {
    this.program = new Command();
    this.commands = new Commands(this.program);
  }

  start() {

    this.program
      .name("mycli")
      .description("My CLI Tool built with TypeScript")
      .version("1.0.0");

    this.commands.registerAll();

    this.program.parse(process.argv);
  }

}