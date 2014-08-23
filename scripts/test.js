define( function() {
i=1;
console.log("test.js: geladen");
return {
	say_hello: function () {
		i++;
		return "Hallo Welt!"+i;
	}
}
}
)