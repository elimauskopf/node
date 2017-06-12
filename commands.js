var fs = require('fs');
//var path = require('path');



module.exports.pwd =
  function (){

      wd = process.cwd();
      process.stdout.write(wd.toString().trim())

  }

module.exports.ls = function(done){

     var output = fs.readdirSync(process.cwd()).toString();
     done(output);
  }


module.exports.echo = function(aString,done){
  var output = aString;
  done(output);
}

module.exports.env_path = function(file,done){
  var output = process.env.PATH;
  done(output);
}

module.exports.cat = function(file,done){
  var fullpath = __dirname +'/' + file;
  console.log(file);
  fs.readFile(file, function (err, data) {
    console.log(file);
    if(err) process.stdout.write(err.message);
    var output = data.toString();
    done(output);

  })
}


