const sum = require('./suma.test')

module.exports = {
suma(a,b) {
    return a+b;
},

resta(b,d) {
    return b-d;
},

 perimetroTriangulo(ladoA, ladoB, ladoC) {

    return ladoA + ladoB + ladoC;
},

 numeroNegativo(nu1) {
    if (nu1< 0){
        return true;
    }
    return false;

},

stringVacio(a) {
    if (!a){
        return true;
    }
    return false;
},



numeroPar(nu1) {
    if(nu1 % 2 == 0){
        return true;
    }

    return false ;
},



 division(a,b) {
    return a/b;
},



multiplicar(a,b) {
   return  a * b;

},


areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
}
