export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(t:string, l:string, v:number){
        this.title = t;
        this.link = l;
        this.votes = v || 0;
    }

    voteUp(): boolean{
        this.votes += 1;
        return false;
    }

    voteDown(): boolean{
        this.votes -= 1;
        return false;
    }
}
