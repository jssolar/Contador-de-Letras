let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {}

// your code here



let nuevoParSinEspacios = par.toLowerCase().replace(/\s/g, '') //aquí se eliminan los espacios entre palabras

let valoresUnicos = new Set(nuevoParSinEspacios); //construccion de objeto con la clase "Set"

for(let i of valoresUnicos){

    let contador = 0; //cuenta popr cada letra que coincida segun el string

    for (let j of par){

        if (i == j){
            contador++;
        }
    }
    counts[i] = contador; //
}

console.log(counts);















// console.log(nuevoPar = par.replace(/\s/g, '')) 
// let par.replace(/\s/g, '')



    // console.log(counts);


//sustituir espacios en una cadena de caracteres
// const nombreImagen = 'Mi nueva foto.jpg'
// nombreImage.replace(/\s/g, '') //Mi-nu
