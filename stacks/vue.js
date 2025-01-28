import { execSync } from "child_process";
import chalk from "chalk";

export function setupDefaultVue(projectName) {
  console.log(chalk.yellow("Initialyze VueJs project..."));

  execSync(`npm create vue ${projectName} "--" --default`, {
    stdio: "inherit",
  });

  console.log(chalk.green("VueJS Projet initialized with succes 🎉"));
}

setupDefaultVue("testok");
