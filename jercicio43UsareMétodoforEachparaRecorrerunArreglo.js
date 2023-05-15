let lenguajes = ["java","JavaScript","c++","c#","python"];

lenguajes.forEach(function(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice}`)    
});

console.log()

// otra funcion

function recorridoArrego(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice}`)
}
lenguajes.forEach(recorridoArrego);

console.log()

lenguajes.forEach((valor, indice, lenguajes)=>{
    console.log(`${valor} se encuentra en el indice ${indice}`)    
});


// let recorridoArrego = (valor, indice, lenguajes)=>{
//     console.log(`${valor} se encuentra en el indice ${indice}`)


// // lenguajes.forEach(recorridoArrego);
// };