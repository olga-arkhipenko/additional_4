module.exports = function multiply(first, second) {

    first = first.split("").map(Number);
    second = second.split("").map(Number);

    let arrOfZeroes = new Array(first.length + second.length).fill(0);

    if(first.length > second.length){
        second = arrOfZeroes.concat(second).slice(-first.length);

    } else if(second.length > first.length){
        first = arrOfZeroes.concat(first).slice(-second.length);
    }


    let dec = 0;
    let product = [];


    let n = first.length + second.length;

    for(let i = first.length-1; i >= 0; i--){

        let partProduct = new Array(first.length + second.length + 1).fill(0);

        for(let j = second.length-1, m = n; j >= 0; j--, m--){
            if(j !== 0){
                partProduct[m] = (first[i] * second[j] + dec) %10;
                dec = Math.floor((first[i] * second[j] + dec)/10);
            }
            else{
                partProduct[m] = first[i] * second[j] + dec;
            }
            
        }

        dec = 0;
        n--;
        product.push(partProduct);

    }

    let result = new Array(first.length + second.length + 1).fill(0);

    for(let i = product[0].length - 1; i >= 0; i--) {
        for(let j = 0; j < product.length; j++) {
            result[i] += product[j][i];
        }
    }


    for(let i = result.length - 1; i >= 0; i--) {
        if (result[i] > 9) {
            result[i - 1] += Math.floor(result[i] / 10);
            result[i] = result[i] % 10;
        }
    }
    return result.join("").replace(/^0*/, "");

};

