import type { Projects } from "../types";
import { CardProject } from "./CardProject";

export const UiProjects = (projects: Projects[]) => {
    return (`
        <html>
            <head>
                <title>Projects</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .card {
                        border: 1px solid #ccc;
                        padding: 10px;
                    }
                    .container {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                        gap: 10px;
                        padding: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Projects</h1>
                <div class="container">
                    ${projects.map((project) => CardProject({ project })).join("")}
                </div>
            </body>
        </html>
    `);
};