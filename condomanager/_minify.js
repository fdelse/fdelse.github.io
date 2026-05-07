const fs=require('fs'),path=require('path'),base=__dirname;
let css=fs.readFileSync(path.join(base,'images/global.css'),'utf8');
const slots=[];
css=css.replace(/url\((['"]?)(data:[^)]+)\1\)/g,function(m){slots.push(m);return '__D'+(slots.length-1)+'__';});
css=css.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ')
       .replace(/\s*([{}:;,>~+])\s*/g,function(_,c){return c;}).replace(/;}/g,'}');
css=css.replace(/__D(\d+)__/g,function(_,i){return slots[+i];}).trim();
fs.writeFileSync(path.join(base,'images/global.min.css'),css,'utf8');
let html=fs.readFileSync(path.join(base,'index.html'),'utf8');
html=html.replace(/<style>[\s\S]*?<\/style>/,'<style>'+css+'</style>');
fs.writeFileSync(path.join(base,'index.html'),html,'utf8');
console.log('Done. CSS: '+css.length+' bytes');
