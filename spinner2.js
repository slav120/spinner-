let spinner = ["|","/","-","\\","|","/","-","\\","|"];
​
​
function animate(index) {
  if(index === spinner.length) {
    return;
  } 
  setTimeout(function(){
    process.stdout.write("\r" + spinner[index++]);
    animate(index)
  },300)
}
​
animate(0)



/*

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r\|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r\/   '); 
},1200);

setTimeout(() => {
  process.stdout.write('\r\-   '); 
},1400);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
},1600);

setTimeout(() => {
  process.stdout.write('\r\|   '); 
},1800);

*/