//console.log(process);
//console.log(Object.keys(process));
//console.log(process.cwd());
const commands = require('./commands');

var done = function(output){
  process.stdout.write(output.toString());
  process.stdout.write('\nprompt > ');
}

//output a prompt
process.stdout.write('prompt >')


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  //console.log(data);
  data = data.toString().trim();
  //console.log(data);
  data = data.split(' ');
  var cmd = data[0].toString().trim();
  var str = data.splice(1).join(' ').trim();
  console.log(data);


  if (cmd === 'date'){
     var date = new Date();
     process.stdout.write(date.toString().trim());

  }

  else if( cmd ==='pwd'){
    commands.pwd(str,done);
  }

  else if(cmd === 'ls'){
    commands.ls(done);
  } else if (cmd === 'echo'){
    commands.echo(str,done);
  } else if (cmd === '$PATH'){
    commands.env_path(str);
  } else if (cmd ==='cat'){
    commands.cat(str,done);
  }

  // else {
  //   process.stdout.write('You typed: ' + cmd);

  // }
  //  process.stdout.write('\nprompt > ');


});
