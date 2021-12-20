let listProducts = [
    { img: "./Img/Quần Short Tennis DRY 500.jpg", nameItem: "Quần Short Tennis DRY 500", price: 245.000, type: "tennis" },
    { img: "./Img/Vợt Tennis TR500.jpg", nameItem: "Vợt Tennis TR500.jpg", price: 1395.000, type: "tennis" },
    { img: "./Img/Áo Polo Tennis.jpg", nameItem: "Áo Polo Tennis", price: 145.000, type: "tennis" },
    { img: "./Img/Bóng Tennis R40.jpg", nameItem: "Bóng Tennis R40", price: 175.000, type: "tennis" },
    { img: "./Img/Bình Nước Thể Thao Giữ Nhiệt 450ML.jpg", nameItem: "Bình Nước Thể Thao Giữ Nhiệt 450ML", price: 145.000, type: "run" },
    { img: "./Img/Đai Đeo Hông Chạy Bộ.jpg", nameItem: "Đai Đeo Hông Chạy Bộ", price: 1395.000, type: "run" },
    { img: "./Img/Kính Mắt Đổi Màu Lọc Tia UV.jpg", nameItem: "Kính Mắt Đổi Màu Lọc Tia UV", price: 795.000, type: "run" },
    { img: "./Img/Mũ Không Chóp Chạy Bộ.jpg", nameItem: "Mũ Không Chóp Chạy Bộ", price: 195.000, type: "run" },
    { img: "./Img/Móc Leo Núi ROCK.jpg", nameItem: "Móc Leo Núi ROCK", price: 195.000, type: "climbing" },
    { img: "./Img/Túi Đựng Phấn Leo Núi SPIKER.jpg", nameItem: "Túi Đựng Phấn Leo Núi SPIKER", price: 89.000, type: "climbing" },
    { img: "./Img/Bộ Dây Leo Núi 5,5M.jpg", nameItem: "Bộ Dây Leo Núi 5,5M", price: 175.000, type: "climbing" },
    { img: "./Img/Đai Leo Núi C500.jpg", nameItem: "Đai Leo Núi C500", price: 795.000, type: "climbing" },
    { img: "./Img/Dụng Cụ Chống Đẩy.jpg", nameItem: "Dụng Cụ Chống Đẩy", price: 345.000, type: "workout" },
    { img: "./Img/Xà Đơn Khóa Được 70 CM.jpg", nameItem: "Xà Đơn Khóa Được 70 CM", price: 545.000, type: "workout" },
    { img: "./Img/Dây Nhảy T900.jpg", nameItem: "Dây Nhảy T900", price: 145.000, type: "workout" },
    { img: "./Img/Thảm FITNESS.jpg", nameItem: "Thảm FITNESS", price: 395.000, type: "workout" },

];
let listProductsCartping=[];
var stt = 0;
for (var index = 0; index < listProducts.length; index++) {
    var html = `
    <div class="item">
                <a href="#">
                    <img src="${listProducts[index].img}" alt="Item">
                    <p class="title">Nhấn Vô Để Xem Chi Tiết</p>
                </a>
                <h3>${listProducts[index].nameItem}</h3>
                <p>${listProducts[index].price}.000 VNĐ</p>
                <a id="item${stt}" onclick="more(${stt})" class="key" href="#">Thêm Vào Giỏ</a>
                <a id="buy${stt}" onclick="buy(${stt})" class="key" href="#">Mua Ngay</a>
            </div>
    `;
    stt++;
    if (listProducts[index].type == "tennis") {
        document.getElementById('tennisItems').innerHTML += html;
    } else if (listProducts[index].type == "run") {
        document.getElementById('runItems').innerHTML += html;
    } else if (listProducts[index].type == "climbing") {
        document.getElementById('climbingItems').innerHTML += html;
    } else {
        document.getElementById('workoutItems').innerHTML += html;
    };
}
var quantityItens = 0;
const more = (n) => {
    // quantityItens++;
    // document.getElementById('quantity').innerText = quantityItens;
    // alert("Bạn đã thêm vào giỏ hàng thành công.");
    Insert(n)
}
var id = 0;

