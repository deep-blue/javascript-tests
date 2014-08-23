//console.log("i="+i);
console.log('Starte Testskripte');
require(["test"],function(test) {
console.log(test.say_hello());
})
require(["test"],function(bla) {
console.log(bla.say_hello());
})
require(["jquery"],function(jq) {
//jq("h1").html()="bla";
console.log(jq);
})
//console.log("i="+i);