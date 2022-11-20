import {readFileSync} from "fs";

class RWG{

    private wordList: string[] = [];

    constructor()
    {
        const words = readFileSync( __dirname +"\\words.txt","utf-8");
        this.wordList = words.replaceAll("\r","").replaceAll("\n","").split(",");
    }
}

export {RWG};