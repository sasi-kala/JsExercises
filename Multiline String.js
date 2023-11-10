//Three ways to create multiline strings

//1
const string=`One way  
 To Give Multiline string is
 Template literal`;

console.log(string);

//2
const message = "Second way\n" + "To Give multiline string is\n" + "By Using Concatenation operator";

console.log(message);


const strings = 
"Third way \n \
To give multiline string is\n \
By using backslash operator";

console.log(strings);