import { defineStore } from "pinia";
import CatppuccinJavascript from "~icons/catppuccin/javascript";
import CatppuccinJavascriptReact from "~icons/catppuccin/javascript-react";
import CatppuccinPython from "~icons/catppuccin/python";
import CatppuccinRazor from "~icons/catppuccin/razor";
import CatppuccinTailwind from "~icons/catppuccin/tailwind";
import CatppuccinTypescript from "~icons/catppuccin/typescript";
import CatppuccinTypescriptReact from "~icons/catppuccin/typescript-react";
import CatppuccinVue from "~icons/catppuccin/vue";
import VscodeIconsFileTypeMongo from "~icons/vscode-icons/file-type-mongo";
import VscodeIconsFileTypeNode from "~icons/vscode-icons/file-type-node";

interface IProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  objectId: string;
}

export const usePortifolioStore = defineStore("portfolio", {
  state: () => ({
    projects: [
      {
        title: "Meu portfólio",
        description: "Project description goes here",
        imageUrl: "https://placecats.com/neo/300/200",
        technologies: ["Reactts", "Node", "TypeScript", "Tailwindcss"],
        objectId: "sadasdasdsadsa",
      },
      {
        title: "Projeto 2",
        description: "Another project description",
        imageUrl: "https://placecats.com/millie_neo/300/200",
        technologies: ["Vue", "MongoDB", "JavaScript", "Python"],
        objectId: "sadasdagsdfffhsdsadsssdasa",
      },
    ] as IProjectProps[],

    filteredProjects: [] as IProjectProps[],

    selectedTechs: [] as string[],

    technologyIcons: {
      reactts: { icon: CatppuccinTypescriptReact, name: "React TS" },
      reactjs: { icon: CatppuccinJavascriptReact, name: "React JS" },
      vue: { icon: CatppuccinVue, name: "Vue" },
      node: { icon: VscodeIconsFileTypeNode, name: "Node" },
      typescript: { icon: CatppuccinTypescript, name: "TypeScript" },
      javascript: { icon: CatppuccinJavascript, name: "JavaScript" },
      tailwindcss: { icon: CatppuccinTailwind, name: "Tailwind CSS" },
      python: { icon: CatppuccinPython, name: "Python" },
      razor: { icon: CatppuccinRazor, name: "Razor Pages" },
      mongodb: { icon: VscodeIconsFileTypeMongo, name: "MongoDB" },
    },

    aboutMe: [
      {
        title: "Escolarização",
        color: "text-rose-400",
        items: ["Ensino Médio", "Faculdade"],
        text: `
 Olá 👋, me chamo Ana Beatriz tenho 19 anos, estou no 4° semestre Engenharia de Software no Instituto Infnet. Tenho habilidades em desenvolvimento web com React e TypeScript, Vue, Node e MongoDB e atualmente busco por uma oportunidade de estágio.

 ### Escolarização:
 * Ensino médio completo;
 * Graducação em Engenharia de Software (Em andamento, no 4° semestre)
        `,
      },
      {
        title: "Habilidades",
        color: "text-teal-400",
        items: [
          "React",
          "TypeScript",
          "NodeJS",
          "Python",
          "MongoDB",
          "Vue JS",
          "JavaScript",
          "Java",
          "C#",
          "Razor Pages",
        ],
        text: `
### HABILIDADES AVANÇADAS

* **React com TypeScript:** Criação de interfaces de usuário (UI) modernas, reativas, responsivas, mobile-first e componentizadas com código seguro e tipado.

* **JavaScript (ES6+):** Domínio da linguagem para lógica complexa no front-end e back-end, com foco em performance e boas práticas.

* **Node.js:** Desenvolvimento de APIs RESTful robustas, microserviços e aplicações back-end eficientes, utilizando Express.

* **Python:** Utilizo para o desenvolvimento de scripts para automação de tarefas, para otimização de processos e como ferramenta para analizar e manipular dados.

### CONHECIMENTOS ADICIONAIS

* **Front-End:** Vue.js.
* **Back-End e Geral:** Java, C#, Razor Pages.
* **Banco de Dados:** MongoDB.`,
      },
    ],
  }),

  actions: {
    /**
     * Returns an object with the technology icon, a name.
     *
     * @param {string} tech - the title of the technology
     * @returns a object with Icon and Name.
     */
    getIconFromTech(tech: string) {
      return this.technologyIcons[tech.toLowerCase()] || null;
    },

    /**
     *
     * Filter projects based on technologies.
     *
     * @param {string[]} techs - Technologies to filter the projects array
     */
    filterProjectsByTechnologies(techs: string[]) {
      if (techs.length === 0) {
        this.initializeProjects();
        this.selectedTechs = [];
        return;
      }

      this.selectedTechs = techs;

      const filteredProjects = this.projects.filter((project) =>
        project.technologies.some((projectTech) => techs.includes(projectTech)),
      );

      // Set the projects state
      this.filteredProjects = filteredProjects;
    },

    /**
     * Initialize filtered projects with the initial data.
     */
    initializeProjects() {
      this.filteredProjects = this.projects;
    },
  },

  getters: {
    /**
     * Returns all technologies used in projects.
     *
     * @returns the technologies used in `projects` without repetition.
     */
    getTechnologies() {
      const technologiesSet = new Set<string>();

      this.projects.forEach((element) => {
        element.technologies.forEach((tech) => {
          technologiesSet.add(tech);
        });
      });

      return Array.from(technologiesSet);
    },
  },
});
