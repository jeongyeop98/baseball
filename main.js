var list = [0,1,2,3,4,5,6,7,8,9];
var number = [];

for (var i = 0; i < 4; i++) {
    var select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0]
}

var count = 0;
var strike = 0;
var ball = 0;
while (count < 10) {
    var input = prompt('입력');
    console.log(input)
    var inputArray = input.split('');
    strike = 0;
    ball = 0;
    count++;

    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
            if (number[j] == inputArray[k]) {
                if (j === k) {
                    strike++;
                } else {
                    ball++;
                }
                break;
            }
        }
    }

    if (strike === 4) {
        console.log('win! ' + (count - 1) + '번 만에 맞춤!');
        break;
    } else if (count >= 10) {
        console.error('시도 횟수 초과')
        console.log(number)
    } else {
        console.info(count + ' : ' + inputArray.join('') + ': ' + strike + '스트라이크' + ball + '볼');
    }
}
