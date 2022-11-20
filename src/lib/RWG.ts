interface iRWGOptions{
    count:NumberUndefined;
    minLength:NumberUndefined;
    maxLength: NumberUndefined ;
    exactLength: NumberUndefined ;
}

type NumberUndefined = number | undefined;

class RWGOptions implements iRWGOptions{
    count: NumberUndefined = 5;
    minLength: NumberUndefined = 0;
    maxLength: NumberUndefined = 0;
    exactLength: NumberUndefined = 0;
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

    public GetWords(options : Partial<RWGOptions>=new RWGOptions())
    {
        if(options.count === undefined || options.count < 1)
        {
            options.count = 5;
        }
        if(options!.exactLength! > 0)
        {
            return this.GetExactLengthWords(options!.exactLength!,options!.count!);
        }
        else if(options!.maxLength!>0 || options!.minLength! > 0)
        {
            return this.GetLengthBased(options!.minLength!,options!.maxLength!,options.count!);
        }

        return this.GetRandomWords(options.count!);
    }

    private GetRandomIndex = (length:number) => {
        return Math.round( Math.random() * length);
    }

    private GetRandomWords(count:number)
    {
        var returnWords: string[] = [];
        for(let i = 0;i<count;i++)
        {
            returnWords.push(this.wordList[this.GetRandomIndex(this.wordListLength)])
        }
        return returnWords;
    }

    private GetExactLengthWords(chars:number, count:number)
    {
        var returnWords: string[] = [];
        let exactLengthList = this.wordList.filter(w=> w.length == chars);
        const exactLength = exactLengthList.length;
        for(let i =0;i<count;i++)
        {
            returnWords.push(exactLengthList[this.GetRandomIndex(exactLength)]);
        }
        return returnWords;
    }

    private GetLengthBased(min:number, max:number, count:number)
    {
        let returnWords : string[] = [];
        let lengthBasedList : string[] = this.wordList.filter( f => (min > 0 ? f.length>=min : f.length > -1) && (max > 0 ? f.length<=max : f.length > -1));
        const lengthBasedLength : number = lengthBasedList.length;
        for(let i =0;i<count;i++)
        {
            returnWords.push(lengthBasedList[this.GetRandomIndex(lengthBasedLength)]);
        }
        return returnWords;
    }

}

export {RWG};