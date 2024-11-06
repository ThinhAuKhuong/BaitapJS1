// Tạo một mảng trống
let numberArray = [];
// Tạo hàm thêm số vào mảng
function addNumber() {
  const num = parseInt(prompt("Nhập một số nguyên để thêm vào danh sách:"), 10);
  if (!isNaN(num)) {
    numberArray.push(num);
    console.log(`Đã thêm số ${num} vào danh sách.`);
  } else {
    console.error("Xin nhập một số nguyên");
  }
}
//Tạo hàm hiển thị danh sách hiện có
function displayArray() {
    if (numberArray.length === 0) {
        console.log("Danh sách hiện đang trống");
    }
    else {
        console.log("Danh sách hiện đang có", numberArray.join(", "));
    }
}
//Tìm số lớn nhất và số nhỏ nhất trong danh sách.
function findMinandmax() {
    if (numberArray.length === 0) {
        console.log("Danh sách trống, không thể tìm cực trị và cực đại");
    }
    else {
        let min = numberArray[0];
        let max = numberArray[0];
      
        for (let i = 1; i < numberArray.length; i++) {
          if (numberArray[i] < min) min = numberArray[i];
          if (numberArray[i] > max) max = numberArray[i];
        }
        
        console.log(`Số nhỏ nhất là: ${min}`);
        console.log(`Số lớn nhất là: ${max}`);
    }
}
//Tính tổng của tất cả các số trong danh sách.
function sumupAlltheintergers() {
    if (numberArray.length === 0) {
        console.log("Danh sách trống. Không thể tính tổng.");
    } 
    else {
        let sum = 0;
        for (let num of numberArray) {
          sum += num;
        }    
    
    console.log(`Tổng của tất cả chữ số là: ${sum}`);
}
}
//Xóa chữ số theo chỉ số
function removeNumber() {
    const index = parseInt(prompt("Nhập chỉ số bạn muốn xóa:"), 10);
    if (index < numberArray.length) {
        const removedNumber = numberArray.splice(index, 1);
        console.log(`Đã xóa số ${removedNumber[0]} khỏi danh sách.`);
    }
    else {
        console.log("Chỉ số bạn đã nhập không hợp lệ, vui lòng thay đổi lựa chọn.");
    }
}
//Gán hàm để chạy
addNumber();
displayArray();
findMinandmax();
sumupAlltheintergers();
removeNumber();