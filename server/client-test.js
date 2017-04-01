var net = require('net');
const protobuf = require('protobufjs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;




var HOST = '127.0.0.1';
var PORT = 4334;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);


    const load_info = protobuf.load('../protocol/proto/device_display.proto').then(function(root){
        var storyMessage = root.lookupType("DeviceDisplayProtocol.DeviceDisplayMessage");

        // var payload = { 
        //     head:{
        //         version: 11,
        //         flowNumber: 3, 
        //         messageType: 1,
        //         sessionNo: 'nsx123',
        //         magicFlag: 'flaggggg'
        //     },
        //     body:{
        //         error: {errType:1,errMsg: '1'},
        //         heartBeatRequest: {hbType:1, msg: '1'},
        //         heartBeatResponse: {hbType:1, msg: '1'},
        //         // displayProductIntro: '1',
        //         displayCountdown: 1,
        //         displayProgress: 1,
        //         displayResult: {type:1, path: 'fdafdsaf'},
        //         // displayQrcode: '1',
        //         // displayScanResult: '1',
        //         // notifyLeave: '1',
        //         // cancelDisplay: '1',
        //         // displayBodyInfo: '1',
        //         // eventResponse: '1'
        //     }
        //  };

        var payload = {
            head:{version:001,flowNumber:2,messageType:9,sessionNo:"0",magicFlag:"22"},
            body:{displayScanResult:{result: true}}
        }

        // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        var errMsg = storyMessage.verify(payload);
        if (errMsg){
            throw Error(errMsg);
        }

        // Create a new message
        var message = storyMessage.fromObject(payload);

        var buffer = storyMessage.encode(message).finish();

        // console.log(ModelServerMessage)

        // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
        client.write(buffer, function(err){
            if (err) throw err;
            console.log("send success");
        });
    });



});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('DATA: ' + data);
    // 完全关闭连接
    // client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('Connection closed');
});