const net = require('net');

const protobuf = require('protobufjs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const HOST = '127.0.0.1';
const PORT = 4334;

var server = net.createServer();
server.listen(PORT, HOST);
console.log('Server listening on ' + HOST + ':' + PORT);

server.on('connection', function(sock) {

    console.log('CONNECTED: ' +
         sock.remoteAddress +':'+ sock.remotePort);


    // 为这个socket实例添加一个"data"事件处理函数
    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // 回发该数据，客户端将收到来自服务端的数据
        // sock.write('You said "' + data + '"');


        const load_info = protobuf.load('../protocol/proto/device_display.proto').then(function(root){
	        var storyMessage = root.lookupType("DeviceDisplayProtocol.DeviceDisplayMessage");
			var message = storyMessage.decode(data);
			console.log(message);
	        
	    });


    });

    // 为这个socket实例添加一个"close"事件处理函数
    sock.on('close', function(data) {
        console.log('CLOSED: ' +
            sock.remoteAddress + ' ' + sock.remotePort);
    });
});