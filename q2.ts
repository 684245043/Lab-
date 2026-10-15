let baseBonus: number = 5000;
let total = 0;
for (let i =1; i <=20; i++){
    console.log (`ปีที่ ${i + 0} โบนัส = ${baseBonus * i}`);
    total += baseBonus;
}
console.log(`"ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้โบนัส ${total}`);