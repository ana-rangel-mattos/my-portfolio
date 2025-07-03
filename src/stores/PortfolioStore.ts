import { defineStore } from "pinia";
import { RiNodejsFill, RiReactjsFill, RiVuejsFill } from "vue-remix-icons";

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
        title: "Projeto 1",
        description: "Project description goes here",
        imageUrl: "https://placecats.com/neo/300/200",
        technologies: ["React", "Node"],
        objectId: "sadasdasdsadsa",
      },
      {
        title: "Projeto 2",
        description: "Another project description",
        imageUrl: "https://placecats.com/millie_neo/300/200",
        technologies: ["Vue"],
        objectId: "sadasdagsdfffhsdsadsssdasa",
      },
    ] as IProjectProps[],

    filteredProjects: [] as IProjectProps[],

    technologyIcons: {
      React: { icon: RiReactjsFill, bgColor: "bg-indigo-300", name: "React" },
      Vue: { icon: RiVuejsFill, bgColor: "bg-teal-300", name: "Vue" },
      Node: { icon: RiNodejsFill, bgColor: "bg-green-300", name: "Node" },
    },
  }),

  actions: {
    /**
     * Returns an object with the technology icon, name and a background color.
     *
     * @param {string} tech - the title of the technology
     * @returns a object with Icon, Name and Background Color.
     */
    getIconFromTech(tech: string) {
      return this.technologyIcons[tech] || null;
    },

    /**
     *
     * Filter projects based on technologies.
     *
     * @param {string[]} techs - Technologies to filter the projects array
     */
    filterProjectsByTechnologies(techs: string[]) {
      // Filter projects by the received techs array
      // The filter should be inclusive, all projects with these technologies.

      if (techs.length === 0) {
        this.initializeProjects();
        return;
      }

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
