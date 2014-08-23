requirejs.config(
	{
    "baseUrl": "/~frank.adler/scripts",
    "paths": {
      //jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
      jquery:  "/~frank.adler/lib/jquery-2.1.1"  
      }
});

// Load the main app module to start the app
requirejs(["test_wrapper"]);