// ---- 01 ---- //
const solution_1 = () => {
    // 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
    var nums = [100, 200, 300, 400, 500];
    nums.splice(3, 2);
    return nums;   
}

// ---- 02 ---- //
const solution_2 = () => {
    // <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
    var arr = [200, 100, 300];
    //pass
    arr.splice(2, 0, 10000);
    return arr;
}

// ---- 03 ---- //
const solution_3 = () => {
    /*
        다음 출력 값으로 올바른 것은?
        var arr = [100, 200, 300];
        console.log(typeof(arr));
        1)  undefined
        2)  string
        3)  number
        4)  object
    */
    
    return "4, object";
}

// ---- 04 ---- //
const solution_4 = () => { 
    /*
        다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

        1)  입력 : a =1,   출력 : number
        2)  입력 : a = 2.22,   출력 : boolean
        3)  입력 : a = 'p',   출력 : string
        4)  입력 : a = [1, 2, 3],   출력 : object
    */
    
    return "2, 입력 : a = 2.22,   출력 : boolean";
}

// ---- 05 ---- //
const solution_5 = () => { 
    /*
        다음 코드의 출력 값으로 알맞은 것은?
        var a = 10;
        var b = 2;

        for(var i=1; i<5; i+=2){
            a += i;
        }

        console.log(a+b);

        1)  10
        2)  12
        3)  14
        4)  16
    */
    
    
    return "4, 16";
}

// ---- 06 ---- //
const solution_6 = () => { 
    /*
        다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다. True를 찾아주세요.

        1)  NaN
        2)  1
        3)  ""
        4)  0
        5)  undefined
    */

    return "2, 1";
}

// ---- 07 ---- //
const solution_7 = () => { 
    /*
        다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
        1)  age
        2)  Age
        3)  let
        4)  _age
        5)  1age
    */
    return `3, let\n5, 1age`;

}

// ---- 08 ---- //
const solution_8 = () => {
    /*
        자바스크립트 객체를 다음과 같이 만들었다. 
        출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

        var d = {
            'height':180,
            'weight':78,
            'weight':84,
            'temperature':36,
            'eyesight':1
        };

        console.log(d['weight']);
    */
    
    return "84";
}

// ---- 09 ---- //
const solution_9 = () => {
    /**
        출력
        2019/04/26 11:34:27
    */
    var year = '2019';
    var month = '04';
    var day = '26';
    var hour = '11';
    var minute = '34';
    var second = '27';

    var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

    return result;
}

// ---- 10 ---- //
const solution_10 = () => { 
    /*
        jsx
        입력
        5

        출력
            *
           ***
          *****
         *******
        *********
    */
    
    let input = 5;
    const star = '*';

    const drawStar = (input) => {
        let result = '';
        for (let i = 0; i < input; i++) {
            for (let j = 0; j < input - i - 1; j++) {
                result += ' ';
            }
            for (let k = 0; k < i * 2 + 1; k++) {
                result += star;
            }
            result += '\n';
        }
        return result;
    }

    return drawStar(input);

}

// ---- 11 ---- //
const solution_11 = () => { 
    /*
    우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
    이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

    행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
    */
    const getPlanetName = (name) => {
        const planets = {
            '수성': 'Mercury', '금성': 'Venus', '지구': 'Earth', '화성': 'Mars',
            '목성': 'Jupiter', '토성': 'Saturn', '천왕성': 'Uranus', '해왕성': 'Neptune'
        }
        return planets[name];
    }
    let inputs = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

    return inputs.map(input => `${input} : ${getPlanetName(input)}`).join('\n');
    
}

// ---- 12 ---- //
const solution_12 = () => { 
    /*
        숫자가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성하시오.
        (숫자는 공백으로 구분하여 입력됩니다.)
    */
    
    const checkOrder = (input) => {
        input = input.split(' ').map(Number);
        let result = 'YES';
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                result = 'NO';
                break;
            }
        }
        return result;
    }

    let res = [];

    let inputs = ["176 156 155 165 166 169", "155 156 165 166 169 176"];
    inputs.forEach(input => res.push(`${input} : ${checkOrder(input)}`));
    return res.join('\n');
}   

// ---- 13 ---- //
const solution_13 = () => { 
    /*
        새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
        그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
        학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 
        출력하는 프로그램을 작성하기로 하였습니다.
    */
    
    const getWinner = (input) => {
        let votes = input.split(' ');
        let result = {};
        let winner = '';
        let max = 0;
        votes.forEach(vote => {
            result[vote] = result[vote] ? result[vote] + 1 : 1;
        });
        for (let key in result) {
            if (result[key] > max) {
                max = result[key];
                winner = key;
            }
        }

        return [winner, max];
    }
    let input = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
    let func_res = getWinner(input);

    let result = [func_res[0], '(이)가 총 ', func_res[1], '표로 반장이 되었습니다.'];

    return result.join('');
}

// ---- 14 ---- //
const solution_14 = () => { 
    /*
        2020년 1월 1일은 수요일입니다.
        2020년 a월 b일은 무슨 요일일까요?
        두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
        요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT입니다.

        예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

        제한 조건
        2020년은 윤년입니다.
        2020년 a월 b일은 실제로 있는 날입니다.
        (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
    */
    const getDayName = (a, b) => {
        let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let date = new Date(`2020-${a}-${b}`);
        let day = date.getDay();
        return days[day];
    }

    let inputs = [[5, 24], [1, 1], [2, 3], [3, 14], [9, 2], [12, 25]];
    let result = [];
    inputs.forEach(input => result.push(`${input[0]}월 ${input[1]}일 : ${getDayName(input[0], input[1])}`));
    return result.join('\n');
}  

