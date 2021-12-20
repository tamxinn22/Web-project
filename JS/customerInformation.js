// let customer = [];

// function showInfo() {
//     var html=`
//     <h5>Họ và tên: <em>${document.getElementById('names').value }</em></h5>
//     <h5>Số điện thoại: ${document.getElementById('phone').value}</h5>
//     <h5>Địa chỉ: <em>${document.getElementById('address1').value}</em></h5>
//     <h5>Ghi chú: ${document.getElementById('note').value}</h5>
//     <h5>${document.getElementById('payment1').value}</h5>
//     `;
//     var app= document.querySelector('#modalBody');
//     app.innerHTML = html;
// }

// function buy() {
//     customer.push({
//         nameCustomer: document.getElementById('names').value,
//         phoneNumber: document.getElementById('phone').value,
//         address: document.getElementById('address1').value,
//         note: document.getElementById('note').value,
//         paymentsMethods: document.getElementById('payment1').value
//     });
//     document.getElementById('names').value='';
//     document.getElementById('phone').value='';
//     document.getElementById('address').value='';
//     document.getElementById('note').value='';
//     document.getElementById('payment').value='';
//     setTimeout(function() {
//         alert('Chúc mừng bạn đã đặt hàng thành công');
//     }, 1000);
// }
