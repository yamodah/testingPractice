const averageScore = require("../src/main");
const expect = require("chai").expect;

describe("averageScore",()=>{
    it("should return the average score among all students",()=>{
        ////objects arrays values to be tested 
        const input = [
            { name: "Shane Carey", score: 9.5 },
            { name: "Rebecca Mills", score: 8.7 },
            { name: "Catarina Lima", score: 9.7 },
          ];
          // setting up valuees to test
          const expected = 9.3;
          const actual = averageScore(input);
          //actual test 
          expect(actual).to.equal(expected);
    })
})