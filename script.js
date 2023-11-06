let km = prompt("masinin qet etdiyi mesafeni daxil et:");
let saat = prompt("masinin qet etdiyi yolun vaxtini daxil et");
const hesabla = function (mesafe,zaman) {

    let ortasuret=mesafe/zaman;
    let yanacaq = 0;
    if (0<=ortasuret && ortasuret<= 60) {
        yanacaq = 6;
    } else if (60<=ortasuret && ortasuret<=90){
        yanacaq = 9;
    } else if (90<=ortasuret && ortasuret<=120){
        yanacaq = 8;
    } else{
        yanacaq =10;
    }
    let quanitiy = (yanacaq * km) / 100;

    return `${mesafe} mesafe yol ${zaman} saat muddetine getmek ucun sizin ortalama suretiniz ${ortasuret} olmalidir, Size lazim olacaq yanacaq miqdari ${quanitiy}, ortalama yanacaq serfiyyati ${yanacaq} `;
}
console.log(hesabla(km,saat));
