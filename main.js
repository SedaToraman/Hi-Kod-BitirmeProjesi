var sound1 = new Audio();
sound1.src = "sounds/page.mp3"

/*myButton değişkeni butonun DOM öğesine referans verirken, myAudio değişkeni de tanımlanan ses öğesine referans verir.
Bu kısaca; JavaScript kodunda butonu manipüle etmek için bu değişkeni kullanabilirsiniz. */


const myButton = document.getElementById("myButton");
const myAudio = document.getElementById("myAudio");

//sesin durmasını ve başa dönmesini sağlayalım.

myButton.addEventListener("mouseenter", function() {
  myAudio.play();
});

//mouseleave ile sesin durmasını ve başa dönmesini sağlayalım.

myButton.addEventListener("mouseleave", function() {
  myAudio.pause();
  myAudio.currentTime = 0;
});

//butonla birlikte leftBarın açılmasını sağladık

//button,section,i değeri olan HTML öğesine erişir ve bu öğeyi button,menu,closeBtn adlı bir değişkene atar.
//yani HTML öğesine erişmek için kullanıyoruz

let button = document.querySelector("button");
let menu = document.querySelector("section");
let closeBtn = document.querySelector("i");

/*HTML öğesine bir olay dinleyicisi (event listener) eklemek için kullanılan bir yöntemdir. Bu yöntem, 
bir HTML öğesinde gerçekleşen belirli bir olayın (tıklama, fare hareketi, klavye tuşlarına basma, vb.) algılanmasını sağlar 
ve bu olay gerçekleştiğinde fonksiyonun tetiklenmesini sağlar*/

button.addEventListener("click",function()
{
  menu.style.left = 0;
});

closeBtn.addEventListener("click",function()
{
  menu.style.left = "-200%";
});



















