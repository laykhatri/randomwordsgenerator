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
  test("Should return 5 Words", () => {
    let rwg = new RWG();
    let words = rwg.GetWords();
    expect(words.length).toBe(5);
  });
  test("Should return 10 Words", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 10 });
    expect(words.length).toBe(10);
  });
  test("Should return 0 Words With using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 0, mustContain: "he" });
    expect(words.length).toBe(0);
  });
  test("Should return 5 Words with using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ mustContain: "ap" });
    expect(words.length).toBe(5);
  });
  test("Should return 10 Words with using mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ count: 10, mustContain: "be" });
    expect(words.length).toBe(10);
  });
});

describe("Words with Exact Length", () => {
  test("Should return 5 Words with length 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5 });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
  test("Should return 15 Words with length 5", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
  test("Should return 5 Words with length 5 with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, mustContain: "he" });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
  test("Should return 15 Words with length 5 with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ exactLength: 5, count: 15, mustContain: "be" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length === 5)).toBe(true);
  });
});

describe("Words with Minimum Lenght", () => {
  test("Should return 5 Words with Minimum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5 });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
  test("Should return 15 Words with Minimum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
  test("Should return 5 Words with Minimum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, mustContain: "pe" });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
  test("Should return 15 Words with Minimum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ minLength: 5, count: 15, mustContain: "te" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 5)).toBe(true);
  });
});

describe("Words with Maximum Length", () => {
  test("Should return 5 Words with Maximum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5 });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });

  test("Should return 15 Words with Maximum 5 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });
  test("Should return 5 Words with Maximum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, mustContain: "re" });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });

  test("Should return 15 Words with Maximum 5 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, count: 15, mustContain: "ge" });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length <= 5)).toBe(true);
  });
});

describe("Words with Minimum and Maximum Length", () => {
  test("Should return 5 Words with Maximum 5 char and Minimum 3 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, minLength: 3 });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length >= 3 && w.length <= 5)).toBe(true);
  });
  test("Should return 15 Words with Maximum 5 char and Minimum 3 char", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 5, minLength: 3, count: 15 });
    expect(words.length).toBe(15);
    expect(words.every((w) => w.length >= 3 && w.length <= 5)).toBe(true);
  });
  test("Should return 5 Words with Maximum 7 char and Minimum 3 char with mustContain", () => {
    let rwg = new RWG();
    let words = rwg.GetWords({ maxLength: 7, minLength: 3, mustContain: "ab" });
    expect(words.length).toBe(5);
    expect(words.every((w) => w.length >= 3 && w.length <= 7)).toBe(true);
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
