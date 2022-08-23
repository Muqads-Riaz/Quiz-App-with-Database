
function startBtn(){
    window.location.href = "showQuestion.html"
}

function nextpage(){
    window.location.href = "login.html"
}
function addQuestion(){
    var password = document.getElementById("password");
    var adminName = document.getElementById("Admin Name");
    if(password.value == "123456" && adminName.value == "Admin"){
    window.location.href = "question.html"
    }else{
        alert("Incorrect Data")
    }
}
