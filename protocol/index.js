const protobuf = require('protobufjs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const protobuf = require('../node_modules/protobufjs/dist/protobuf.js');

const load_info = protobuf.load('./protocol/proto/model_server.proto').then(function(root){
    var ModelServerMessage = root.lookupType("ModelServerProtocol.ModelServerMessage");

    console.log(ModelServerMessage)
});

