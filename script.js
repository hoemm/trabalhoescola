let questions = [
    {
    numb: 1,
    question: "Qual das frases abaixo está correta quanto ao uso dos porquês?",
    answer: "Eu não sei por que ele não veio à festa.",
    options: [
      "Gostaria de saber porque você não respondeu ao meu e-mail.",
      "Eu não sei por que ele não veio à festa.",
      "Não entendi o por quê de tanta confusão.",
      "Eles ficaram felizes porquê conseguiram um aumento."
    ]
  },
    {
    numb: 2,
    question: "Complete: Não entendi o motivo __________ ela se atrasou.",
    answer: "por que",
    options: [
      "porque",
      "por quê",
      "porquê",
      "por que"
    ]
  },
    {
    numb: 3,
    question: "Qual das frases abaixo está correta quanto ao uso dos porquês?",
    answer: "Gostaria de entender o porquê de tanta reclamação.",
    options: [
      "Gostaria de entender o porquê de tanta reclamação.",
      "Ela está aqui por que não tinha onde ir.",
      "Você sabe porque ela saiu mais cedo?",
      "Não sei porquê ele ficou chateado."
    ]
  },
    {
    numb: 4,
    question: "Qual das frases abaixo está correta quanto à concordância do verbo ser?",
    answer: "Os alunos foram o motivo do atraso.",
    options: [
      "As crianças era muito barulhentas durante a festa.",
      "Os alunos foram o motivo do atraso.",
      "A reunião foram longa e cansativa",
      "Aqueles momentos foi inesquecíveis."
    ]
  },
    {
    numb: 5,
    question: "Qual das frases abaixo está correta quanto à concordância do verbo ser?",
    answer: "Essas frutas são um ótimo lanche.",
    options: [
      "As provas foi muito difíceis este ano.",
      "Essas frutas são um ótimo lanche.",
      "Eles era os melhores jogadores do time.",
      "O problema foram os horários conflitantes."
    ]
  },
  
     {
    numb: 6,
    question: "Qual das frases abaixo está correta quanto à concordância do verbo ser?",
    answer: "O desafio é as provas finais.",
    options: [
      "As férias foi inesquecíveis para todos.",
      "O desafio é as provas finais.",
      "Este livro e aquele filme é interessantes.",
      "A causa das reclamações foram os atrasos constantes."
    ]
  },
    {
    numb: 7,
    question: "Qual das frases abaixo está correta quanto à concordância verbal com sujeito simples?",
    answer: "Cada um dos estudantes trouxe seu próprio material.",
    options: [
      "Cada um dos estudantes trouxe seu próprio material.",
      "O cachorro e o gato brinca no quintal todos os dias.",
      "As árvores no parque floresce na primavera.",
      "A professora, junto com os alunos, discutiram o projeto."
    ]
    },
    {
        numb: 8,
        question: "Qual das frases abaixo está correta quanto à concordância verbal com sujeito simples?",
        answer: "O livro de receitas está na cozinha.",
        options: [
          "O grupo de amigos decidiram fazer uma viagem.",
          "A maioria dos alunos entregaram a tarefa no prazo.",
          "As notícias sobre o evento chegou tarde.",
          "O livro de receitas está na cozinha."
        ]
    },
    {
        numb: 9,
        question: "Qual das frases abaixo está correta quanto à concordância verbal com sujeito simples?",
        answer: "A equipe de resgate chegou rapidamente ao local do acidente.",
        options: [
          "A equipe de resgate chegou rapidamente ao local do acidente.",
          "O time de futebol treinaram intensamente para o campeonato.",
          "As crianças do bairro brinca no parque todos os dias.",
          "O casal de vizinhos sempre discutem por motivos bobos."
        ]
    },
    {
        numb: 10,
        question: "Complete: A lista de tarefas __________ (incluir) várias atividades desafiadoras.",
        answer: "inclui",
        options: [
          "incluem",
          "incluí",
          "inclui",
          "incluíram"
        ]
    },
    {
        numb: 11,
        question: "Complete: O time de basquete __________ (vencer) o campeonato regional no último ano.",
        answer: "venceu",
        options: [
          "venceu",
          "vencerá",
          "venceram",
          "vence"
        ]
    },
    {
        numb: 12,
     question: "Complete: Os pássaros no jardim ________ (cantar) alegremente todas as manhãs.",
     answer: "cantam",
      options: [
      "cantava",
      "canta",
      "cantará",
      "cantam"
    ]
    }
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>e parabéns! 🎉, Você tem <p>'+ userScore +'</p> fora de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>e agradável 😎, Você tem <p>'+ userScore +'</p> fora de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>e desculpe 😐, Você tem apenas <p>'+ userScore +'</p> fora de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}