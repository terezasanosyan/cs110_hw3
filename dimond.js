

const star=function(str) {
let b= '' ;
for (let i=0; i<str; i=i+1) {

    b=b+'*';
   }
   return b;
};
  
  
  const space=function(spc) {
let k= '' ;
for (let i=0; i<spc; i++) {

    k=k+' ';
   }
   return k;
};

  
  
const dimond = function(n) {

  if(n%2 === 0) {  

n = n + 1;

};


for (let i=1; i<=n;i=i+2) {

  console.log (space((n-i)/2) + star(i));

}; 

for (let i=n-2; i>=1;i=i-2) {
	
console.log(space((n-i)/2) + star(i));

};

};



