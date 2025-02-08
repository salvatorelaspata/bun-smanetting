// create card component

import type { Projects } from "../types";

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};



// not working
// type Status = "in queue" | "done" | "error";
// const iconStatus = (status: Status) => {
//     return status === "in queue" ? "⏳" : status === "done" ? "✅" : "❌";
// };

const colorStatus = (status: string) => {
    return status === "in queue" ? "blue" : status === "done" ? "#008000" : "red";
};

export const CardProject = ({ project }: { project: Projects }) => {
    return (`
        <div class="card">
            <h2>${project.name.slice(0, 12)}${project.name.length > 12 ? "..." : ""}</h2>
            <p>${project.description.slice(0, 20)}${project.description.length > 20 ? "..." : ""}</p>
            <p style="color: ${colorStatus(project.status)}">${project.status}</p>
            <p>${formatDate(project.created_at)}</p>
        </div>
        `
    );
};