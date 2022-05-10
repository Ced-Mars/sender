const amqp = require("amqplib/callback_api");
var xml2js = require("xml2js");
var fs = require("fs");

const server_path = "amqp://localhost";

var data =[
  {
    "stepStages":[
      {
        "description": "load",
        "id": "1176a0e7ef6dc9aef1e9930a",
        "type": "LOAD.EFFECTOR"
      },
    ],
    "target":"USER"
  },
  {
    "stepStages":[
      {
        "description": "go on home position",
        "id": "2176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.STATION.WORK"
      },
      {
        "description": "go on home position",
        "id": "3176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.APPROACH"
      },
      {
        "description": "go on home position",
        "id": "4176a0e7ef6dc9aef1e9930a",
        "type": "WORK.DRILL"
      },
      {
        "description": "go on home position",
        "id": "5176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.CLEARANCE"
      },
      {
        "description": "go on home position",
        "id": "6176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.STATION.WORK"
      },
      {
        "description": "go on home position",
        "id": "7176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.APPROACH"
      },
      {
        "description": "go on home position",
        "id": "8176a0e7ef6dc9aef1e9930a",
        "type": "WORK.DRILL"
      },
      {
        "description": "go on home position",
        "id": "9176a0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.CLEARANCE"
      },
      {
        "description": "station movement on rail 6",
        "id": "6276a0e8ef6dc9aef1e993a1",
        "type": "MOVE.STATION.TOOL"
      }
    ],
    "target":"ROBOT"
  },
  {
    "stepStages":[
      {
        "description": "unload",
        "id": "1176b0e7ef6dc9aef1e9930a",
        "type": "UNLOAD.EFFECTOR"
      },
      {
        "description": "load",
        "id": "2176b0e7ef6dc9aef1e9930a",
        "type": "LOAD.EFFECTOR"
      },
    ],
    "target":"USER"
  },
  {
    "stepStages":[
      {
        "description": "2go on home position",
        "id": "3176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.STATION.WORK"
      },
      {
        "description": "2go on home position",
        "id": "4176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.APPROACH"
      },
      {
        "description": "go on home position",
        "id": "5176b0e7ef6dc9aef1e9930a",
        "type": "WORK.FASTEN"
      },
      {
        "description": "go on home position",
        "id": "6176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.CLEARANCE"
      },
      {
        "description": "go on home position",
        "id": "7176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.STATION.WORK"
      },
      {
        "description": "go on home position",
        "id": "8176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.APPROACH"
      },
      {
        "description": "go on home position",
        "id": "9176b0e7ef6dc9aef1e9930a",
        "type": "MOVE.ARM.CLEARANCE"
      },
      {
        "description": "station movement on rail 6",
        "id": "6276b0e8ef6dc9aef1e993a1",
        "type": "MOVE.STATION.TOOL"
      }
    ],
    "target":"ROBOT"
  },
  {
    "stepStages":[
      {
        "description": "unload",
        "id": "1176c0e7ef6dc9aef1e9930a",
        "type": "UNLOAD.EFFECTOR"
      },
      {
      "description": "load",
      "id": "2176c0e7ef6dc9aef1e9930a",
      "type": "LOAD.EFFECTOR"
      },
    ],
    "target":"USER"
  },
  {
    "stepStages":[
      {
      "description": "1go on home position",
      "id": "3176c0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.WORK"
      },
      {
      "description": "1go on home position",
      "id": "4176c0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.APPROACH"
      },
      {
      "description": "go on home position",
      "id": "5176c0e7ef6dc9aef1e9930a",
      "type": "WORK.FASTEN"
      },
      {
      "description": "go on home position",
      "id": "6176c0e7ef6dc9aef1e9930a",
      "type": "WORK.FASTEN"
      },
      {
      "description": "go on home position",
      "id": "7176c0e7ef6dc9aef1e9930a",
      "type": "WORK.FASTEN"
      },
      {
      "description": "go on home position",
      "id": "8176c0e7ef6dc9aef1e9930a",
      "type": "MOVE.ARM.CLEARANCE"
      },
      {
      "description": "go on home position",
      "id": "9176c0e7ef6dc9aef1e9930a",
      "type": "MOVE.STATION.TOOL"
      }
    ],
    "target":"ROBOT"
  },
  {
    "stepStages":[
      {
        "description": "unload",
        "id": "6276c0e8ef6dc9aef1e993a1",
        "type": "UNLOAD.EFFECTOR"
      }
    ],
    "target":"USER"
  },
];

var data2 =
[
  [
    {
      "id": "1176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "2176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "3176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "4176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "5176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "7176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "8176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "9176a0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6276a0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ],
  [
    {
      "id": "1176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "2176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "3176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "4176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "5176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "7176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "8176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "9176b0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6276b0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ],
  [
    {
      "id": "1176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "2176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "3176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "4176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "5176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "7176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "8176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "9176c0e7ef6dc9aef1e9930a",
      "status": "Success"
    },
    {
      "id": "6276c0e8ef6dc9aef1e993a1",
      "status": "Success"
    }
  ]
];

const start ={
  id: "begin",
  status:"SUCCESS",
};

const end = {
  id: "end",
  status:"SUCCESS",
};

//Connexion to rabbitMQ server
try {
  var exchange = 'mars';
  var key = 'hmi.sequencer.request';
  var key1 = 'sequencer.report.process.all';
  var key2 = 'sequencer.report.process.status';
  var key3 = 'sequencer.request.hmi';
  var key4 = 'hmi.sequencer.report';
  //Creating connection with rabbitMQ server
  amqp.connect(server_path, function(error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
      
  
      channel.assertExchange(exchange, 'topic', {
        durable: false
      });
  
      channel.assertQueue('', {
        exclusive: true
      }, function(error2, q) {
        if (error2) {
          throw error2;
        }
        console.log(' [*] Waiting for logs. To exit press CTRL+C');
        channel.bindQueue(q.queue, exchange, key);
        channel.bindQueue(q.queue, exchange, key4);
        
        channel.consume(q.queue, function(msg) {
          if(msg.fields.routingKey == key){
            channel.publish(exchange, key2, Buffer.from(JSON.stringify(start)));
            channel.publish(exchange, key1, Buffer.from(JSON.stringify(data)));
            console.log(" [x] Sent %s:'%s'", key1, JSON.stringify(data));
            var j = 0;
            var i = 0;
            const interval = setInterval(function() {
              if(i < data2.length){
                if(j < data2[i].length){
                  console.log("sent :" + JSON.stringify(data2[i][j]));
                  channel.publish(exchange, key2, Buffer.from(JSON.stringify(data2[i][j])));
                  if(j == 0){
                    console.log("sent :" + JSON.stringify(data2[i][0]))
                    channel.publish(exchange, key3, Buffer.from(JSON.stringify(data2[i][0])));
                  }
                  j++;
                }else{
                  j = 0;
                  i++;
                }
              }else{
                console.log("déco");
                clearInterval(interval);
                channel.publish(exchange, key2, Buffer.from(JSON.stringify(end)));
              }
            }, 3000);

          }else{
            console.log("Message reçu en réponse action utilisateur : ", JSON.parse(msg.content));
          }
        }, {
          noAck: true
        });

      });
    });
  });
  
} catch (e) {
  console.error(e);
}
