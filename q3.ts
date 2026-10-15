export
let weight: number[]= [15,5.5,4.2,8.9,23,16,12.5,2.7,27.5,30];

console.log(`พัสดุมีน้ำหนักดังนี้`);
let total = 0;
for (let i = 0; i < weight.length; i++){
    console.log(`${i+1}. ${weight[i]}`);
total += weight[i];
}

console.log(`พัสดุที่มีน้ำหนักเกินเกณฑ์: 2 ชิ้น`)
console.log(`น้ำหนักเฉลี่ยของพัสดุ: ${total/ weight.length}`);
