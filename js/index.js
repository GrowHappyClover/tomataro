/* ハンバーガーメニュー */
let ham_js = document.getElementById("ham");                         /*  html側で変更したい場所にidを指定しておく */
let ham_menu_wrapper_js = document.getElementById("ham--menu--wrapper") /* クラスを変更したい場所のIDを取得しておく */
ham_js.addEventListener("click", function () {
    ham.classList.toggle("clicked");
    ham_menu_wrapper_js.classList.toggle("clicked");
});



/* スクロールコマンド topに戻る*/

let top_appearance = 150;
let currentY = 0;
window.addEventListener("scroll", function () {
    let currentY = window.pageYOffset;
    if (currentY > top_appearance) {
        document.getElementById("arrow").classList.add("appear");
        document.getElementById("ham").classList.add("translate");
    }
    else {
        document.getElementById("arrow").classList.remove("appear");
        document.getElementById("ham").classList.remove("translate");
    }
    console.log("currentY");
});