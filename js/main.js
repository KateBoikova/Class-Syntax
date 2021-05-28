'use strict';

// 1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для неограниченного числа аргументов.

class myArray {
  constructor() {
    if (!new.target) {
      return new myArray();
    }
    this.length = 0;
  }
  push(...items) {
    for (let i = 0; i < items.length; i++) {
      this[this.length++] = items[i];
    }
    return this.length;
  }
  unshift(...items) {
    this.length = this.length + items.length;
    for (let i = this.length - 1; i >= items.length; i--) {
      this[i] = this[i - items.length];
    }
    for (let i = items.length - 1; i >= 0; i--) {
      this[i] = items[i];
    }
    return this.length;
  }
}

const arr = new myArray;
arr.push(1, 2, 3);
console.log(arr);
arr.unshift(4, 5, 6, 7);
console.log(arr);


// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
  constructor(startingValue, endingValue) {
    this._from = startingValue;
    this._to = endingValue;
  }
  set from(startingValue) {
    if (typeof startingValue !== 'number') {
      throw new TypeError ('Starting value should be a number');
    }
    this._from = startingValue;
  }
  get from() {
    return this._from;
  }
  set to(endingValue) {
    if (typeof endingValue !== 'number') {
      throw new TypeError ('Ending value should be a number');
    }
    this._to = endingValue;
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(value) {
    if (typeof value !== 'number') {
      throw new TypeError ('This should be a number');
    }
    if (value < this._from || value > this._to) {
      throw new RangeError ('This number is out of the range');
    } 
    return `${value} is in the range`;
    
  }
}

const range1 = new RangeValidator(20, 100);
console.log(range1);
range1.from = 30;
range1.to = 110;
console.log(range1.from, range1.to, range1.range);
console.log(range1.validate(29));



