let lastCol = document.querySelectorAll('.lastCol');
lastCol.forEach((b)=>{
    b.style.backgroundColor= '#EC9405';
})

let myButtons = document.querySelectorAll('button');
myButtons.forEach((btn)=>{
    btn.style.color = 'white';
    btn.style.fontSize = '17px';
    btn.style.fontWeight = 'bolder';

    if(!(btn.getAttribute('class'))){
        btn.style.backgroundColor= '#313131';
    }
});


let str = "";
let buttons = document.querySelectorAll("button");
let input = document.querySelector('input');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{

       
            if(e.target.innerHTML == '='){
                str = eval(str);
                input.value = str;
            }
            else if(e.target.innerHTML == 'AC'){
                input.classList.remove('red');
                str = "";
                input.value = str;

            }
            else{
                
            let value = e.target.innerHTML;
            str = str + value;
            input.value = str;
            }
        }
        catch(e){
            input.classList.add('red');
        }

    })
});
