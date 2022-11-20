import {RWG} from "../lib/RWG";

describe("Unit Testing",()=>{
    test("Should create object",()=>{
        let obj = new RWG();
        expect(obj).not.toBe(null);
    })
    test("Should return 5 Words",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords();
        expect(words.length).toBe(5);
    })
    test("Should return 10 Words",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({count:10});
        expect(words.length).toBe(10);
    })
    test("Should return 5 Words with length 5",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({exactLength:5});
        expect(words.length).toBe(5);
        expect(words.every(w=> w.length===5)).toBe(true);
    })
    test("Should return 15 Words with length 5",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({exactLength:5, count:15});
        expect(words.length).toBe(15);
        expect(words.every(w=> w.length===5)).toBe(true);
    })
    test("Should return 5 Words with Minimum 5 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({minLength:5});
        expect(words.length).toBe(5);
        expect(words.every(w=> w.length>=5)).toBe(true);
    })
    test("Should return 5 Words with Maximum 5 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({maxLength:5});
        expect(words.length).toBe(5);
        expect(words.every(w=> w.length<=5)).toBe(true);
    })
    test("Should return 15 Words with Minimum 5 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({minLength:5, count:15});
        expect(words.length).toBe(15);
        expect(words.every(w=> w.length>=5)).toBe(true);
    })
    test("Should return 15 Words with Maximum 5 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({maxLength:5, count:15});
        expect(words.length).toBe(15);
        expect(words.every(w=> w.length<=5)).toBe(true);
    })
    test("Should return 5 Words with Maximum 5 char and Minimum 3 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({maxLength:5, minLength:3});
        expect(words.length).toBe(5);
        expect(words.every(w=> w.length>=3 && w.length<=5)).toBe(true);
    })
    test("Should return 15 Words with Maximum 5 char and Minimum 3 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({maxLength:5, minLength:3,count:15});
        expect(words.length).toBe(15);
        expect(words.every(w=> w.length>=3 && w.length<=5)).toBe(true);
    })
    test("Should return 15 Words with Exact 7 chars regardless of Maximum 5 char and Minimum 3 char",()=>{
        let rwg = new RWG();
        let words = rwg.GetWords({maxLength:5, minLength:3, exactLength:7, count:15});
        expect(words.length).toBe(15);
        expect(words.every(w=> w.length===7)).toBe(true);
    })
    
})