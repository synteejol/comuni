let express = require('express');
let app = express();
app.use(express.static('./dist/comuni'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/comuni/'}
);
});
app.listen(process.env.PORT || 8080);
