import { postgres, s3 } from "bun";
import type { Projects } from "./types";

export const getProjects = async (): Promise<Projects[]> => {
    const projects = await postgres`select * from project order by created_at desc`;
    return projects;
};

export const getFile = async (key: string) => {
    const file = s3.file(`${key}`);
    return file;
};
