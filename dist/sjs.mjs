var r=function(n,e){for(var t in n){if(t===e)return[t];if(n[t]&&"object"==typeof n[t]){var u=r(n[t],e);if(u)return u.unshift(t),u}}},n=function(r,n){return n.reduce(function(r,n){return r&&r[n]},r)},e=function(r,n){if("array-simple"===n)return JSON.stringify(r);for(var e="",t=0,u=r;t<u.length;t+=1)e+=n(u[t])+",";return"["+e.substr(0,e.length-1)+"]"},t=function(r){var n=r||new RegExp('\\n|\\r|\\t|\\"|\\\\',"gm");return function(r){return r.replace(n,function(r){return"\\"+r})}},u=function(r){var n=new Set(["number","string","boolean","undefined","array-simple","function"]);JSON.stringify(r,function(r,e){var t=Array.isArray(e);if("object"!=typeof e||t){if(t){if(n.has(e[0])||n.has(typeof e[0]))return;throw new Error('Expected either "array-simple" or a function. received '+e)}if("function"!=typeof e&&!n.has(e))throw new Error('Expected one of: "number", "string", "boolean", "undefined". received '+e)}return e})},a=function(t){u(t);var a=function(e){var t,a,i,o,f={},c=new Map,s="",p=JSON.stringify(e,function(n,t){var a=Array.isArray(t);return("object"!=typeof t||a)&&(a&&c.set(n,t[0]),u(t),f[n]=r(e,n),s+='"'+n+'"|'),t});return{map:f,arrais:c,props:s,str:p,queue:(t=e,a=["string","number","boolean","array"],i=[],o=new Set(a),function r(e,u){void 0===u&&(u=[]);var a=Array.isArray(e);if(!o.has(n(t,u))&&!a)return Object.keys(e).map(function(n){return r(e[n],u.concat([n]))});i.push({isArray:a,method:a&&e[0],path:[u].flat(),type:e})}(t),i)}}(t),i=a.queue,o=function(r,n){var e=[],t=r.replace(n,function(r){switch(r){case'"string"':case'"undefined"':return'"__par__"';case'"number"':case'"boolean"':case'["array-simple"]':case"[null]":return"__par__";default:var n=r.match(/(?<=\").+?(?=\")/)[0];return e.push(n),r}}).split("__par__");return{queue:e,chunks:t}}(a.str,new RegExp(a.props+'"(string|number|boolean|undef)"|\\[(.*?)\\]',"gm")).chunks,f=o[o.length-1],c=function(r){return function(n,e){if(void 0!==n)return n;var t=r[e];return 34===t.charCodeAt(t.length-1)?n:'"'+n+'"'}}(o),s=i.length;return function(r){for(var t="",u=0;u!==s;){var a=i[u],p=a.method,h=a.isArray,y=n(r,a.path),l=h?e(y,p):y;t+=o[u]+c(l,u),u+=1}return t+f}};export{a as sjs,t as escape};
//# sourceMappingURL=sjs.mjs.map
