import { RWG } from "../lib/RWG";

describe("Object Tesing", () => {
  test("Should create object", () => {
    let obj = new RWG();
    expect(obj).not.toBe(null);
  });
});

describe("Words with count", () => {
  test("Should return 0 Words even Negative count sent", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: -5 });
    expect(words.length).toBe(0);
  });
  test("Should return 0 Words", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 0 });
    expect(words.length).toBe(0);
  });
  test("Should return all Words", () => {
    let rwg = new RWG();
    let words = rwg.GetWords();
    expect(words.length).toBe(rwg.GetWordsCount());
  });
  test("Should return 10 Words", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 10 });
    expect(words.length).toBe(10);
  });
  test("Should return 0 Words With using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 0, mustContain: "he" });
    expect(words.every((e) => e.includes("he"))).toBe(true);
    expect(words.length).toBe(0);
  });
  test("Should return all Words with using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ mustContain: "ap" });
    expect(words.every((e) => e.includes("ap"))).toBe(true);
    expect(words.length).toBe(10502);
  });
  test("Should return 10 Words with using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 10, mustContain: "be" });
    expect(words.every((e) => e.includes("be"))).toBe(true);
    expect(words.length).toBe(10);
  });
});

describe("Words with Exact Length", () => {
  test("Should return all Words with length 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5 });
    expect(words.length).toBe(15920);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
  test("Should return 15 Words with length 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
  test("Should return all Words with length 5 with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, mustContain: "he" });
    expect(words.length).toBe(332);
    expect(words.every((w) => w.length === 5)).toBe(true);
    expect(words.every((e) => e.includes("he"))).toBe(true);
  });
  test("Should return 15 Words with length 5 with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, count: 15, mustContain: "be" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 5)).toBe(true);
    expect(words.every((e) => e.includes("be"))).toBe(true);
  });
});

describe("Words with Minimum Length", () => {
  test("Should return all Words with Minimum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5 });
    expect(words.length).toBe(360336);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
  test("Should return 15 Words with Minimum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
  test("Should return all Words with Minimum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, mustContain: "pe" });
    expect(words.length).toBe(16840);
    expect(words.every((w) => w.length >= 5)).toBe(true);
    expect(words.every((e) => e.includes("pe"))).toBe(true);
  });
  test("Should return 15 Words with Minimum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, count: 15, mustContain: "te" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 5)).toBe(true);
    expect(words.every((e) => e.includes("te"))).toBe(true);
  });
});

describe("Words with Maximum Length", () => {
  test("Should return all Words with Maximum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5 });
    expect(words.length).toBe(25690);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });

  test("Should return 15 Words with Maximum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });
  test("Should return all Words with Maximum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, mustContain: "re" });
    expect(words.length).toBe(996);
    expect(words.every((w) => w.length <= 5)).toBe(true);
    expect(words.every((e) => e.includes("re"))).toBe(true);
  });

  test("Should return 15 Words with Maximum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, count: 15, mustContain: "ge" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length <= 5)).toBe(true);
    expect(words.every((e) => e.includes("ge"))).toBe(true);
  });
});

describe("Words with Minimum and Maximum Length", () => {
  test("Should return all Words with Maximum 5 char and Minimum 3 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, minLength: 3 });
    expect(words.length).toBe(25236);
    expect(words.every((w) => w.length >= 3 && w.length <= 5)).toBe(true);
  });
  test("Should return 15 Words with Maximum 5 char and Minimum 3 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, minLength: 3, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 3 && w.length <= 5)).toBe(true);
  });
  test("Should return all Words with Maximum 7 char and Minimum 3 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 7, minLength: 3, mustContain: "ab" });
    expect(words.length).toBe(1612);
    expect(words.every((w) => w.length >= 3 && w.length <= 7)).toBe(true);
    expect(words.every((e) => e.includes("ab"))).toBe(true);
  });
  test("Should return 15 Words with Maximum 7 char and Minimum 3 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({
      maxLength: 7,
      minLength: 3,
      count: 15,
      mustContain: "mi",
    });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 3 && w.length <= 7)).toBe(true);
    expect(words.every((e) => e.includes("mi"))).toBe(true);
  });
});

describe("Words with Extra Length Priortize other Minimum and Maximum", () => {
  test("Should return 15 Words with Exact 7 chars regardless of Maximum 5 char and Minimum 3 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({
      maxLength: 5,
      minLength: 3,
      exactLength: 7,
      count: 15,
    });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 7)).toBe(true);
  });
  test("Should return 15 Words with Exact 7 chars regardless of Maximum 5 char and Minimum 3 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({
      maxLength: 5,
      minLength: 3,
      exactLength: 7,
      count: 15,
      mustContain: "fe",
    });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 7)).toBe(true);
  });
});

describe("Words with StartWith property", () => {
  test("Return all words starting with 'Aero'", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ startWith: "aero" });
    expect(words.length).toBe(232);
    expect(words.every((e) => e.startsWith("aero"))).toBe(true);
  });
  test("Return 70 words starting with 'Aero'", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ startWith: "aero", count: 70 });
    expect(words.length).toBe(70);
    expect(words.every((e) => e.startsWith("aero"))).toBe(true);
  });
  test("Return all words starting with 'Aero' with Exact length 6", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ startWith: "aero", exactLength: 6 });
    expect(words.length).toBe(3);
    expect(words.every((e) => e.startsWith("aero"))).toBe(true);
    expect(words.every((e) => e.length === 6)).toBe(true);
  });
  test("Return all words starting with 'Aero' MinLength 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ startWith: "aero", minLength: 5 });
    expect(words.length).toBe(231);
    expect(words.every((e) => e.startsWith("aero"))).toBe(true);
    expect(words.every((e) => e.length >= 5)).toBe(true);
  });
  test("Return all words starting with 'Aero' MaxLength 7", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ startWith: "aero", maxLength: 7 });
    expect(words.length).toBe(19);
    expect(words.every((e) => e.startsWith("aero"))).toBe(true);
    expect(words.every((e) => e.length <= 7)).toBe(true);
  });
});

describe("Words with EndWith property", () => {
  test("Return all words ending with 'tion'", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ endWith: "tion" });
    expect(words.length).toBe(7245);
    expect(words.every((e) => e.endsWith("tion"))).toBe(true);
  });
  test("Return 70 words starting with 'tion'", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ endWith: "tion", count: 70 });
    expect(words.length).toBe(70);
    expect(words.every((e) => e.endsWith("tion"))).toBe(true);
  });
  test("Return all words starting with 'tion' with Exact length 6", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ endWith: "tion", exactLength: 6 });
    expect(words.length).toBe(17);
    expect(words.every((e) => e.endsWith("tion"))).toBe(true);
    expect(words.every((e) => e.length === 6)).toBe(true);
  });
  test("Return all words starting with 'tion' MinLength 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ endWith: "tion", minLength: 5 });
    expect(words.length).toBe(7245);
    expect(words.every((e) => e.endsWith("tion"))).toBe(true);
    expect(words.every((e) => e.length >= 5)).toBe(true);
  });
  test("Return all words starting with 'tion' MaxLength 7", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ endWith: "tion", maxLength: 7 });
    expect(words.length).toBe(72);
    expect(words.every((e) => e.endsWith("tion"))).toBe(true);
    expect(words.every((e) => e.length <= 7)).toBe(true);
  });
});
