let button=document.getElementById('reverseButton');
let result=document.getElementById('result');
button.addEventListener('click',function(){
    let input=document.getElementById('inputText').value.trim();
    if(input==""){
        result.innerHTML='لطفا در کادر بالا چیزی بنویسید'
    }else{
        let reverse=input.split('').reverse().join('');
        result.innerHTML=reverse;
    }
})