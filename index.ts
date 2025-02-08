import { serve } from "bun";

import index from "./public/index.html";
import { getFile, getProjects } from "./src/api";
import { CardProject } from "./src/ui/CardProject";
import { UiProjects } from "./src/ui/UiProjects";

serve({
    static: {
        '/': index,
    },
    async fetch(req) {
        const { pathname } = new URL(req.url);
        if (pathname === "/api/projects") {
            const projects = await getProjects();
            return new Response(
                JSON.stringify(projects),
                {
                    headers: {
                        "Content-Type": "text/html",
                    },
                }
            );
        } else if (pathname === "/ui/projects") {
            const projects = await getProjects();
            return new Response(
                UiProjects(projects),
                {
                    headers: {
                        "Content-Type": "text/html",
                    },
                }
            );
        } else if (pathname === "/api/file") {
            const file = await getFile("11/model/baked_mesh_ao0.png");
            return new Response(file);  
        }
        return new Response("Hello via Bun!");
    }
});