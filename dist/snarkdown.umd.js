!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.snarkdown=n()}(this,function(){function e(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function n(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(o,c){function a(e){var n=t[e.replace(/\*/g,"_")[1]||""],r=m[m.length-1]==e;return n?n[1]?(m[r?"pop":"push"](e),n[0|r]):n[0]:e}function l(){for(var e="";m.length;)e+=a(m[m.length-1]);return e}var u,p,s,g,i,f=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,m=[],d="",h=c||{},$=0;for(o=o.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,r){return h[n.toLowerCase()]=r,""}).replace(/^\n+|\n+$/g,"");s=f.exec(o);)p=o.substring($,s.index),$=f.lastIndex,u=s[0],p.match(/[^\\](\\\\)*\\$/)||(s[3]||s[4]?u='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'">'+e(n(s[3]||s[4]).replace(/^\n+|\n+$/g,""))+"</pre>":s[6]?(i=s[6],i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),g=r(e(s[5].replace(/^\s*[>*+.-]/gm,""))),">"===i?i="blockquote":(i=i.match(/\./)?"ol":"ul",g=g.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),u="<"+i+">"+g+"</"+i+">"):s[8]?u='<img src="'+n(s[8])+'" alt="'+n(s[7])+'">':s[10]?(d=d.replace("<a>",'<a href="'+n(s[11]||h[p.toLowerCase()])+'">'),u=l()+"</a>"):s[9]?u="<a>":s[12]||s[14]?(i="h"+(s[14]?s[14].length:"="===s[13][0]?1:2),u="<"+i+">"+r(s[12]||s[15],h)+"</"+i+">"):s[16]?u="<code>"+n(s[16])+"</code>":(s[17]||s[1])&&(u=a(s[17]||"--"))),d+=p,d+=u;return(d+o.substring($)+l()).trim()}var t={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};return r});
//# sourceMappingURL=snarkdown.umd.js.map