
/* II. Arrow function.
1. print odd numbers in an array.
2. convert all the strings to the title caps in a string array
3. sum of all numbers in an array
4. return all the prime numbers in an array.
5. return all the palindromes in an array.
*/

//1. print odd numbers in an array.
var arr1=[1,32,54,78,8,79,3,56,3,654];
var res1=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Arrow function",res1(arr1));


//2. convert all the strings to caps in string array.

var arr2=["hello","world","this","is","karthi"];
var res2=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        var a=arr[i].toUpperCase();
        out.push(a);    
    }
    return out;
}
console.log("Arrow function",res2(arr2));


//3.sum of all numbers in an array.


var arr3=[1,32,54,78,8,79,3,56,3,654];
var res3=(arr)=>{
    var out=0;
    for(var i=0;i<arr.length;i++){
        var a=parseInt(arr[i]);
        out+=a;    
    }
    return out;
}
console.log("Arrow function",res3(arr3));

//4. return all the prime numbers in an array.
var arr4=[1,32,54,78,8,79,3,56,3,654];
var res4=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Arrow function",res4(arr4));

//5. return all the palindromes in an array;
var arr5=[1,32,54,78,121,3,56,3,654];
var res5=(arr)=>{
    var out=[];
    for(var i=0;i<arr.length;i++){
        var temp=arr[i].toString();
        var r=temp.split("").reverse().join("");
        if(r==arr[i]){
            out.push(arr[i]);
        }
    }
    return out;
}
console.log("Arrow function",res5(arr5));

