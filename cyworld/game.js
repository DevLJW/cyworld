

const startWord = () => {

    let myWord = document.getElementById("myword").value //내가 입력한글자
    let word  =  document.getElementById("word").innerText //제시어 글자
    //렝스는 1부터 시작/ 인덱스는 0부터시작
    let lastword = word[word.length-1] //마지막 글자
    let firstword = myWord[0]          // 첫번쨰 글자
   
    if(lastword === firstword){
    document.getElementById("result").innerText = "정답 입니다."
    document.getElementById("word").innerText = myWord
    document.getElementById("myword").value = ""
    }
    
    else{

        document.getElementById("result").innerText = "땡"
        document.getElementById("myword").innerText = ""

    }


}