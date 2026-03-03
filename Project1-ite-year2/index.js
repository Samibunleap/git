// ================= Caesar Cipher =================

function caesarEncrypt(){
let text = document.getElementById("caesarInput").value.toUpperCase();
let result = "";

for(let i=0;i<text.length;i++){
let char = text[i];

if(char >= 'A' && char <= 'Z'){
result += String.fromCharCode((char.charCodeAt(0)-65+3)%26+65);
}else{
result += char;
}
}

document.getElementById("caesarResult").innerText = result;
}

function caesarDecrypt(){
let text = document.getElementById("caesarInput").value.toUpperCase();
let result = "";

for(let i=0;i<text.length;i++){
let char = text[i];

if(char >= 'A' && char <= 'Z'){
result += String.fromCharCode((char.charCodeAt(0)-65-3+26)%26+65);
}else{
result += char;
}
}

document.getElementById("caesarResult").innerText = result;
}

// ================= General Shift =================

function shiftEncrypt(){
let text = document.getElementById("shiftInput").value.toUpperCase();
let k = parseInt(document.getElementById("shiftKey").value);
let result = "";

for(let char of text){
if(char >= 'A' && char <= 'Z'){
result += String.fromCharCode((char.charCodeAt(0)-65+k)%26+65);
}else{
result += char;
}
}
document.getElementById("shiftResult").innerText = result;
}

function shiftDecrypt(){
let text = document.getElementById("shiftInput").value.toUpperCase();
let k = parseInt(document.getElementById("shiftKey").value);
let result = "";

for(let char of text){
if(char >= 'A' && char <= 'Z'){
result += String.fromCharCode((char.charCodeAt(0)-65-k+26)%26+65);
}else{
result += char;
}
}
document.getElementById("shiftResult").innerText = result;
}

// ================= Affine Cipher =================

function modInverse(a,m){
for(let x=1;x<m;x++){
if((a*x)%m==1) return x;
}
return 1;
}

function affineEncrypt(){
let text=document.getElementById("affineInput").value.toUpperCase();
let a=parseInt(document.getElementById("keyA").value);
let b=parseInt(document.getElementById("keyB").value);
let result="";

for(let char of text){
if(char>='A'&&char<='Z'){
let x=char.charCodeAt(0)-65;
result+=String.fromCharCode(((a*x+b)%26)+65);
}else{
result+=char;
}
}
document.getElementById("affineResult").innerText=result;
}

function affineDecrypt(){
let text=document.getElementById("affineInput").value.toUpperCase();
let a=parseInt(document.getElementById("keyA").value);
let b=parseInt(document.getElementById("keyB").value);
let a_inv=modInverse(a,26);
let result="";

for(let char of text){
if(char>='A'&&char<='Z'){
let y=char.charCodeAt(0)-65;
result+=String.fromCharCode((a_inv*(y-b+26))%26+65);
}else{
result+=char;
}
}
document.getElementById("affineResult").innerText=result;
}

// ================= RSA (Simple Demo) =================

let n,e=3,d;

function generateRSA(){
let p=parseInt(document.getElementById("p").value);
let q=parseInt(document.getElementById("q").value);
n=p*q;
let phi=(p-1)*(q-1);
d=modInverse(e,phi);

document.getElementById("rsaKeys").innerText=
"Public Key (e,n)=("+e+","+n+")  Private Key (d,n)=("+d+","+n+")";
}

function rsaEncrypt(){
let m=parseInt(document.getElementById("rsaMessage").value);
let c=Math.pow(m,e)%n;
document.getElementById("rsaResult").innerText="Cipher: "+c;
}

function rsaDecrypt(){
let c=parseInt(document.getElementById("rsaMessage").value);
let m=Math.pow(c,d)%n;
document.getElementById("rsaResult").innerText="Message: "+m;
}