let obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 10;
        }
        if (hint === 'string') {
            return 'hello';
        }
        return undefined;
    }
}


console.log(obj == 10)