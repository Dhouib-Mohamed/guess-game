function Game(a,x) {
    for(j=0;j<a;j++){
    let t = parseInt(prompt(`This is Your ${j+1} th try`))
    if(t!=x){alert("Wrong Awnser")}
    else{alert("Yup That's the true awnser");break}
    if(j=a-1){
        alert(`The True Awnser is ${x} Too Bad Loser`)}
}
}
let x=0
while(true) {
    let a = parseInt(prompt("Donner le nombre de essaies"))
     x= parseInt(Math.random()*10)
    Game(a,x)
}