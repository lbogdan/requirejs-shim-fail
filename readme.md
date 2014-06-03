This is a proof of concept demonstrating the points in this [blog post](http://blog.player.me/case-requirejs/)

I included the grunt file used to compile the scripts. 

Scenario: 

You have a large project. jQuery is used through the whole project, but not all jquery plugins are project-wide. 

Files: 

``shim-only.html`` => Loads magnificpopup only using shim config. 

``wrapped.html`` => Loads magnificpopup, but modified to it's wrapped between define tags. 

Just start with the uncompiled one in /source. I added links for easy nav. 

Everything works except when it's compiled with shim-only. 

I just want to re-iterate the point that I wanted to make: **If it works in Dev, it doesn't mean it will work in Production**. RequireJS is inconsistent. 

edit!
--------
After the blog post and this repo, Tim Branyen helped me out. Instead of calling them with data-main, you have to use recursive inline requires. 

Like this: 

````
<script src="js/vendor/requirejs/require.js"></script>
<script>
require({baseUrl: "js"}, ["common"], function() {
  require(["shim-only"]);
});
</script>
````
