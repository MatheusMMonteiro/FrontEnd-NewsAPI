import { News } from "./News";

export class Comments{
    public id: number;
    public content: string;
    public author: string;
    public date: Date;
    public news: News;
}