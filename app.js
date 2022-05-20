function getClosests(str1, arr, restriction_output) {
    if (!restriction_output) {
        restriction_output = 5;
    }
    let ratingArrs = [];
    for (let i = 0; i < arr.length; i++) {
        ratingArrs.push(getOps(str1.toLowerCase(), arr[i].toLowerCase()));
    }

    let combinedArr = [];
    for (let i = 0; i < ratingArrs.length; i++) {
        combinedArr.push([arr[i], ratingArrs[i]]);
    }
    let sortedArray = combinedArr.sort(function (a, b) {
        return b[1] - a[1];
    });

    sortedArray = sortedArray.reverse();

    let singleArr = [];

    if (sortedArray.length >= restriction_output) {
        for (let i = 0; i < restriction_output; i++) {
            singleArr.push(sortedArray[i][0]);
        }
    } else {
        for (let i = 0; i < sortedArray.length; i++) {
            singleArr.push(sortedArray[i][0]);
        }
    }

    return singleArr;
}

function getOps(str1, str2) {
    const column = prepareList(str1, str2)[0];
    const row = prepareList(str1, str2)[1];

    let vals = [];

    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < column.length; j++) {
            if (vals[i]) {
                vals[i].push(j);
            } else {
                vals.push([j]);
            }
        }
    }

    for (let i = 0; i < vals.length; i++) {
        vals[i][0] = i;
    }

    for (let i = 0; i < vals.length; i++) {
        if (i > 0) {
            for (let j = 0; j < vals[i].length; j++) {
                if (j > 0) {
                    if (row[i] != column[j]) {
                        vals[i][j] = findMin(vals[i][j - 1], vals[i - 1][j - 1], vals[i - 1][j]) + 1;
                    } else {
                        vals[i][j] = vals[i - 1][j - 1];
                    }
                }
            }
        }
    }

    return getLast(vals);
}

function getLast(grid) {
    const numCols = grid.length;
    const numRows = grid[0].length;

    return grid[numCols - 1][numRows - 1];
}

function findMin(num1, num2, num3) {
    let arr = [num1, num2, num3];
    arr = arr.sort();

    return arr[0];
}

function prepareList(str1, str2) {
    let list1 = [];
    list1.push("");
    for (let i = 0; i < str1.split("").length; i++) {
        if (str1[i] != " ") {
            list1.push(str1[i]);
        }
    }

    let list2 = [];
    list2.push("");
    for (let i = 0; i < str2.split("").length; i++) {
        if (str2[i] != " ") {
            list2.push(str2[i]);
        }
    }

    if (list2.length > list1.length) {
        return [list2, list1];
    } else {
        return [list1, list2];
    }
}

module.exports.getClosests = getClosests;
