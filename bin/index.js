#!/usr/bin/env node

import { intro, isCancel, outro, select, text, tasks } from "@clack/prompts";
import { setupDefaultVue } from "../stacks/vue.js";
import { setupDefaultReact } from "../stacks/react.js";
import { setupExpress } from "../stacks/express.js";

intro(`Bienvenue dans Stack Starter CLI 🚀`);

const folderName = await text({
  message: "Name of the folder",
  placeholder: "Magic project",
  validate(value) {
    if (value.length === 0) return `Value is required!`;
  },
});

const projectType = await select({
  message: "Pick a project type.",
  options: [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "next", label: "Next.js" },
    { value: "express", label: "Express.js" },
  ],
});

if (isCancel(projectType)) {
  outro(`Okay, let's get out of here.`);

  process.exit(0);
}

await tasks([
  {
    title: "Installing via npm",
    task: async (message) => {
      // Do installation here

      switch (projectType) {
        case "react":
          setupDefaultReact(folderName);
          break;
        case "vue":
          setupDefaultVue(folderName);
          break;
        case "next":
          break;
        case "express":
            setupExpress(folderName);
          break;
      }

      return "Installed via npm";
    },
  },
]);

// Do stuff
outro(`You're all set!`);
