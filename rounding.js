//test

//生成一个 环绕的矩阵
function hehe(num) {
    var oneArr = [];
    var x = 0;
    var y = 0;

    for (var i = 0; i < num; i++) {
        var twoArr = Array(num).fill('');
        oneArr.push(twoArr);
    }

    for (var j = 1; j < num * num + 1; j++) {
        if (j == 1) {
            oneArr[x][y] = j;
            console.log('x:' + x + '  y:' + y)
            console.log(j)
            continue;
        }
        if (oneArr[x][y + 1] == '') {
            if (oneArr[x - 1] && oneArr[x - 1][y] == '') {
                x--;
            } else {
                y++;
            }
        } else if (oneArr[x + 1] && oneArr[x + 1][y] == '') {
            x++;
        } else if (oneArr[x][y - 1] == '') {
            y--;
        } else if (oneArr[x - 1][y] == '') {
            x--;
        }
        //console.log('x:' + x + '  y:' + y)
        //console.log(j)
        oneArr[x][y] = j;

    }
    for (var k = 0; k < num; k++) {
        console.log(oneArr[k].toString());
    }
}

hehe(3)
