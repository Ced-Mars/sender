const amqp = require("amqplib/callback_api");
var xml2js = require("xml2js");
var fs = require("fs");

const server_path = "amqp://localhost";

var body =
{
  "buildProcess":[
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
      ],
      "description": "load",
      "uid": "1176a0e7ef6dc9aef1e9930a",
      "type": "LOAD.EFFECTOR"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "2176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.WORK"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "3176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.APPROACH"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "4176a0e7ef6dc9aef1e9930a",
      "type": "WORK.DRILL"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "5176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.CLEARANCE"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "6176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.WORK"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "7176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.APPROACH"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "8176a0e7ef6dc9aef1e9930a",
      "type": "WORK.DRILL"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "9176a0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.CLEARANCE"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "station movement on rail 6",
      "uid": "6276a0e8ef6dc9aef1e993a1",
      "type": "MOVE.STATION.TOOL"
    },
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
      ],
      "description": "unload",
      "uid": "1176b0e7ef6dc9aef1e9930a",
      "type": "UNLOAD.EFFECTOR"
    },
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
    ],
      "description": "load",
      "uid": "2176b0e7ef6dc9aef1e9930a",
      "type": "LOAD.EFFECTOR"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "2go on home position",
      "uid": "3176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.WORK"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "2go on home position",
      "uid": "4176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.APPROACH"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "5176b0e7ef6dc9aef1e9930a",
      "type": "WORK.FASTEN"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "6176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.CLEARANCE"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "7176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.WORK"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "8176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.APPROACH"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "go on home position",
      "uid": "9176b0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.CLEARANCE"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
      "description": "station movement on rail 6",
      "uid": "6276b0e8ef6dc9aef1e993a1",
      "type": "MOVE.STATION.TOOL"
    },
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
    ],
      "description": "unload",
      "uid": "1176c0e7ef6dc9aef1e9930a",
      "type": "UNLOAD.EFFECTOR"
    },
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
    ],
    "description": "load",
    "uid": "2176c0e7ef6dc9aef1e9930a",
    "type": "LOAD.EFFECTOR"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "1go on home position",
    "uid": "3176c0e7ef6dc9aef1e9930a",
    "type": "MOVE.STATION.WORK"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "1go on home position",
    "uid": "4176c0e7ef6dc9aef1e9930a",
    "type": "MOVE.ARM.APPROACH"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "go on home position",
    "uid": "5176c0e7ef6dc9aef1e9930a",
    "type": "WORK.FASTEN"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "go on home position",
    "uid": "6176c0e7ef6dc9aef1e9930a",
    "type": "WORK.FASTEN"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "go on home position",
    "uid": "7176c0e7ef6dc9aef1e9930a",
    "type": "WORK.FASTEN"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "go on home position",
    "uid": "8176c0e7ef6dc9aef1e9930a",
    "type": "MOVE.ARM.CLEARANCE"
    },
    {
      "assets":[
        {
          "description": "rail splicing robotic cell",
          "interface": "PROXY",
          "uid": "mars"
        }
      ],
    "description": "go on home position",
    "uid": "9176c0e7ef6dc9aef1e9930a",
    "type": "MOVE.STATION.TOOL"
    },
    {
      "assets": [
        {
            "description": "robot operator",
            "interface": "HMI",
            "uid": "human"
        },
        {
            "description": "rail splicing robotic cell",
            "interface": "PROXY",
            "uid": "mars"
        }
      ],
      "description": "unload",
      "uid": "6276c0e8ef6dc9aef1e993a1",
      "type": "UNLOAD.EFFECTOR"
    }
  ]
}


var data2 =
[
  [
    {
      "uid": "1176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "2176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "3176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "4176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "5176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "7176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "8176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "9176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6276a0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ],
  [
    {
      "uid": "1176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "2176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "3176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "4176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "5176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "7176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "8176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "9176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6276b0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ],
  [
    {
      "uid": "1176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "2176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "3176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "4176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "5176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "7176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "8176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "9176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "uid": "6276c0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ]
];

//Connexion to rabbitMQ server
try {
  var exchange = 'mars';
  //Creating connection with rabbitMQ server
  amqp.connect(server_path, function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
     
 
      channel.assertExchange(exchange, 'headers', {
        durable: false
      });
 
      channel.assertQueue('', { exclusive:true }, function(error2, q) {
        if (error2) {
          throw error2;
        }
        console.log(' [*] Waiting for logs. To exit press CTRL+C');
        channel.bindQueue(q.queue, exchange, "hmi.request", {'publisher' : "sequencerHMI", 'path' : "/sequence/run"});
        channel.consume(q.queue, function(msg) {
          console.log(msg);
          if(msg.properties.headers.path == "/sequence/run"){
            channel.publish(exchange, "sequencer.report", Buffer.from(JSON.stringify(body.buildProcess)), { headers: {publisher : "sequencer", path : "/buildProcess/all"}});
            var j =0;
            var i = 0;
            const interval = setInterval(function() {
              if(i < data2.length){
                if(j < data2[i].length){
                  channel.publish(exchange, 'sequencer.report', Buffer.from(JSON.stringify(data2[i][j])), { headers: {publisher : "sequencer", path : "/buildProcess/status"}});
                  if(j == 0){
                    channel.publish(exchange, 'sequencer.report', Buffer.from(JSON.stringify(data2[i][0])), { headers: {publisher : "sequencer", path : "/buildProcess/status"}});
                    channel.publish(exchange, 'sequencer.request', Buffer.from(JSON.stringify(data2[i][0])), { headers: {publisher : "sequencer", path : "/sequencer/manipulation"}});
                  }
                  j++;
                }else{
                  j = 0;
                  i++;
                }
              }else{
                console.log("déco");
                clearInterval(interval);
              }
            }, 1000);
          }else{
            console.log("Routing path unknwown");
          }
 
        });
       
 
      });
    }, { noAck:true});
  });
 
} catch (e) {
  console.error(e);
}

