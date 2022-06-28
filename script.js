//Değişkenler ve Sabitler 
const otoSecimGoruntule=document.getElementById('oto-secim')
 const kendiSecimGoruntule=document.getElementById('kendi-secim')
 const sonucGoruntule=document.getElementById('sonuc')
 const olasıSecimler=document.querySelectorAll('button')
 let kendiSecim
 let otoSecim
 let sonuc

olasıSecimler.forEach(olasıSecim=> olasıSecim.addEventListener('click',(e)=>{
kendiSecim=e.target.value
kendiSecimGoruntule.innerHTML=kendiSecim
otoSecimUretme()
Sonuc()

 }))

 //Bilgisayarın otomatik seçimini kuran fonksiyon
 function otoSecimUretme(){
     const rastgeleSayi=Math.floor(Math.random()*3)+1
     if(rastgeleSayi ===1){
        otoSecim='TAŞ'
    }
    if(rastgeleSayi ===2){
        otoSecim='MAKAS'
    }
    if(rastgeleSayi ===3){
        otoSecim='KAĞIT'
    }
    otoSecimGoruntule.innerHTML=otoSecim

}

//Oyuncu kaybettiğinde ekrana gelecek gifi gösteren fonksiyon
function Kaybettin() {
    const img = document.createElement('img');
    img.src = 'gif/barney-stinson.gif';
    
    const div = document.getElementById('placehere2');
    div.appendChild(img);

    setTimeout(() => div.removeChild(img), 4000);
}

//Oyuncu kazandığında ekrana gelecek gifi gösteren fonksiyon
function Kazandin() {
    const img =document.createElement('img'); 
    img.src = 'gif/friends.gif';

    const div = document.getElementById('placehere1'); 
    div.appendChild(img);                          

    setTimeout(() => div.removeChild(img), 4000) //Gif'i ekranda 4 saniye tutmak için kurduğumuz metot
} 


//Oyuncu berabere kaldığında ekrana gelecek gifi gösteren fonksiyon
function Berabere() {
    const img =document.createElement('img'); 
    img.src = 'gif/deal.gif';

    const div = document.getElementById('placehere3'); 
    div.appendChild(img);                          

    setTimeout(() => div.removeChild(img), 4000) //Gif'i ekranda 4 saniye tutmak için kurduğumuz metot
} 

//Seçimler dahilinde sonucu ekrana yansıtan fonksiyon
function Sonuc(){
    if(otoSecim===kendiSecim){
        sonuc='BERABERE!'
        Berabere()
    }
    if(otoSecim==='TAŞ'&& kendiSecim==="KAĞIT"){
        sonuc='KAZANDIN!'
        Kazandin()
    }
    if(otoSecim==='TAŞ'&& kendiSecim==="MAKAS"){
        sonuc='KAYBETTİN!'
        Kaybettin()
    }
    if(otoSecim==='KAĞIT'&& kendiSecim==="MAKAS"){
        sonuc='KAZANDIN!'
        Kazandin()
    }
    if(otoSecim==='KAĞIT'&& kendiSecim==="TAŞ"){
        sonuc='KAYBETTİN!'
        Kaybettin()
    }
    if(otoSecim==='MAKAS'&& kendiSecim==="TAŞ"){
        sonuc='KAZANDIN!'
        Kazandin()
    }
    if(otoSecim==='MAKAS'&& kendiSecim==="KAĞIT"){
        sonuc='KAYBETTİN!'
        Kaybettin()
    }
   sonucGoruntule.innerHTML=sonuc
}




 
     
    