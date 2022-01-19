import { News } from "./News";

export class Comments{
    private id: number;
    private content: string;
    private author: string;
    private date: Date;
    private news: News[];
}