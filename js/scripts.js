//prompt("hello");
var myArray=['Hello',2,3,true,5,null,54];
var myValue=myArray.find( function (element) {return element>2; } );
console.log(myValue);


var isMyStringInside= myArray.find( function ( element ){ return element ==='Hello'; } );
console.log(isMyStringInside);
var isMyStringInside= myArray.find( function ( element ){ return element ==='GoodBye'; } );
console.log(isMyStringInside);


var findAnIndex=myArray.findIndex(function ( element ){return element ===2;});
console.log(findAnIndex);


var pairing= myArray.entries();
console.log( pairing );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );



var fromArray = Array.from('ABCDEFGHIJKLMNOPOPQRSTUVWXYZ');
console.log( fromArray );
var fromArray2 = Array.from('Hello,World');
console.log( fromArray2);


var filtered=myArray.filter( function (element) {return element>2; } );
console.log(filtered);

var reduceResult = myArray.reduce( function (accumulator ,currentVal)
{
    return accumulator +currentVal;
});
console.log( reduceResult );

console.log( [1,2,3,4,5] .reduce( function (a,v) { return a+v;}));

var x=3;
let y=7;
const z=36;

console.log(z);
console.log(x);
 y=10;
console.log(y);

for(var myVar=0;myVar<10;myVar++)
{
    console.log('for loop iteration');

}

console.log(myVar);


for(let myVarle=0;myVarle<10;myVarle++)
{
    console.log(myVarle);
    console.log('for loop iteration');
    

}

//console.log(myVarle);




