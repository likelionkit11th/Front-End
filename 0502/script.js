const accessDOM = () => {
    // access with TagName
    let h1s = document.getElementsByTagName("h1");
    console.log(h1s[1])
    h1s[1].innerHTML = "ㅎㅇㅎㅇ";

    // access with ClassName
    let my_paragraph = document.getElementsByClassName("my-paragraph");
    my_paragraph[0].style.color = 'red';

    // access with QuerySelector (tag)
    let h1_query = document.querySelector("h1");
    console.log(h1_query);

    // access with QuerySelector (class)
    let class_query = document.querySelector(".my-paragraph");
    console.log(class_query);

}

const eventControl = () => {
    // Form Event
    const myForm = document.getElementsByTagName("form")[0];
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let formData = new FormData(myForm);
        console.log(formData.get("username"));
    })

    // click event
    const myBtn = document.getElementsByClassName("btn")[0];
    myBtn.addEventListener("click", (event) => {
        console.log("clicked myBtn!");
    })

    // keypress event
    const myInput = document.getElementById("myInput");
    myInput.addEventListener("keypress", (event) => {
        console.log(`keyboard is pressed! ${event.key}`);
    })
}

const printResult = (result) => {
    console.log(`run result : ${result}`);
}

const mathOperation = (num1, num2, operation, callback) => {
    setTimeout(() => {
        let result;
        if (operation == "+") result = num1 + num2;
        else if (operation == "-") result = num1 - num2;
        else if (operation == "*") result = num1 * num2;
        else if (operation == "/") result = num1 / num2;
        
        callback(result);
    }, 2000)
}

// promise 예제
const doSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const RANDOM = Math.random();
            if (RANDOM < 0.5) resolve(RANDOM);
            else reject(new Error("failed to random value!"))
        }, 1000)
    });
}


// async/await 예제
const wait = (m) => {
    return new Promise(resolve => setTimeout(resolve, m));
}

const getData = async () => {
    console.log("start get data!");
    await wait(2000);
    console.log("process data!");
    
}

// promise, async/await 사용예제
const getuserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: "임유빈",
                age: 24,
                city : "경상북도 구미시"
            }
            resolve(user);
        }, 2000);
    })
}

const displayUserData = async () => {
    console.log("load user data");
    let userData = await getuserData();
    console.log(`loaded user data!`);
    console.log(`name : ${userData.name}`);
    console.log(`age  : ${userData.age}`);
    console.log(`city : ${userData.city}`);

}

window.onload = () => {
    // accessDOM()
    // eventControl();

    
    // mathOperation(10, 5, "+", printResult);
    // console.log("먼저 실행됨..");

    // doSomething()
    // .then((random) => {
    //     console.log(`random value is less than 0.5!, value is ${random}`);
    // })
    // .catch((err) => {
    //     console.error(err);
    // })
    // console.log("먼저 실행됨..");
    
    // getData()
    // console.log("먼저 실행됨..");

    displayUserData()
    // console.log("먼저 실행됨..");
}