function Insert(n) {
    var quantityPro = `<input class="cart-quantity-input" id='qty-${id}' onclick="quantyti(${id})" type="number" min='1' max='10' value='1'>`;
    var row = "<tr>";
    row += "<td>" + `<input id="checkbox${id}" onclick="choose_to_buy(${id})" type="checkbox" class="size">` + "</td>";
    row += "<td>" + (id+1) + "</td>";
    row += "<td>" + `<img width="100px"  src="${listProducts[n].img}" alt="Item">` + "</td>";
    row += "<td>" + ` <p>${listProducts[n].nameItem}</p>` + "</td>";
    row += "<td>" + ` <p>${listProducts[n].price}.000 VNĐ</p>` + "</td>";
    row += "<td>" + quantityPro + "</td>";
    row += `<td id='total-${id}'>` + ` <p>${listProducts[n].price}.000 VNĐ</p>` + `</td>`;
    row += "<td>" + `<button class="btn btn-danger text-center" type="button" onclick="delet(${id}))">Xóa</button>` + "</td>";
    row += "</tr>";
    // if(listProductsCartping.length>0){
    //     for(var list = 0; list<listProductsCartping.length; list++){
    //         if(listProducts[n].nameItem==listProductsCartping[list].name){
    //             alert('Sản phẩm đã có trong giỏ hàng! Bạn có thể vào trong giỏ hàng để cập nhập số lượng.');
    //             break;
    //         }else{
    //             quantityItens++;
    //             document.getElementById('quantity').innerText = quantityItens;
    //             document.getElementById("tbl").innerHTML += row;
    //             listProductsCartping.push({
    //                 img:listProducts[n].img,
    //                 name:listProducts[n].nameItem,
    //                 price:listProducts[n].price,
    //                 quatity: 1,
    //                 total: listProducts[n].price    
    //             });
    //             alert("Bạn đã thêm vào giỏ hàng thành công.");
    //             id++;
    //         }
    //     };
    // }else{
    //     quantityItens++;
    //     document.getElementById('quantity').innerText = quantityItens;
    //     document.getElementById("tbl").innerHTML += row;
    //     listProductsCartping.push({
    //         img:listProducts[n].img,
    //         name:listProducts[n].nameItem,
    //         price:listProducts[n].price,
    //         quatity: 1,
    //         total: listProducts[n].price    
    //     });
    //     alert("Bạn đã thêm vào giỏ hàng thành công.");
    //     id++;
    // }

    document.getElementById("tbl").innerHTML += row;

    var remove_cart = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < remove_cart.length; i++) {
        var button = remove_cart[i]
        button.addEventListener("click", function(event) {
            var button_remove = event.target
            button_remove.parentElement.parentElement.remove();
            id--;
            quantityItens--;
            document.getElementById('quantity').innerText = quantityItens;
        })
    }
    listProductsCartping.push({
        img:listProducts[n].img,
        name:listProducts[n].nameItem,
        price:listProducts[n].price,
        quatity: 1,
        total: listProducts[n].price    
    });
    quantityItens++;
    document.getElementById('quantity').innerText = quantityItens;
    alert("Bạn đã thêm vào giỏ hàng thành công.");
    id++;
    quantyti(id);
}
const quantyti=(n)=>{
    var qty = document.getElementById('qty-' + n).value;
    var totalEL = document.getElementById('total-' + n);
    totalEL.innerText = qty * listProductsCartping[n].price + ".000 VNĐ";
    var qtyInput = document.getElementById('qty-' + n);
    qtyInput.addEventListener('change', (e) => {
        var qty = e.target.value;
        var total = qty * listProductsCartping[n].price;
        totalEL.innerText = total + ".000 VNĐ"
        listProductsCartping[n].quatity = qty;
        listProductsCartping[n].total = total;
    }); 
};

function reset(){
    for(var list = 0; list<listProductsCartping.length; list++){
        document.getElementById('checkbox' + list).checked = false;
        choose_to_buy(list);
    }
};

var totalMoney=0;
var totalMoneyTotal=0;
const choose_to_buy=(n)=>{
    var htmlchild =`
        <div class="items ">
            <div class="row ">  
                <div class="col-4 ">
                    <img class="item " src="${listProductsCartping[n].img}" alt="Item ">
                </div>
                <div class="col-8 ">
                    <h5>${listProductsCartping[n].name}</h5>
                    <h5>${listProductsCartping[n].price}.000 VNĐ</h5>
                    <h5>Số lượng: ${listProductsCartping[n].quatity}</h5>
                </div>
            </div>
        </div>
        `;
    if(document.getElementById('checkbox'+n).checked){
        totalMoney=totalMoney+listProductsCartping[n].total;
        totalMoneyTotal=totalMoney;
        var discountCode = 0;
        if(totalMoney>5000){
            var discountCode = 500;
            totalMoneyTotal=totalMoneyTotal-discountCode;
        }
        document.getElementById('pading').innerHTML += htmlchild;
    }else{
        totalMoney=totalMoney-listProductsCartping[n].total;
        if(totalMoney<5000){
            discountCode=0;
            totalMoneyTotal=totalMoney;
        }
        var htmlParent = document.getElementById('pading').innerHTML;
        document.getElementById('pading').innerHTML = htmlParent.substring(0, htmlParent.indexOf(htmlchild))
    }
    document.getElementById('totalx2').innerText = totalMoney+".000 VNĐ";
    document.getElementById('discountCode').innerText = discountCode+".000 VNĐ";
    document.getElementById('totalx3').innerText = totalMoneyTotal+".000 VNĐ";
    document.getElementById('provisional').innerText = totalMoney+".000 VNĐ";
    document.getElementById('voucher').innerText = discountCode+".000 VNĐ";
    document.getElementById('totalx4').innerText = totalMoneyTotal+".000 VNĐ";
}

let customer = [];

function showInfo() {
    var html=`
    <h5>Họ và tên: <em>${document.getElementById('names').value }</em></h5>
    <h5>Số điện thoại: ${document.getElementById('phone').value}</h5>
    <h5>Địa chỉ: <em>${document.getElementById('address1').value}</em></h5>
    <h5>Ghi chú: ${document.getElementById('note').value}</h5>
    <h5>${document.getElementById('payment1').value}</h5>
    <h5>Tổng Tiền: ${totalMoneyTotal}.000 VNĐ</h5>
    `;
    var app= document.querySelector('#modalBody');
    app.innerHTML = html;
}

function buy() {
    customer.push({
        nameCustomer: document.getElementById('names').value,
        phoneNumber: document.getElementById('phone').value,
        address: document.getElementById('address1').value,
        note: document.getElementById('note').value,
        paymentsMethods: document.getElementById('payment1').value
    });
    document.getElementById('names').value='';
    document.getElementById('phone').value='';
    document.getElementById('address').value='';
    document.getElementById('note').value='';
    document.getElementById('payment').value='';
    setTimeout(function() {
        alert('Chúc mừng bạn đã đặt hàng thành công');
    }, 1000);
}
