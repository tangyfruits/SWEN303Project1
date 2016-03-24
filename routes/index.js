var express = require('express');
var router = express.Router();
var basex = require('basex');
var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
client.execute("OPEN Colenso");
var tei = "XQUERY declare default element namespace 'http://www.tei-c.org/ns/1.0';"
var tei2 = "XQUERY declare element namespace 'http://www.tei-c.org/ns/1.0';"
var test = " (//name[@type='place'])[1] "
var test2 = "for $n in (collection('Colenso/Hooker/')//tei:p[position() = 1])  // return db:path($n)"
/* GET home page. */
router.get("/",function(req,res){
  client.execute(tei +
    req.query.search_bar2,
//   client.execute("XQUERY declare namespace tei='http://www.tei-c.org/ns/1.0'; " +
// "for $n in (collection('Colenso/Hooker/')//tei:p[position() = 1])" +
// "return db:path($n)",

    function (error, result) {
      if(error){ console.error(error);}
      else {
        console.log(result.result)
        res.render('index', { title: 'Project: Colenso', place: result.result });
      }
    }
    );
});










module.exports = router;
