(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{13508:function(t,r,e){let a=e(67294),n=a.forwardRef(function({title:t,titleId:r,...e},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},e),t?a.createElement("title",{id:r},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))});t.exports=n},69431:function(t,r,e){let a=e(67294),n=a.forwardRef(function({title:t,titleId:r,...e},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},e),t?a.createElement("title",{id:r},t):null,a.createElement("path",{d:"M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"}))});t.exports=n},97234:function(t,r,e){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(r,{Z:function(){return f}});var n,i,o,s=/^\s+/,h=/\s+$/;function f(t,r){if(r=r||{},(t=t||"")instanceof f)return t;if(!(this instanceof f))return new f(t,r);var e,n,i,o,u,l,c,d,g,b,m,p,_,v,M,y,x,A,k,w,H=(n={r:0,g:0,b:0},i=1,o=null,u=null,l=null,c=!1,d=!1,"string"==typeof(e=t)&&(e=function(t){t=t.replace(s,"").replace(h,"").toLowerCase();var r,e=!1;if(S[t])t=S[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(r=j.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=j.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=j.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=j.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=j.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=j.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=j.hex8.exec(t))?{r:E(r[1]),g:E(r[2]),b:E(r[3]),a:E(r[4])/255,format:e?"name":"hex8"}:(r=j.hex6.exec(t))?{r:E(r[1]),g:E(r[2]),b:E(r[3]),format:e?"name":"hex"}:(r=j.hex4.exec(t))?{r:E(r[1]+""+r[1]),g:E(r[2]+""+r[2]),b:E(r[3]+""+r[3]),a:E(r[4]+""+r[4])/255,format:e?"name":"hex8"}:!!(r=j.hex3.exec(t))&&{r:E(r[1]+""+r[1]),g:E(r[2]+""+r[2]),b:E(r[3]+""+r[3]),format:e?"name":"hex"}}(e)),"object"==a(e)&&(z(e.r)&&z(e.g)&&z(e.b)?(g=e.r,b=e.g,m=e.b,n={r:255*F(g,255),g:255*F(b,255),b:255*F(m,255)},c=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(o=q(e.s),u=q(e.v),p=e.h,_=o,v=u,p=6*F(p,360),_=F(_,100),v=F(v,100),M=Math.floor(p),y=p-M,x=v*(1-_),A=v*(1-y*_),k=v*(1-(1-y)*_),n={r:255*[v,A,x,x,k,v][w=M%6],g:255*[k,v,v,A,x,x][w],b:255*[x,x,k,v,v,A][w]},c=!0,d="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(o=q(e.s),l=q(e.l),n=function(t,r,e){var a,n,i;function o(t,r,e){return(e<0&&(e+=1),e>1&&(e-=1),e<1/6)?t+(r-t)*6*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=F(t,360),r=F(r,100),e=F(e,100),0===r)a=n=i=e;else{var s=e<.5?e*(1+r):e+r-e*r,h=2*e-s;a=o(h,s,t+1/3),n=o(h,s,t),i=o(h,s,t-1/3)}return{r:255*a,g:255*n,b:255*i}}(e.h,o,l),c=!0,d="hsl"),e.hasOwnProperty("a")&&(i=e.a)),i=R(i),{ok:c,format:e.format||d,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:i});this._originalInput=t,this._r=H.r,this._g=H.g,this._b=H.b,this._a=H.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||H.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=H.ok}function u(t,r,e){var a,n,i=Math.max(t=F(t,255),r=F(r,255),e=F(e,255)),o=Math.min(t,r,e),s=(i+o)/2;if(i==o)a=n=0;else{var h=i-o;switch(n=s>.5?h/(2-i-o):h/(i+o),i){case t:a=(r-e)/h+(r<e?6:0);break;case r:a=(e-t)/h+2;break;case e:a=(t-r)/h+4}a/=6}return{h:a,s:n,l:s}}function l(t,r,e){var a,n=Math.max(t=F(t,255),r=F(r,255),e=F(e,255)),i=Math.min(t,r,e),o=n-i;if(n==i)a=0;else{switch(n){case t:a=(r-e)/o+(r<e?6:0);break;case r:a=(e-t)/o+2;break;case e:a=(t-r)/o+4}a/=6}return{h:a,s:0===n?0:o/n,v:n}}function c(t,r,e,a){var n=[N(Math.round(t).toString(16)),N(Math.round(r).toString(16)),N(Math.round(e).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function d(t,r,e,a){return[N(L(a)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16)),N(Math.round(e).toString(16))].join("")}function g(t,r){r=0===r?0:r||10;var e=f(t).toHsl();return e.s-=r/100,e.s=C(e.s),f(e)}function b(t,r){r=0===r?0:r||10;var e=f(t).toHsl();return e.s+=r/100,e.s=C(e.s),f(e)}function m(t){return f(t).desaturate(100)}function p(t,r){r=0===r?0:r||10;var e=f(t).toHsl();return e.l+=r/100,e.l=C(e.l),f(e)}function _(t,r){r=0===r?0:r||10;var e=f(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-(255*(r/100))))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-(255*(r/100))))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-(255*(r/100))))),f(e)}function v(t,r){r=0===r?0:r||10;var e=f(t).toHsl();return e.l-=r/100,e.l=C(e.l),f(e)}function M(t,r){var e=f(t).toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,f(e)}function y(t){var r=f(t).toHsl();return r.h=(r.h+180)%360,f(r)}function x(t,r){if(isNaN(r)||r<=0)throw Error("Argument to polyad must be a positive number");for(var e=f(t).toHsl(),a=[f(t)],n=360/r,i=1;i<r;i++)a.push(f({h:(e.h+i*n)%360,s:e.s,l:e.l}));return a}function A(t){var r=f(t).toHsl(),e=r.h;return[f(t),f({h:(e+72)%360,s:r.s,l:r.l}),f({h:(e+216)%360,s:r.s,l:r.l})]}function k(t,r,e){r=r||6,e=e||30;var a=f(t).toHsl(),n=360/e,i=[f(t)];for(a.h=(a.h-(n*r>>1)+720)%360;--r;)a.h=(a.h+n)%360,i.push(f(a));return i}function w(t,r){r=r||6;for(var e=f(t).toHsv(),a=e.h,n=e.s,i=e.v,o=[],s=1/r;r--;)o.push(f({h:a,s:n,v:i})),i=(i+s)%1;return o}f.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,a=this.toRgb();return t=a.r/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*((r=a.g/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*((e=a.b/255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=R(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=l(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=l(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+a+"%)":"hsva("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=u(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+a+"%)":"hsla("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return c(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){var r,e,a,n,i;return r=this._r,e=this._g,a=this._b,n=this._a,i=[N(Math.round(r).toString(16)),N(Math.round(e).toString(16)),N(Math.round(a).toString(16)),N(L(n))],t&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*F(this._r,255))+"%",g:Math.round(100*F(this._g,255))+"%",b:Math.round(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%)":"rgba("+Math.round(100*F(this._r,255))+"%, "+Math.round(100*F(this._g,255))+"%, "+Math.round(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(H[c(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+d(this._r,this._g,this._b,this._a),e=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var n=f(t);e="#"+d(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,a=this._a<1&&this._a>=0;return!r&&a&&("hex"===t||"hex6"===t||"hex3"===t||"hex4"===t||"hex8"===t||"name"===t)?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString())},clone:function(){return f(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(p,arguments)},brighten:function(){return this._applyModification(_,arguments)},darken:function(){return this._applyModification(v,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(m,arguments)},spin:function(){return this._applyModification(M,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(k,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(A,arguments)},triad:function(){return this._applyCombination(x,[3])},tetrad:function(){return this._applyCombination(x,[4])}},f.fromRatio=function(t,r){if("object"==a(t)){var e={};for(var n in t)t.hasOwnProperty(n)&&("a"===n?e[n]=t[n]:e[n]=q(t[n]));t=e}return f(t,r)},f.equals=function(t,r){return!!t&&!!r&&f(t).toRgbString()==f(r).toRgbString()},f.random=function(){return f.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},f.mix=function(t,r,e){e=0===e?0:e||50;var a=f(t).toRgb(),n=f(r).toRgb(),i=e/100;return f({r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a})},f.readability=function(t,r){var e=f(t),a=f(r);return(Math.max(e.getLuminance(),a.getLuminance())+.05)/(Math.min(e.getLuminance(),a.getLuminance())+.05)},f.isReadable=function(t,r,e){var a,n,i,o,s,h=f.readability(t,r);switch(s=!1,(n=((a=(a=e)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),i=(a.size||"small").toLowerCase(),"AA"!==n&&"AAA"!==n&&(n="AA"),"small"!==i&&"large"!==i&&(i="small"),o={level:n,size:i}).level+o.size){case"AAsmall":case"AAAlarge":s=h>=4.5;break;case"AAlarge":s=h>=3;break;case"AAAsmall":s=h>=7}return s},f.mostReadable=function(t,r,e){var a,n,i,o,s=null,h=0;n=(e=e||{}).includeFallbackColors,i=e.level,o=e.size;for(var u=0;u<r.length;u++)(a=f.readability(t,r[u]))>h&&(h=a,s=f(r[u]));return f.isReadable(t,s,{level:i,size:o})||!n?s:(e.includeFallbackColors=!1,f.mostReadable(t,["#fff","#000"],e))};var S=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},H=f.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(S);function R(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function F(t,r){"string"==typeof(e=t)&&-1!=e.indexOf(".")&&1===parseFloat(e)&&(t="100%");var e,a,n="string"==typeof(a=t)&&-1!=a.indexOf("%");return(t=Math.min(r,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*r,10)/100),1e-6>Math.abs(t-r))?1:t%r/parseFloat(r)}function C(t){return Math.min(1,Math.max(0,t))}function E(t){return parseInt(t,16)}function N(t){return 1==t.length?"0"+t:""+t}function q(t){return t<=1&&(t=100*t+"%"),t}function L(t){return Math.round(255*parseFloat(t)).toString(16)}var j=(i="[\\s|\\(]+("+(n="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",o="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",{CSS_UNIT:RegExp(n),rgb:RegExp("rgb"+i),rgba:RegExp("rgba"+o),hsl:RegExp("hsl"+i),hsla:RegExp("hsla"+o),hsv:RegExp("hsv"+i),hsva:RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function z(t){return!!j.CSS_UNIT.exec(t)}}}]);