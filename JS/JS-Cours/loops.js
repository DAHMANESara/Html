//pour i allant de a
// debut pour
//fin pour
// let i = 0;
for (let i = 1; i <= 100; i += 2) {
  // ou i=i+2 // si on declare i a l'interieur de la boucle ave LET elle sera local dans la boucle si on veut la declarer global et l'interier utilise VAR'
  console.log(i);
}
//post Incrementation
let a = 1;
let b = 1;
a = b++; /* 1> a=b (a=1) ensuite b s'incrimente (b=2)
/*pre Incrementation*/
let x = 1;
let y = 1;
x = ++y; // INCREMENTER y (2) ENSUITE x=y (x=2)

// Boucle sur des chaine
const nom = "sara dahmane";
for (
  let i = 0;
  i < nom.length;
  i++ // ou i<=length-1
) {
  console.log(nom[i]);
}
