var express = require('express');
var router = express.Router();
var basex = require('basex');
var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");
client.execute("OPEN Colenso");

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