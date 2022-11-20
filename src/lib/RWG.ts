interface iRWGOptions{
    count:number;
}

class RWGOptions implements iRWGOptions{
    count: number = 5;
}
class RWG{

    private wordList: string[] = [];
    private wordListLength: number=0;

    constructor()
    {
       this.ReadDataFromZip();
       this.InitBaseData();
    }

    private ReadDataFromZip()
    {
        var admZip = require("adm-zip");
        const content = new admZip(__dirname +"\\words.zip");
        const decompressedData = content.getEntries()[0].getData().toString("utf-8");
        this.wordList = decompressedData.split(",");
    }

    private InitBaseData()
    {
        this.wordListLength = this.wordList.length;
    }

    public GetWords(options:RWGOptions = new RWGOptions())
    {
        var returnWords: string[] = [];
        for(let i = 0;i<options.count;i++)
        {
            returnWords.push(this.wordList[this.GetRandomIndex()])
        }
        return returnWords;
    }

    GetRandomIndex = () => {
        return Math.round( Math.random() * this.wordListLength);
    }

}

export {RWG};