// ---- 15 ---- //
const solution_15 = () => { 
    /*
        새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
        데이터에 입력된 이름을 아래와 같이 출력해 주세요.
    */
    let students = [
        '강은지', '김유정', '박현서', '최성훈',
        '홍유진', '박지호', '권윤일', '김채리',
        '한지호', '김진이', '김민호', '강채연'
    ];

    students.sort();
    let result = [];
    students.forEach((student, index) => {
        result.push(`번호: ${index + 1}, 이름: ${student}`);
    });

    return result.join('\n');

}

// ---- 16 ---- //
const solution_16 = () => { 
    /*
        금오공과대학교의 이태현 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
        딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

        교수님이 줄임말을 배우기 위해 위와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
        입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
    */
    
    let input = '복잡한 세상 편하게 살자';
    return input.split(' ').map(word => word[0]).join('');
}

// ---- 17 ---- //
const solution_17 = () => { 
    /*
        행렬 2개가 주어졌을 때, 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 
        그 결과를, 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
    */
    
    let a = [[1, 2], [2, 4]];
    let b = [[1, 0], [0, 3]];

    const isMultipliable = (a, b) => {
        let result = true;
        if (a[0].length !== b.length) {
            result = false;
        }
        return result;
    }

    const multiply = (a, b) => {
        let result = [];
        for (var i = 0; i < a.length; i++) {
            let result_row = [];
            for (var j = 0; j < b.length; j++) {
                let sum = 0;
                for (var k = 0; k < a[0].length; k++) {
                    sum += a[i][k] * b[k][j];
                }
                result_row.push(sum);
            }
            result.push(result_row);
        }
        return result;
    }

    let result = isMultipliable(a, b) ? multiply(a, b) : -1;
    return result;
}

// ---- 18 ---- //
const solution_18 = () => { 
    /*
        지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다.
        깃발의 위치를 입력받아 지뢰와 함께 출력해주는 프로그램을 만드세요.
    */
    
    let input = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";

    const getMineLocations = (input) => {
        let flag = [];
        let minesweeper = [];
        let count = 0;

        input.split('\n').forEach((row, index) => {
            let row_arr = [];
            row.split(' ').forEach((col, col_index) => {
                if (col === '1') {
                    flag.push([index, col_index]);
                    row_arr.push('f');
                }
                else {
                    row_arr.push(0);
                }
            });
            minesweeper.push(row_arr);
        });
        console.log(minesweeper, flag)

        flag.forEach((location) => {
            let [row, col] = location;
            for (var i = row - 1; i <= row + 1; i++) {
                if (i >= 0 && i < minesweeper.length && i !== row) {
                    minesweeper[i][col] = '*';
                }
            }
            for (var j = col - 1; j <= col + 1; j++) {
                if (j >= 0 && j < minesweeper[0].length && j !== col) {
                    minesweeper[row][j] = '*';
                }
            }
        });
        return minesweeper;
    }

    let minesweeper = getMineLocations(input);
    return minesweeper.map(row => row.join(' ')).join('\n');

}

// ---- 19 ---- //
const solution_19 = () => { 
    /*
        천하제일 먹기 대회가 개최되었습니다.
        이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다.

        1. 같은 이름의 선수는 없습니다.
        2. 접시의 수가 같은 경우는 없습니다.
    */
    
    let in_name = ["손오공 야모챠 메지터 비콜로", "홍길동 엄석대 연개소문 김첨지"];
    let in_dish = ["70 10 55 40", "2 1 10 0"];

    const getRank = (name, dish) => {
        let name_arr = name.split(' ');
        let dish_arr = dish.split(' ');
        let result = [];

        name_arr.forEach((name, index) => {
            result.push([name, dish_arr[index]]);
        });

        result.sort((a, b) => {
            return b[1] - a[1];
        });

        let res = {};
        result.forEach((item, index) => {
            res[item[0]] = index + 1;
        });

        return res;
    }

    let result = []
    in_name.forEach((name, index) => {
        result.push(getRank(name, in_dish[index]));
    });

    return result
}

// ---- 20 ---- //
const solution_20 = () => { 
    /*
        n명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
        각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다.
        거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.

        1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
        2. 택배는 물류창고에서 출발합니다.
        3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
        4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
        5. 택배를 상차할 때 시간은 걸리지 않습니다.

        입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.
    */
    
    const delivery_man = 3;
    const delivery_time = [1, 2, 1, 3, 3, 3];

    const solution = (n, l) => {
        let result = 0;
        let delivery_list = [];
        for (var i = 0; i < n; i++) {
            delivery_list.push(0);
        }
        l.forEach((time) => {
            delivery_list.sort((a, b) => a - b);
            delivery_list[0] += time;
        });
        delivery_list.sort((a, b) => a - b);
        result = delivery_list[n - 1];
        return result;
    }

    return solution(delivery_man, delivery_time);
}


const solution_list = [
    solution_1, solution_2, solution_3, solution_4, solution_5,
    solution_6, solution_7, solution_8, solution_9, solution_10,
    solution_11, solution_12, solution_13, solution_14, solution_15,
    solution_16, solution_17, solution_18, solution_19, solution_20
]

const main = () => {
    let index = 0;
    // let result = solution_list[index]();

    solution_list.forEach((solution, index) => {
        console.log(`---- problem ${index + 1} ----`);
        console.log(solution());
    });
    // console.log(result);
}

main();