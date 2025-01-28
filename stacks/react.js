import { execSync } from "child_process";
import chalk from "chalk";

export function setupDefaultReact(folderName) {
  console.log(chalk.yellow("Initialisation d'un projet React..."));

execSync(`npx create-react-app ${folderName} --template typescript`, { stdio: "inherit" });
execSync("npm install --save-dev prettier", {
    stdio: "inherit",
    cwd: folderName,
});
execSync(`echo {}> .prettierrc`, { stdio: "inherit", cwd: folderName });

  console.log(chalk.green("Projet React initialisé avec succès !"));
}