var express = require('express');
var router = express.Router();
var basex = require('basex');
var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
client.execute("OPEN Colenso");
var tei = "XQUERY declare default element namespace 'http://www.tei-c.org/ns/1.0';"
var tei2 = "XQUERY declare element namespace 'http://www.tei-c.org/ns/1.0';"
var tei3 = "XQUERY declare namespace tei='http://www.tei-c.org/ns/1.0'; "
router.get("/",function(req,res){
  if(req.query.search_bar != undefined){
    console.log(req.query.search_bar)
  client.execute(tei +
"for $v in .//TEI[. contains text "+req.query.search_bar+"] return db:path($v)",


    function (error, result) {
      if(error){ console.error(error);}
      else {
        var list = result.result
        console.log(list)
        var splitlist = list.split("\n")
        res.render('index', { title: 'Project: Colenso', place: splitlist });
      }
    }
    );
}
else
  client.execute("XQUERY declare namespace tei='http://www.tei-c.org/ns/1.0'; " +
"for $n in (collection('Colenso/Hooker/')//tei:p[position() = 1])" +
"return db:path($n)",

    function (error, result) {
      if(error){ console.error(error);}
      else {

        var list = result.result
        console.log(list)
        var splitlist = list.split("\n")
        res.render('index', { title: 'Project: Colenso', place: "" });
      }
    }
    );
}



);










module.exports = router;
