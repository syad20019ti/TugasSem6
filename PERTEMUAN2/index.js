const name = "sya";
const age = 22;

const greeting = `
 halo nama saya: ${name}

 umur: ${age}
`; 

console.log(greeting);

//kondisi if, else if, else
const nilai = 90;

if (nilai > 90)
    console.log("A");
else if (nilai > 80)
    console.log("B");
else if (nilai > 70)
    console.log("C");
else{
    console.log("E");
}

//untuk ngeluarin angka 1 - 10
for (let i = 1; i < 10; i++){
    console.log(i);
}

//untuk ngeluarin angka genap
for (let i = 2; i <= 10; i = i+2){
    console.log(i);
}

//function declarasi
function hitungUmur(tahunLahir = 2001){
    const tahunSekarang = 2023;
    const umur = tahunSekarang - tahunLahir;

    return umur;
}

hitungUmur = 2001;

//function arrow
const hitungUmurMhs = (tahunLahir = 2001) => {
    const  tahunSekarang = 2023;
    const umur = tahunSekarang - tahunLahir;
    return umur;
};

console.log(hitungUmurMhs(2001));

//Array biasa
const hewan = ['ikan', 'bebek', 'kucing'];
console.log (hewan[2]);

//Array dan looping
for (let i = 0; i < hewan.length; i++){
    console.log(hewan[i]);
}

//object
const user = {
    nama : "sya",
    umur : 21,
    tinggi : 162,
};

console.log(user.nama, user["umur"], user.tinggi);

for (let data in user){
    console.log (user[data]);
}