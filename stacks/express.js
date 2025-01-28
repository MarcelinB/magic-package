const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

// Fonction principale pour configurer un projet Express
module.exports = async function setupExpress() {
  console.log(chalk.yellow("Initialisation d'un projet Express... 🚀"));

  const projectPath = process.cwd();

  // Étape 1 : Initialiser un package.json minimal
  console.log(chalk.blue("Création de package.json..."));
  execSync("npm init -y", { stdio: "inherit" });

  // Étape 2 : Installer les dépendances nécessaires
  console.log(chalk.blue("Installation des dépendances Express..."));
  execSync("npm install express", { stdio: "inherit" });

  // Étape 3 : Installer des dépendances optionnelles
  console.log(chalk.blue("Installation des dépendances facultatives..."));
  execSync("npm install cors dotenv", { stdio: "inherit" });

  // Étape 4 : Créer un fichier `index.js`
  console.log(chalk.blue("Création du fichier index.js..."));
  const indexContent = `
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(\`Serveur lancé sur http://localhost:\${PORT}\`);
});
  `;
  fs.writeFileSync(path.join(projectPath, "index.js"), indexContent.trim());

  // Étape 5 : Créer un fichier `.gitignore`
  console.log(chalk.blue("Création du fichier .gitignore..."));
  const gitignoreContent = `
# Node.js
node_modules/
.env
  `;
  fs.writeFileSync(path.join(projectPath, ".gitignore"), gitignoreContent.trim());

  // Étape 6 : Créer un fichier `.env`
  console.log(chalk.blue("Création du fichier .env..."));
  const envContent = `
PORT=3000
  `;
  fs.writeFileSync(path.join(projectPath, ".env"), envContent.trim());

  // Étape 7 : Créer un fichier `README.md`
  console.log(chalk.blue("Création du fichier README.md..."));
  const readmeContent = `
# Projet Express

Ce projet a été généré avec Magic package. 🚀

## Scripts disponibles

- \`npm start\` : Lance le serveur Express.

## Fichiers importants

- \`index.js\` : Point d'entrée principal.
- \`.env\` : Contient les variables d'environnement.
- \`.gitignore\` : Exclut les fichiers non suivis par Git.
  `;
  fs.writeFileSync(path.join(projectPath, "README.md"), readmeContent.trim());

  // Étape 8 : Ajouter un script "start" dans package.json
  console.log(chalk.blue("Ajout du script de démarrage..."));
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  packageJson.scripts = {
    ...packageJson.scripts,
    start: "node index.js",
  };
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(chalk.green("Le projet Express est prêt à l'emploi 🎉"));
};
