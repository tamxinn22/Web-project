var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
    showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesbaner");
    if (n > x.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none ";
    }
    x[slideIndex1 - 1].style.display = "block ";
} //khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex1;
// KHai bào hàm hiển thị slide
function showSlides1() {
    var i;
    var slides1 = document.getElementsByClassName("mySlidesbaner");
    var dots1 = document.getElementsByClassName("dot1");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", "");
    }

    slides1[slideIndex1].style.display = "block";
    dots1[slideIndex1].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex1++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex1 > slides1.length - 1) {
        slideIndex1 = 0
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides1, 3000);
}
//mặc định hiển thị slide đầu tiên 
showSlides1(slideIndex1 = 0);

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}