//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true;
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false;
      break;
    }
  }
  return allGood;
}

const countMatches = (searchStr, matchStr) => {
  const regex = new RegExp(`\\${matchStr}`, 'g');
  const matches = searchStr.match(regex);

  return matches.length;
};

//Test Suite
describe('js-day1-basic-assessment', function () {
  describe('Problem 1 - ', () => {
    it('`capatilizer` function should exist', () => {
      expect(capitalizer).toBeDefined();
    });

    it('`capatilizer` should be a function', () => {
      expect(typeof capitalizer).toBe('function');
    });

    it('`capatilizer` should return an array with all strings capitalized', () => {
      const input = ['hello', 'world'];
      const expectedOutput = ['HELLO', 'WORLD'];
      expect(capitalizer(input)).toEqual(expectedOutput);
    });

    it('`capatilizer` should return an empty array when given an empty array', () => {
      const input = [];
      const expectedOutput = [];
      expect(capitalizer(input)).toEqual(expectedOutput);
    });

    it('`capatilizer` should not modify the original array', () => {
      const input = ['hello', 'world'];
      const expectedOutput = ['HELLO', 'WORLD'];
      capitalizer(input);
      expect(input).toEqual(['hello', 'world']);
    });
  });
  describe('Problem 2 - ', () => {
    it('`everyOther` function should exist', () => {
      expect(capitalizer).toBeDefined();
    });

    it('`everyOther` should be a function', () => {
      expect(typeof capitalizer).toBe('function');
    });

    it('`everyOther` should return a new array with every other value', () => {
      const input = [1, 2, 3, 4, 5];
      const expectedOutput = [1, 3, 5];
      expect(everyOther(input)).toEqual(expectedOutput);
    });

    it('`everyOther` should return an empty array when given an empty array', () => {
      const input = [];
      const expectedOutput = [];
      expect(everyOther(input)).toEqual(expectedOutput);
    });

    it('`everyOther` should not modify the original array', () => {
      const input = [1, 2, 3, 4, 5];
      const expectedOutput = [1, 3, 5];
      everyOther(input);
      expect(input).toEqual([1, 2, 3, 4, 5]);
    });
  });
  describe('Problem 3 - ', () => {
    it("`nameExtractor` should return an array of names when given an array of objects with a 'name' key", () => {
      const input = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
      ];
      const expectedOutput = ['John', 'Jane', 'Bob'];
      expect(nameExtractor(input)).toEqual(expectedOutput);
    });

    it('`nameExtractor` should return an empty array when given an empty array', () => {
      const input = [];
      const expectedOutput = [];
      expect(nameExtractor(input)).toEqual(expectedOutput);
    });

    it("`nameExtractor` should return an empty array when given an array of objects without a 'name' key", () => {
      const input = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
        { id: 3, firstName: 'Bob', lastName: 'Smith' },
      ];
      const expectedOutput = [];
      expect(nameExtractor(input)).toEqual(expectedOutput);
    });
  });
  describe('brokenWhileLoop', () => {
    it('should return 10 when given 0', () => {
      const input = 0;
      const expectedOutput = 10;
      expect(brokenWhileLoop(input)).toEqual(expectedOutput);
    });

    it('should return 10 when given 9', () => {
      const input = 9;
      const expectedOutput = 10;
      expect(brokenWhileLoop(input)).toEqual(expectedOutput);
    });

    it('should return the input value when given 10', () => {
      const input = 10;
      const expectedOutput = 10;
      expect(brokenWhileLoop(input)).toEqual(expectedOutput);
    });
  });
  describe('rePete', () => {
    it('should return a string repeated n times', () => {
      const inputString = 'hello';
      const inputNumber = 3;
      const expectedOutput = 'hellohellohello';
      expect(rePete(inputString, inputNumber)).toEqual(expectedOutput);
    });

    it('should return an empty string when given an empty string', () => {
      const inputString = '';
      const inputNumber = 5;
      const expectedOutput = '';
      expect(rePete(inputString, inputNumber)).toEqual(expectedOutput);
    });

    it('should return an empty string when given a number less than or equal to 0', () => {
      const inputString = 'hello';
      const inputNumber = 0;
      const expectedOutput = '';
      expect(rePete(inputString, inputNumber)).toEqual(expectedOutput);
    });
  });
  describe('isEven', () => {
    it('should return true when given an even number', () => {
      const input = 4;
      const expectedOutput = true;
      expect(isEven(input)).toEqual(expectedOutput);
    });

    it('should return false when given an odd number', () => {
      const input = 3;
      const expectedOutput = false;
      expect(isEven(input)).toEqual(expectedOutput);
    });

    it('should return true when given 0', () => {
      const input = 0;
      const expectedOutput = true;
      expect(isEven(input)).toEqual(expectedOutput);
    });
    it('should use a ternary', () => {
      const source = nestedTernary.toString();
      const numOfTernaries = countMatches(source, '?');
      expect(numOfTernaries).toEqual(1);
    });
  });

  describe('nestedTernary', () => {
    it("should return 'positive' when given a positive number", () => {
      const input = 5;
      const expectedOutput = 'positive';
      expect(nestedTernary(input)).toEqual(expectedOutput);
    });

    it("should return 'negative' when given a negative number", () => {
      const input = -5;
      const expectedOutput = 'negative';
      expect(nestedTernary(input)).toEqual(expectedOutput);
    });

    it("should return 'zero' when given 0", () => {
      const input = 0;
      const expectedOutput = 'zero';
      expect(nestedTernary(input)).toEqual(expectedOutput);
    });
    it('should only have a single ternary', () => {
      const source = nestedTernary.toString();
      const numOfTernaries = countMatches(source, '?');
      expect(numOfTernaries).toEqual(1);
    });
  });
});
