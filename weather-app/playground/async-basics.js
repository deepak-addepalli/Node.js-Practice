console.log('Starting app');

setTimeout(() => {
  console.log('Inside call back');
},2000);

setTimeout(() => {
  console.log('Inside call back2');
},0);

console.log('Finishing up');
