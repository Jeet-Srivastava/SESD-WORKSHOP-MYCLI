# mycli

mycli is a versatile, TypeScript-based Command Line Interface (CLI) tool for performing quick mathematical operations and fetching fun, real-time data from various public APIs. It allows you to execute common math calculations directly from your terminal and retrieve useful information like Pokémon stats, weather details, GitHub profiles, and random jokes in a fast and colorful way.

Features include basic math operations such as addition, subtraction, multiplication, and division, power calculations, and generating random numbers within a given range. It also integrates with public APIs to fetch Pokémon information by name, get real-time weather using latitude and longitude coordinates, look up GitHub user profile statistics, and retrieve a random joke with setup and punchline.

Tech Stack: The project is built using TypeScript. Commander.js is used for building the CLI commands and handling arguments. Axios is used as the HTTP client for API requests. Chalk is used to provide colorful and styled terminal output.

Installation & Setup:
1. Clone the repository and navigate into the project directory.
2. Install dependencies using: npm install
3. Build the project and link the CLI globally using: npm run link
Note: The link script compiles the TypeScript source code into the dist folder and creates a global symlink, allowing you to use the `mycli` command from anywhere in your terminal.

Usage:
After linking, you can use the `mycli` command globally.

Math Commands:
- mycli add <a> <b>          Adds two numbers
- mycli sub <a> <b>          Subtracts second number from first
- mycli mul <a> <b>          Multiplies two numbers
- mycli div <a> <b>          Divides first number by second
- mycli pow <a> <b>          Raises a to the power of b
- mycli random <min> <max>   Generates a random number between min and max

Utility & API Commands:
- mycli pokemon <name>            Fetch Pokémon info (e.g., mycli pokemon pikachu)
- mycli weather <lat> <lon>       Get weather using coordinates (e.g., mycli weather 52.52 13.41)
- mycli github <username>         Fetch GitHub user profile stats
- mycli joke                      Get a random joke

Development Scripts:
- npm run dev     Runs the CLI in development mode using nodemon and ts-node with live reloading
- npm run build   Compiles TypeScript into JavaScript inside the dist directory
- npm run clean   Removes the compiled dist directory
- npm start       Executes the compiled JavaScript entry point directly

mycli is designed to be lightweight, developer-friendly, and easy to extend with additional commands and APIs in the future.