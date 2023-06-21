document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.site-nav').classList.toggle('site-nav--open');
    this.classList.toggle('open');
  });
  



  let index = 1;
let sentences = ["Homes!","Cars!","Catering!"];
let sentIndex = 0;




function nextStep(){
    let input = document.getElementById("inputID");
    let val = input.getAttribute("placeholder") || "";
    val = sentences[sentIndex].substring(0,val.length+index);
    if(val.length===sentences[sentIndex].length)index=-1;
    if(val.length===0){
      index=1;
      sentIndex = (sentIndex+1)%sentences.length;
    }
    input.setAttribute("placeholder",val);
}

window.setInterval(nextStep,400);


//