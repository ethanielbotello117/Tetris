let arr = `..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........
..........`;


// Creates Grid ---------------------------------------------
let grid = arr.split('\n')
for (row in grid) {
    grid[row] = grid[row].split("");
}

let a;
let b;
let c;
let d;

function tBlock() {
    a = 0;
    b = 1;
    c = 1;
    d = 1;

    grid[a][4] = "0";
    grid[b][3] = "0";
    grid[c][4] = "0";
    grid[d][5] = "0";

    let tPiece = setInterval(function () {
        a++;
        b++;
        c++;
        d++;
        if (a == 24 || b == 24 || c == 24 || d == 24) {
            clearInterval(tPiece)
        } else {
            grid[a][4] = "0";
            grid[b][3] = "0";
            grid[c][4] = "0";
            grid[d][5] = "0";

            grid[a - 1][4] = ".";
            grid[b - 1][3] = ".";
            grid[d - 1][5] = ".";
            console.table(grid);
        }
    }, 300)
};

function lBlock(){
    a = 0;
    b = 1;
    c = 2;
    d = 2;

    grid[a][4] = "0";
    grid[b][4] = "0";
    grid[c][4] = "0";
    grid[d][5] = "0";

    console.table(grid);

    let tPiece = setInterval(function () {
        a++;
        b++;
        c++;
        d++;
        if (a == 24 || b == 24 || c == 24 || d == 24) {
            clearInterval(tPiece)
        } else {
            grid[a][4] = "0";
            grid[b][4] = "0";
            grid[c][4] = "0";
            grid[d][5] = "0";

            grid[a - 1][4] = ".";
            grid[d - 1][5] = ".";
            console.table(grid);
        }
    }, 300)
}

function squareBlock(){
    a = 0;
    b = 0;
    c = 1;
    d = 1;

    grid[a][4] = "0";
    grid[b][5] = "0";
    grid[c][4] = "0";
    grid[d][5] = "0";

    console.table(grid);

    let tPiece = setInterval(function () {
        a++;
        b++;
        c++;
        d++;
        if (a == 24 || b == 24 || c == 24 || d == 24) {
            clearInterval(tPiece)
        } else {
            grid[a - 1][4] = ".";
            grid[b - 1][5] = ".";

            grid[a][4] = "0";
            grid[b][5] = "0";
            grid[c][4] = "0";
            grid[d][5] = "0";
            console.table(grid);
        }
    }, 300)
}

function sBlock(){
    a = 1;
    b = 1;
    c = 0;
    d = 0;

    grid[a][3] = "0";
    grid[b][4] = "0";
    grid[c][4] = "0";
    grid[d][5] = "0";

    console.table(grid);

    let tPiece = setInterval(function () {
        a++;
        b++;
        c++;
        d++;
        if (a == 24 || b == 24 || c == 24 || d == 24) {
            clearInterval(tPiece)
        } else {
            grid[a - 1][3] = ".";
            grid[c - 1][4] = ".";
            grid[d - 1][5] = ".";

            grid[a][3] = "0";
            grid[b][4] = "0";
            grid[c][4] = "0";
            grid[d][5] = "0";
            console.table(grid);
        }
    }, 100)
}

function zBlock(){
    a = 0;
    b = 0;
    c = 1;
    d = 1;

    grid[a][3] = "0";
    grid[b][4] = "0";
    grid[c][4] = "0";
    grid[d][5] = "0";

    console.table(grid);

    let tPiece = setInterval(function () {
        a++;
        b++;
        c++;
        d++;
        if (a == 24 || b == 24 || c == 24 || d == 24) {
            clearInterval(tPiece)
        } else {
            grid[a - 1][3] = ".";
            grid[b - 1][4] = ".";
            grid[d - 1][5] = ".";

            grid[a][3] = "0";
            grid[b][4] = "0";
            grid[c][4] = "0";
            grid[d][5] = "0";
            console.table(grid);
        }
    }, 100)
}

zBlock();