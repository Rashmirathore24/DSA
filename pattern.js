//1
// let n= 5;
// let sum ='';
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=i; j++){
//     sum+= '*';
//   }
//   sum+= '\n';
// }
// console.log(sum);



//2
// let n= 5;
// let sum ='';
// for(let i=0; i<n; i++){
//   for(let j=1; j<n-i; j++){
//     sum += ' ';
//   }
//   let j=i;
//   for(let k=0; k<=j; k++ ){
//     sum += '*';
//   }
//   sum += '\n';
// }
// console.log(sum);



//3
// let n = 5;
// let sum = '';
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         sum += '*';
//     }

//     for (let j = 0; j < n - i; j++) {
//         sum += '  ';
//     }
//     let j = i;
//     for (let k = 0; k < j; k++) {
//         sum += '*';
//     }
//     sum += '\n';
// }
// console.log(sum);


//4


// let str = "#qatfh1";
// let c = 0;
// if (str[0] === '#' && str.length === 7) {
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "F" || str[i] >= "a" && str[i] <= "f"  || str[i] >= "0" && str[i] <= "9") {
//             c++;
//         } else {
//             break;
//         }
//     }
//     if (c == 6) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// } else {
//     console.log("false");
// }




//5

// let N = 60;
// let sum = '';
// for (let i = 0; i < N; i++) {
//     for (let j = 1; j < N - i; j++) {
//         sum += ' ';
//     }
//     let j = i;
//     for (let k = 0; k <= j; k++) {
//         sum += '*';
//     }

//     for (let l = 1; l <= i; l++) {
//         sum += '*';
//     }
//     sum += '\n';
// }
// console.log(sum);



//6

// let arr = [2, 7, 60, 9, 86];
// let result;
// let c = 0;
// for (let i = 0; i < arr.length; i++) {
//     let j = arr[i];
//     while (j > 1) {
//         result = j % 10;
//         if (result == 7) {
//             c++
//         }
//         j = Math.floor(j/10);
//     }
// }
// if (c > 0) {
//     console.log("true");

// } else {
//     console.log("false");
// }


//7

// let n = 7;
// let sum = '';
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         sum += '*';
//     }
//     sum += '\n';

// }
// for(let m=n; m>1; m--){
//     for (let k = 1; k < m; k++) {
//         sum += '*';
//     }
//     sum += '\n'
// }

// console.log(sum);




//8 



// let n=5;
// let sum = '';
// let c;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         for(let j=1; j<=i; j++){
//             if(j%2==0){
//                 sum += '1';
//             }else{
//                 sum += '0';
//             }
//         }
//     }else{
//         for(let j=1; j<=i; j++){
//             c= j%2;
//             sum += c;
//         }
//     }
//     sum += '\n'
// }
// console.log(sum);


//9 mirror

// let n = 5;
// let sum = '';
// for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         sum += '*';
//     }

//     for (let j = 0; j < n - i; j++) {
//         sum += ' ';
//     }
//     for (let j = 0; j < n - i; j++) {
//         sum += ' ';
//     }
//     let j = i;
//     for (let k = 0; k < j; k++) {
//         sum += '*';
//     }
//     sum += '\n';
// }
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         sum += '*'
//     }
    
//     for (let j = 0; j < n - i; j++) {
//         sum += '  ';
//     }
//     let j = i;
//     for (let k = 0; k < j; k++) {
//         sum += '*';
//     }
//     sum += '\n';
// }

// console.log(sum)


// function reverseodd(num){

// }

// let word = "one two three four";
// let hello ;
// for(let i=0; i<=word.length; i++){
//     hello = word.slice(0);
    
// }
// console.log(hello);



function reverseString(input) {
    let str = '';
       for(let j=input.length-1; j>=0; j--){
            str += input[j];
        }
    return str;
}

let word = "one two three four";
console.log(reverseString(word)); 
