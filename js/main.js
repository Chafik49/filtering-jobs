let theOption = document.querySelectorAll(".item");

let person = document.querySelectorAll(".person");


function addClasses(){
    let lgInfo = document.querySelectorAll(".lg-info");
lgInfo.forEach(e=>{
    
    var theLenght = e.children.length,
        theChild = e.children;

    for(let i=0 ; i<theLenght;i++){
        e.parentElement.classList.add(theChild[i].textContent);
    } 
})
}

addClasses();
theOption.forEach(element=>{
    element.children[1].addEventListener("click", ()=>{
        element.style.display="none";
        person.forEach(p=>{
            if(p.classList.contains(element.children[0].textContent)){
                p.style.display ="none";
            }

        })
        
    })
})

let clearAll = document.querySelector(".clear-all");

clearAll.onclick = ()=>{
    theOption.forEach(pe=>{
        pe.children[1].click();
    });
    


}