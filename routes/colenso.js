var express = require('express');
var router = express.Router();
var basex = require('basex');
var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
client.execute("OPEN Colenso");
var tei = "XQUERY declare default element namespace 'http://www.tei-c.org/ns/1.0';"


router.get("/*",function(req,res){
  var path = req.path;
  console.log(req.path)
  client.execute(tei + ' for $item in collection("Colenso/' + path+ '") return $item',
    function (error, result) {
      if(error){ console.error(error);}
      else {
        res.render('colenso', { title: 'Project: Colenso', place: result.result });
      }
    }
    );
});
module.exports = router;
