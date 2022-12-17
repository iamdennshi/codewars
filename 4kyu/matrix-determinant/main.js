// Task - https://www.codewars.com/kata/52a382ee44408cea2500074c

function determinant(m) {
    if (m.length == 1) {
        return m[0][0];
    }
    else {
        let result = 0;
        for (let i = 0; i < m.length; i++) {
            let minor = [];
            for (let j = 1; j < m.length; j++) {
                minor.push(getRow(i, ...m[j]));
            } 
            result += (i % 2 == 0 ? 1 : -1) * m[0][i] * determinant(minor);
        }
        return result;
    }
};

function getRow(rowNumber, ...row) {
    if (rowNumber > row.length - 1) 
        throw new Error("rowNumber is much than the row length");
    row[rowNumber] = undefined;
    return row.filter((value) => {
        return value != undefined;
    })
};
console.log(determinant([[12,2,3,5],[4,5,6,5],[7,8,9,4],[1,2,3,4]]))