function solution(number){
    // convert the number to a roman numeral
    let parts = [1000,500,100,50,10,5,1];
    let romans = ["M","D","C","L","X","V","I"];
    let converted = "---";
    parts.forEach((part,index) => {
        // ilk element kac tane var
        let pieces = (number - (number % parseInt(part))) / parseInt(part);
        // ilk tur icin pieces = (1950-(1950 % 1000))/ 1000 // sonuc olarak 1 doner
        if(parseInt(pieces)>0){ // Sifirdan fazla varsa islemlere gecelim. Hic yoksa pas gecmis olacagiz
            if(part==1000) {
                converted = converted.padEnd((converted.length + pieces), romans[index]);
            }
            let modulo = number - (parseInt(part)*pieces); // Bu adetteki element ana sayidan cikinca ne kaliyor, kalan sonraki kismi belirleyecek
            // ilk tur icin modulo = 1950 - (1000* 1)

                if(modulo>=(part-parts[index+2])){ // 1950 icin 950>=900 ise
                    converted+= romans[index+2]+romans[index]; //converted+= C+M
                    number=modulo-((part-parts[index+2])) // =950-900
                }else{
                    converted = converted.padEnd((converted.length+pieces),romans[index]);
                    number-=(pieces*part);
                }


converted+="|";
        }

    })
    return converted
}
console.log(solution(1950)); // MCML
console.log(solution(1946)); // MCMXLVI
console.log(solution(2956)); // MMCMLVI
console.log(solution(1515)); // MDXV



// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
