function computer() {
   const comp = Math.random();
   if (comp < 0.34) return 'batu';
   if (comp >= 0.34 && comp < 0.65) return 'gunting'
   return 'kertas'
}

function rules(komputer, player) {
   if (player == komputer) return 'SERI'
   if (player == 'batu') return (komputer == 'gunting')? 'MENANG' : 'KALAH'
   if (player == 'gunting') return (komputer == 'kertas')? 'MENANG' : 'KALAH'
   if (player == 'kertas') return (komputer == 'batu')? 'MENANG' : 'KALAH'
}

function spin() {
   const gambarKomputer = document.querySelector('.img-komputer');
   const gambar = ['batu', 'gunting', 'kertas'];
   let i = 0;
   const waktuMulai = new Date().getTime();
   setInterval(() => {
      if (new Date().getTime() - waktuMulai > 2250){
         clearInterval;
      return;
      }
      gambarKomputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg')
      if (i == gambar.length) i = 0;
   }, 100)
}



const audio = document.querySelector('.sound')
function playAudio() {
   audio.play()
}


// // cara pertama
// const pilihanBatu = document.querySelector('.batu')
// pilihanBatu.addEventListener('click', () => {
//    const komputer = computer()
//    const player = pilihanBatu.className;
//    const hasil = rules(komputer, player)
   
//    const info = document.querySelector('.info')
//    info.innerHTML = hasil

//    const gambarComputer = document.querySelector('.img-komputer')
//    gambarComputer.setAttribute('src', 'img/' + komputer + '.jpg')
// })

// cara kedua
const list = document.querySelectorAll('li img')
list.forEach((e) => {
   e.addEventListener('click', () => {
      const komputer = computer();
      const player = e.className;
      const hasil = rules(komputer, player);
   
      spin();

      setTimeout(() => {
         const gambarComputer = document.querySelector('.img-komputer')
         gambarComputer.setAttribute('src', 'img/' + komputer + '.jpg')

         const info = document.querySelector('.info');
         info.innerHTML = hasil;
      }, 2250)

      playAudio();

   })
})