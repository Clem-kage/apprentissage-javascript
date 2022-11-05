const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m



//selection 
let poids = document.querySelector('.kg')
let taille = document.querySelector('.cm')
let confirmation = document.querySelector('button')
let message  = document.querySelector('.annot p')
let princMessage  =  document.querySelector('.annot Span')
let application = document.querySelector('.app')
let kgValue = poids.value;
let cmValue = taille.value;

let result = (imc)=>{
  const rank = BMIData.find(data =>{
  if(imc>data.range[0] && imc<data.range[1] )return data
  else if(typeof data.range === "number" && imc > data.range) return data
  
  })
  message.textContent = `vous etes en ${rank.name} `
  princMessage.style.color = rank.color
  message.style.color = rank.color
  application.style.border = `${rank.color} solid 5px`
  princMessage.textContent = imc
}



let process = ()=>{
  let kgValue = parseInt(poids.value);
  let cmValue = parseInt(taille.value);

  let Imc  = (kgValue /Math.pow(cmValue/100, 2)).toFixed(1)

  if(!kgValue || !cmValue || kgValue < 0 || cmValue < 0){
      message.textContent = 'les imputs sont vides'
      setTimeout(()=>{
        window.location.reload(true);
      }, 2000)
  }
  else{
     result(Imc)
  }
}


confirmation.addEventListener('click', process)