

function singlePlay(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('singlePlay').style.display = 'block';
}
// function twoPlay(){
//     document.getElementById('menu').style.display = 'none';
//     document.getElementById('twoPlay').style.display = 'block';   
// }

let user_win_counter = 0;
let ai_win_counter = 0;


function score() {
    document.getElementById('score').innerHTML = 'Your score '+user_win_counter+':'+ai_win_counter+' AI score';
}

function user_win() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('win').style.display = 'block';
    user_win_counter++;
    score();
}

function ai_win() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('lose').style.display = 'block';
    ai_win_counter++;
    score();
}

function draw() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('draw').style.display = 'block';
}

function restart() {

    document.getElementById('title').style.display = 'block';

    document.getElementById('win').style.display = 'none';

    document.getElementById('lose').style.display = 'none';

    document.getElementById('draw').style.display = 'none';

    document.getElementById('start').innerHTML = 'START';

    document.getElementById('turn').innerHTML = 'Your Turn';

    let radiobuttons = document.getElementsByName('choice');

    for (let i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = false;
    }
    
}

function start(){
    

    let button = document.getElementById('start')

    console.log(button.innerHTML)

    if (button.innerHTML=='START'){

        let ai_choice_num = Math.floor(Math.random()*3);
        let ai_choice;
    
        switch (ai_choice_num) {
            case 0:
                ai_choice = 'rock';
                break;
            case 1:
                ai_choice = 'paper';
                break;
            case 2:
                ai_choice = 'scissor';
                break;
            default:
                break;
        }
    
        let user_input_element = document.getElementsByName('choice');
        let user_input = '';
    
        for (let i = 0; i < user_input_element.length; i++) {
            if (user_input_element[i].checked) {
                user_input += user_input_element[i].value;
            }
        }
    
        console.log("user input: " + user_input);
        console.log("ai input: " + ai_choice);
        console.log("-------------------");
    
        document.getElementById('turn').innerHTML = 'Computer Chose : '+ai_choice;
        button.innerHTML = 'PLAY AGAIN';
    
        if (user_input=="rock" && ai_choice=="paper") {
            ai_win();
        } else if(user_input=="rock" && ai_choice=="scissor") {
            user_win();
        } else if(user_input=="scissor" && ai_choice=="paper") {
            user_win();
        } else if(user_input=="scissor" && ai_choice=="rock") {
            ai_win();
        } else if(user_input=="paper" && ai_choice=="rock") {
            user_win();
        } else if(user_input=="paper" && ai_choice=="scissor") {
            ai_win();
        } else if(user_input==ai_choice) {
            draw();
        } else {
            console.log("Something Went Wrong");
        }

    } else {
        restart();
    }

    
}

