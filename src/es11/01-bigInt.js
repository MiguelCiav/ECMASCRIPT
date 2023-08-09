//* BigInt permite representar números muy grandes

const bigNumber = 134012841028419028401928419284124124124125n; //? Antes se hacía así

console.log(bigNumber);

const anotherBigNumber = BigInt("12345678910111213141516171819202122232425262728"); //? Ahora podemos usar el constructor de BigInt

console.log(anotherBigNumber);