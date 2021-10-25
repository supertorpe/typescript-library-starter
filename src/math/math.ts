import * as Math from '@nexys/math-ts';

const cube = (num: number) : number => {
    return num * num * num;
};

const factorial = (num: number): number => {
    return Math.Utils.factorial(num);
};

export { cube, factorial }