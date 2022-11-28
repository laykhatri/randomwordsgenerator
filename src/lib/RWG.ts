interface iRWGOptions {
  count: NumberUndefined;
  minLength: NumberUndefined;
  maxLength: NumberUndefined;
  exactLength: NumberUndefined;
  mustContain: StringUndefined;
  startWith: StringUndefined;
  endWith: StringUndefined;
}

type NumberUndefined = number | undefined;
type StringUndefined = string | undefined;

class RWGOptions implements iRWGOptions {
  startWith: StringUndefined = undefined;
  endWith: StringUndefined = undefined;
  mustContain: StringUndefined = undefined;
  count: NumberUndefined = undefined;
  minLength: NumberUndefined = undefined;
  maxLength: NumberUndefined = undefined;
  exactLength: NumberUndefined = undefined;
}
class RWG {
  private wordList: string[] = [];
  private wordListLength: number = 0;

  constructor(words: string[] | undefined = undefined) {
    words === undefined ? this.ReadDataFromZip() : (this.wordList = words);
    this.InitBaseData();
  }

  private ReadDataFromZip() {
    var admZip = require("adm-zip");
    const content = new admZip(__dirname + "\\words.zip");
    const decompressedData = content
      .getEntries()[0]
      .getData()
      .toString("utf-8");
    this.wordList = decompressedData.split(",");
  }

  private InitBaseData() {
    this.wordListLength = this.wordList.length;
  }

  public GetWords(options: Partial<RWGOptions> = new RWGOptions()): string[] {
    let words = this.wordList.filter(
      (f) =>
        (options.mustContain === undefined
          ? f.includes("")
          : f.includes(options.mustContain)) &&
        (options.exactLength === undefined
          ? (options.minLength === undefined
              ? f.length >= -1
              : f.length >= options.minLength) &&
            (options.maxLength === undefined
              ? f.length >= -1
              : f.length <= options.maxLength)
          : f.length === options.exactLength) &&
        (options.startWith === undefined
          ? f.startsWith("")
          : f.startsWith(options.startWith)) &&
        (options.endWith === undefined
          ? f.endsWith("")
          : f.endsWith(options.endWith))
    );

    if (options.count === undefined) {
      return words;
    }

    let wordsLength: number = words.length;
    let returnWords: string[] = [];

    for (let i = 0; i < options.count; i++) {
      returnWords.push(words[this.GetRandomIndex(wordsLength)]);
    }

    return returnWords;
  }

  public GetWordsCount() {
    return this.wordListLength;
  }

  private GetRandomIndex = (length: number) => {
    return Math.round(Math.random() * length);
  };
}

export { RWG };
