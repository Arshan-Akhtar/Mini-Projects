var main = document.getElementById("main");
  let arr=[ "https://i.pinimg.com/originals/3c/8a/d3/3c8ad373c849c1887edad32319445b44.jpg",
 
  "https://i.pinimg.com/originals/49/66/ef/4966efa02ae1e70e8dcf63991b2f64f7.jpg",
 
  "https://i.pinimg.com/originals/82/c0/80/82c0809b963b60d49228eddb36e58fd8.png"];
  let s ="";
  for(let i=1 ;i<=65;i++){
    let r =Math.floor( Math.random()*arr.length)
    s +=` <div class="card"><img src=${arr[r]}>
 </div>`;
  }
 main.innerHTML = s;

 