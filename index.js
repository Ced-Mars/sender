const amqp = require("amqplib/callback_api");
var xml2js = require("xml2js");
const fs = require("fs");
const config = require("config");

const server_path = "amqp://localhost";

let build_process;

//get config data
try {
  //build_process = config.get('build_process_2rail');

  build_process = config.get('build_process_invented');
} catch (error) {
  console.log(" Error loading config data");
  process.exit(1);
}

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
        channel.bindQueue(q.queue, exchange, "request.hmi", {'publisher' : "sequencerHMI", 'path' : "/sequence/run"});
        channel.bindQueue(q.queue, exchange, "report.sequencer.hmi", {'publisher': 'buildProcessorHMI'});
        channel.bindQueue(q.queue, exchange, "report.sequencer.hmi", {'publisher': 'sequencerHMI'});
        channel.consume(q.queue, function(msg) {
          //console.log(msg);
          if(msg.fields.routingKey == "request.hmi"){
            if(msg.properties.headers.path == "/sequence/run"){
              channel.publish(exchange, "report.hmi", Buffer.from(JSON.stringify(build_process.buildProcess)), { headers: {publisher : "sequencer", path : "/buildProcess/all", "report_topic": "report.sequencer.hmi"}});
              var j = 0;
              var i = 0;
              var json_data_to_send = {};
              console.log("build process : ", build_process.buildProcess.length);
              console.log("test", build_process.buildProcess[0].uid);
              const interval = setInterval(function() {
                if(i < build_process.buildProcess.length){
                  if(j == 0){
                    //Beginning of an action
                    json_data_to_send.uid = build_process.buildProcess[i].uid;
                    json_data_to_send.status = "WAITING";
                    channel.publish(exchange, 'report.hmi', Buffer.from(JSON.stringify(json_data_to_send)), { headers: {publisher : "sequencer", path : "/buildProcess/status", "report_topic": "report.sequencer.hmi"}});
                    if(build_process.buildProcess[i].assets.some(e => e.uid === "human"))
                      channel.publish(exchange, 'sequencer.request', Buffer.from(JSON.stringify(json_data_to_send)), { headers: {publisher : "sequencer", path : "/sequencer/manipulation", "report_topic": "report.sequencer.hmi"}});
                    j+=1;
                  }else if (j == 1){
                    //Success of an action
                    json_data_to_send.uid = build_process.buildProcess[i].uid;
                    json_data_to_send.status = "SUCCESS";
                    channel.publish(exchange, 'report.hmi', Buffer.from(JSON.stringify(json_data_to_send)), { headers: {publisher : "sequencer", path : "/buildProcess/status", "report_topic": "report.sequencer.hmi"}});
                    if(build_process.buildProcess[i].assets.some(e => e.uid === "human"))
                      channel.publish(exchange, 'sequencer.request', Buffer.from(JSON.stringify(json_data_to_send)), { headers: {publisher : "sequencer", path : "/sequencer/manipulation", "report_topic": "report.sequencer.hmi"}});
                    j = 0;
                    i+=1;
                  }else{
                    console.log("j is not 1 or 0");
                  }
                  console.log("data sent : ", json_data_to_send);
                }else{
                  console.log("déco");
                  clearInterval(interval);
                }
              }, 500);
            }else{
              console.log("Routing path unknwown");
            }
          }else if (msg.fields.routingKey == "report.sequencer.hmi"){
            console.log("Report message received from hmi", msg.properties.headers.publisher);
          }else{
            console.log("Routing key not recognized", msg.fields.routingKey);
          }
        });
      });
    }, { noAck:true});
  });
 
} catch (e) {
  console.error(e);
}

