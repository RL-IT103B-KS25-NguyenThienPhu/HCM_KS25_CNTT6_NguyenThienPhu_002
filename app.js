let currentReservationCode ="";
let isReservation = false;
let totalRevenue = 0;
let totalCheckouts = 0;
let choice = ""

while (choice !== "0") {
    choice = prompt(`
    ======== HỆ THỐNG LỄ TÂN KHÁCH SẠN SUNRISE HOTEL ===========
    1. Nhập và kiểm chuẩn mã đặt phòng
    2. Tính tiền phòng lưu trú
    3. Thẩm định mã thẻ khách may mắn
    0. thoát chương trình`);
if (choice === null) choice = "";
switch (choice.trim()) {
    case "1":
        currentReservationCode = "";
        isReservation = false;
        let ma = prompt("Nhập mã đặt phòng:");
        if (ma === null || ma.trim() ==="") {
            console.log("Chưa nhập mã đặt phòng");
            break;
        }
        
        ma = ma.trim().toUpperCase();
        
        if (ma.length <= 6) {
            console.log("Độ dài nhỏ hơn 6 ký tự");
        } else if (!ma.startsWith("HTL-")) {
            console.log("Sai tiền tố HTL-");
        } else if (ma.includes(" ")) {
            console.log("Chứa khoảng trắng");
        } else {
            currentReservationCode = ma;
            isReservation = true;
            console.log("Hợp lệ! Mã đặt phòng: " + currentReservationCode);
        }
        break;

    case "2":
        if (isReservation === false) {
            console.log("Chưa có mã hợp lệ!");
            break;
        }
        let soLuong = Number(prompt("Nhập:"));
        let donGia = Number(prompt("Nhập:"));
        let chiPhiCoSo = soLuong * donGia;
        let giamGia = 0;
        if (soLuong >= 4) {
            giamGia = Math.round(chiPhiCoSo * 0.1);
        }
        let phuPhi = Math.round((chiPhiCoSo - giamGia) * 0.08);
        let tongTien = (chiPhiCoSo - giamGia) + phuPhi;

        totalRevenue += tongTien;
        totalCheckouts++;
        console.log("========= HÓA ĐƠN =========");
        console.log("Mã đặt phòng: " + currentReservationCode);
        console.log("Chi phí cơ sở: " + chiPhiCoSo);
        console.log("Giảm giá: " + giamGia);
        console.log("Phụ phí: " + phuPhi);
        console.log("Tổng thanh toán: " + tongTien);
        currentReservationCode = "";
        isReservation = false;
        break;

    case "3":
        let somayman = prompt("Nhập số somayman:");
        if (somayman === null || somayman.trim() === "" || somayman.length < 2) {
            console.log("somayman không hợp lệ");
            break;
        }
        somayman = somayman.trim();
        let daoNguoc = somayman.split("").reverse().join("");
        let doiXung = (somayman === daoNguoc);
        console.log("Mã gốc:", somayman, "- Đảo ngược:", daoNguoc, "- Tổng:", tong);
        
        if (doiXung && chiaHet9) {
            console.log("Giải đặt biệt giảm 1.500.000");
        } else if (doiXung) {
            console.log("Giải Nhất giảm 400.000");
        } else if (chiaHet9) {
            console.log("Giải Nhì giảm 100.000");
        } else {
            console.log("Không trúng");
        }
        break;
                
    case "0":
        console.log("Thoát chương trình " + totalCheckouts);
        break;
            
    default:
        console.log("Vui lòng nhập từ (0-3)");
        break;
}
}