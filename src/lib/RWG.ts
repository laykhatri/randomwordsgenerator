interface iRWGOptions {
  count: NumberUndefined;
  minLength: NumberUndefined;
  maxLength: NumberUndefined;
  exactLength: NumberUndefined;
  mustContain: StringUndefined;
}

type NumberUndefined = number | undefined;
type StringUndefined = string | undefined;

class RWGOptions implements iRWGOptions {
  mustContain: StringUndefined = undefined;
  count: NumberUndefined = 5;
  minLength: NumberUndefined = 0;
  maxLength: NumberUndefined = 0;
  exactLength: NumberUndefined = 0;
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

  public GetWords(options: Partial<RWGOptions> = new RWGOptions()) {
    if (options.count === undefined) {
      options.count = 5;
    }
    if (options!.exactLength! > 0) {
      return this.GetLengthBased(
        options!.exactLength!,
        options!.exactLength!,
        options.count!,
        options!.mustContain === undefined ? "" : options.mustContain!
      );
    } else if (options!.maxLength! > 0 || options!.minLength! > 0) {
      return this.GetLengthBased(
        options!.minLength!,
        options!.maxLength!,
        options.count!,
        options!.mustContain === undefined ? "" : options.mustContain!
      );
    } else {
      return this.GetRandomWords(options.count!, options!.mustContain!);
    }
  }

  public GetWordsCount() {
    return this.wordListLength;
  }

  private GetRandomIndex = (length: number) => {
    return Math.round(Math.random() * length);
  };

  private GetRandomWords(count: number, mustContain: string) {
    let returnWords: string[] = [];
    let words: string[] = [];
    let wordsLength: number = 0;
    if (mustContain !== "") {
      words = this.wordList.filter((w) => w.includes(mustContain));
      wordsLength = words.length;
    }
    for (let i = 0; i < count; i++) {
      if (wordsLength > 0) {
        returnWords.push(words[this.GetRandomIndex(wordsLength)]);
      } else {
        returnWords.push(
          this.wordList[this.GetRandomIndex(this.wordListLength)]
        );
      }
    }
    return returnWords;
  }

  private GetLengthBased(
    min: number,
    max: number,
    count: number,
    mustContain: string
  ) {
    let returnWords: string[] = [];
    let lengthBasedList: string[] = this.wordList.filter(
      (f) =>
        (min > 0 ? f.length >= min : f.length > -1) &&
        (max > 0 ? f.length <= max : f.length > -1) &&
        (mustContain !== "" ? f.includes(mustContain) : f.includes(""))
    );
    const lengthBasedLength: number = lengthBasedList.length;
    for (let i = 0; i < count; i++) {
      returnWords.push(lengthBasedList[this.GetRandomIndex(lengthBasedLength)]);
    }
    return returnWords;
  }
}

export { RWG };
