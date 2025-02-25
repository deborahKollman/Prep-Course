// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo=[];
  for(let clave in objeto){
    var nuevo=[];
    nuevo[0]=clave;
    nuevo[1]=objeto[clave];
    arreglo.push(nuevo);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto={  };
  for(let i=0;i<string.length;i++){
    let letra=string[i];
    if(objeto[letra]){
      objeto[letra]++;
    }else{
      objeto[letra]=1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  min="";
  may="";
  for(let i=0;i<s.length;i++){
    var letra=s[i];
    if(letra.toUpperCase()===letra){
      may+=letra;
    }else{
      min+=letra;
    }
  }
  return may+min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevo="";
  var string="";
  for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
      string+=str[i];
    }else{
      nuevo+=string.split("").reverse().join("")+' ';
      string="";
    }
  }
  nuevo+=string.split("").reverse().join("");
  return nuevo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str=numero.toString();
  
  for(let i=0;i<(str.length/2);i++){
    if(str[i]!==str[str.length-1-i]){
      return "No es capicua"
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var string="";
  for(let i=0;i<cadena.length;i++){
    if(cadena[i]!=='a'&& cadena[i]!=='b'&& cadena[i]!=='c'){
      string+=cadena[i];
    }
  }
  return string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
      if(a.length>b.length){
        return 1;
      }else if(a.length<b.length){
        return -1;
      }else{
        return 0;
      }
    })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevo=[];
  for(let i=0;i<arreglo1.length;i++){
    let j=0;
    while(arreglo1[i]!==arreglo2[j] && j<arreglo2.length){
      j++;
    }
    if(arreglo1[i]===arreglo2[j]){
      nuevo.push(arreglo1[i]);
    }
  }
  return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

