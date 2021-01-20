/* ハンバーガーメニュー */
let ham_js = document.getElementById("ham");                         /*  html側で変更したい場所にidを指定しておく */
let ham_menu_wrapper_js = document.getElementById("ham--menu--wrapper") /* クラスを変更したい場所のIDを取得しておく */
ham_js.addEventListener("click", function () {
    ham.classList.toggle("clicked");
    ham_menu_wrapper_js.classList.toggle("clicked");
});



/* スクロールコマンド */
let top_appearance = 200;
let currentY = 0;
window.addEventListener("scroll", function () {
    let currentY = window.pageYOffset;
    if (currentY > top_appearance) {
        document.getElementById("arrow").classList.add("appear");
        document.getElementById("ham").classList.add("translate");
        document.getElementById("click").classList.add("appear")
    }
    else {
        document.getElementById("arrow").classList.remove("appear");
        document.getElementById("ham").classList.remove("translate");
        document.getElementById("click").classList.remove("appear")
    }
    console.log(currentY);
})



/* アコーディオンメニュー */
let accordion = document.getElementsByClassName("acmenu--question"); /* クラス名を取得 */
for (let i = 0; i < accordion.length; i++) {                         /* クラスは配列みたいに格納されるから，取得された場所をfor文で出す。 */
    accordion[i].addEventListener("click", function () {
        let target = this.nextElementSibling;                        /* thisはクリックされた場所のaccordionつまりacmenu--questionのあるところ。 */
        target.classList.toggle("open");
        console.log("click");                        /* nextElementSiblingは次のクラスを指定する。 */
    })
}

