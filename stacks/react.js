import { execSync } from "child_process";
import chalk from "chalk";

export function setupDefaultReact() {
  console.log(chalk.yellow("Initialisation d'un projet React..."));

  execSync("npx create-react-app --template typescript", { stdio: "inherit" });
  execSync("npm install --save-dev prettier", {
    stdio: "inherit",
    cwd: "my-new-react-app",
  });
  execSync(`echo {}> .prettierrc`, { stdio: "inherit" });

  console.log(chalk.green("Projet React initialisé avec succès !"));
}
