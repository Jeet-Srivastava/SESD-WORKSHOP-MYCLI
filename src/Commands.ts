import { Command } from "commander";
import axios from "axios";
import chalk from "chalk";

export class Commands {

  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  registerAll() {
    this.add();
    this.sub();
    this.mul();
    this.div();
    this.power();
    this.random();
    this.pokemon();
    this.weather();
    this.github();
    this.joke();
  }

  add() {
    this.program
      .command("add <a> <b>")
      .description("Add two numbers")
      .action((a, b) => {

        const result = Number(a) + Number(b);
        console.log(chalk.green(`Result: ${result}`));

      });
  }

  sub() {
    this.program
      .command("sub <a> <b>")
      .description("Subtract numbers")
      .action((a, b) => {

        const result = Number(a) - Number(b);
        console.log(chalk.green(`Result: ${result}`));

      });
  }

  mul() {
    this.program
      .command("mul <a> <b>")
      .description("Multiply numbers")
      .action((a, b) => {

        const result = Number(a) * Number(b);
        console.log(chalk.green(`Result: ${result}`));

      });
  }

  div() {
    this.program
      .command("div <a> <b>")
      .description("Divide numbers")
      .action((a, b) => {

        const result = Number(a) / Number(b);
        console.log(chalk.green(`Result: ${result}`));

      });
  }

  power() {
    this.program
      .command("pow <a> <b>")
      .description("Power calculation")
      .action((a, b) => {

        const result = Math.pow(Number(a), Number(b));
        console.log(chalk.green(`Result: ${result}`));

      });
  }

  random() {
    this.program
      .command("random <min> <max>")
      .description("Generate random number")
      .action((min, max) => {

        const result =
          Math.floor(Math.random() * (Number(max) - Number(min) + 1)) +
          Number(min);

        console.log(chalk.green(`Random Number: ${result}`));

      });
  }

  pokemon() {
    this.program
      .command("pokemon <name>")
      .description("Get pokemon info")
      .action(async (name) => {

        try {

          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );

          const data = res.data;

          console.log(chalk.yellow("Pokemon Info"));
          console.log(chalk.cyan(`Name: ${data.name}`));
          console.log(chalk.cyan(`Height: ${data.height}`));
          console.log(chalk.cyan(`Weight: ${data.weight}`));

        } catch {
          console.log(chalk.red("Pokemon not found"));
        }

      });
  }

  weather() {
    this.program
      .command("weather <lat> <lon>")
      .description("Get weather info")
      .action(async (lat, lon) => {

        try {

          const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
          );

          const weather = res.data.current_weather;

          console.log(chalk.yellow("Weather"));
          console.log(chalk.cyan(`Temperature: ${weather.temperature}`));
          console.log(chalk.cyan(`Wind Speed: ${weather.windspeed}`));

        } catch {
          console.log(chalk.red("Weather fetch failed"));
        }

      });
  }

  github() {
    this.program
      .command("github <username>")
      .description("Github user info")
      .action(async (username) => {

        try {

          const res = await axios.get(
            `https://api.github.com/users/${username}`
          );

          const data = res.data;

          console.log(chalk.yellow("Github User"));
          console.log(chalk.cyan(`Name: ${data.name}`));
          console.log(chalk.cyan(`Repos: ${data.public_repos}`));
          console.log(chalk.cyan(`Followers: ${data.followers}`));

        } catch {
          console.log(chalk.red("Github user not found"));
        }

      });
  }

  joke() {
    this.program
      .command("joke")
      .description("Get random joke")
      .action(async () => {

        try {

          const res = await axios.get(
            "https://official-joke-api.appspot.com/random_joke"
          );

          const joke = res.data;

          console.log(chalk.yellow(joke.setup));
          console.log(chalk.green(joke.punchline));

        } catch {
          console.log(chalk.red("Could not fetch joke"));
        }

      });
  }

}