// 模拟生产路径
var express = require("express");
var app = express();
var history = require("connect-history-api-fallback");
app.use(
  history({
    htmlAcceptHeaders: ["textml", "application/xhtml+xml"],
    rewrites: [
      {
        from: /^\/aa\/bb\/(?!static)/,
        to: function(context) {
          return "/aa/bb/index.html";
        }
      }
    ]
  })
);

app.listen(3003, function() {
  console.log(
    "server started at listening on: localhost:3000/aa/bb/,please enter ctrl^c exit"
  );
});
