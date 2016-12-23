
var http = require('http');
var jade = require('jade');
var html2jade = require('html2jade');

http.createServer(function (req, res) {
    res.writeHead(200,{

        // 测试请求头信息
        // 'Content-Type':'text/plain'
        'Content-Type':'text/html'
    });

    html2jade.convertDocument(document,{},function (err, jade) {
        
        }
    )
    
    //1. compile
   /* var fn = jade.compile('div #{course}',{

    });
    var html = fn({course:'jade'});
    */

   //2. jade.render
    /*var html = jade.render('div #{course}',{
        course:'jade render'
    });*/

    // 3. jade.renderFile
    // pretty 返回页面数据格式化参数
    var html = jade.renderFile('index.jade',{
        course:'jade renderFile',
        pretty: true
    });


    res.end(html);
}).listen(1337,'127.0.0.1');

console.log('Server running at 1337');