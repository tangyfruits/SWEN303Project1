var express = require('express');
var router = express.Router();
var basex = require('basex');
var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
client.execute("OPEN Colenso");
var xquery = "XQUERY declare default element namespace 'http://www.tei-c.org/ns/1.0';"
var test = " (//name[@type='place'])[1] "
var hargod = "declare namespace default ='http://www.tei-c.org/ns/1.0'; for $n in collection('Colenso') let $path := db:path($n) let $name := $n//text() return <result> <path> {$path}</path> <author> {$name}</author></result>"
router.get("/",function(req,res){
  client.execute("XQUERY db:list('Colenso')",

    function (error, result) {
      if(error){ console.error(error);}
      else {
      	var list = result.result
      	var splitlist = list.split("\n")
        res.render('browse', { title: 'Project: Colenso', place: splitlist });
      }
    }
    );
});
module.exports = router;