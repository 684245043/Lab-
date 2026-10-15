let cupSize: string = "M";
let ownCup: boolean = true;
let rate: number = 5;
let cupPrize: number =0;
if (cupSize === "S"){
    cupPrize = 60;
} else if (cupSize === "M"){
    cupPrize = 80;
} else if(cupSize ==="L"){
    cupPrize = 100;
}
console.log(`กาแฟขนาด ${cupSize} ราคาปกติ ${cupPrize} บาท`)

let discount: number = (cupPrize-(cupPrize * rate)/100);
if (ownCup = true){
    console.log(`ได้รับส่วนลด ${rate} ราคาหลังหักส่วนลด ${discount} บาท`)
}