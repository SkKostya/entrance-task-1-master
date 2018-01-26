module.exports.index = function (req, res) {
  res.send(`
    <html>
      <head>
        <title>Shri 2018</title>
      </head>
      <body>
      	<h1>Hello</h1>
      	<script src="/scripts/test.js"></script>
      </body>
    </html>
    `);
};
