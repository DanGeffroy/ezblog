var fs = require('fs');
var colors = require('colors');

console.log("Parsing articles file : " + "src/articles-in.json".cyan);
var articles = JSON.parse(fs.readFileSync('src/articles-in.json', 'utf8'));

articles.forEach(function(article) {
  console.log("- Adding : " + article.title.green);
  var file = fs.readFileSync("src/articles/"+article.file, "utf8");
  article.text = file;
});
console.log("Saving articles file : " + "src/articles.json".cyan);
fs.writeFileSync('./src/articles.json', JSON.stringify(articles, null, 2) , 'utf-8');
