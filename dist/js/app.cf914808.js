(function(t){function n(n){for(var e,r,o=n[0],c=n[1],u=n[2],f=0,h=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&h.push(l[r][0]),l[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);a&&a(n);while(h.length)h.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],e=!0,o=1;o<i.length;o++){var c=i[o];0!==l[c]&&(e=!1)}e&&(s.splice(n--,1),t=r(r.s=i[0]))}return t}var e={},l={app:0},s=[];function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,n,i){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(i,e,function(n){return t[n]}.bind(null,e));return i},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var a=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";var e=i("85ec"),l=i.n(e);l.a},"07e1":function(t,n,i){"use strict";var e=i("2acc"),l=i.n(e);l.a},1:function(t,n){},2:function(t,n){},"2acc":function(t,n,i){},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),l=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container"},[i("div",{staticClass:"number"},[t._v("第"+t._s(t.n)+"手")]),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"row"},[i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(0,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(1,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(2,n)}}})],1),i("div",{staticClass:"row"},[i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(3,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(4,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(5,n)}}})],1),i("div",{staticClass:"row"},[i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(6,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(7,n)}}}),i("Cell",{attrs:{m:t.n,finished:t.finished},on:{click:function(n){return t.onClickCell(8,n)}}})],1)]),i("div",{staticClass:"victory"},[t._v(t._s(null===t.result?"胜负未分":"胜负已分："+t.text+"赢了"))])])},s=[],r=(i("d81d"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"cell",on:{click:t.onClickSelf}},[t.a?[t._v(t._s(t.text))]:void 0],2)])}),o=[],c={props:["m","finished"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""===this.text&&(this.finished||(this.a=!0,this.text=this.m%2===0?"X":"O",this.$emit("click",this.text)))}}},u=c,a=(i("07e1"),i("2877")),f=Object(a["a"])(u,r,o,!1,null,null,null),h=f.exports,d=(i("3022"),i("d485"),{components:{Cell:h},data:function(){return{n:0,text:null,map:[[null,null,null],[null,null,null],[null,null,null]],result:null,finished:!1}},methods:{onClickCell:function(t,n){this.text=n,this.map[Math.floor(t/3)][t%3]=n,this.n=this.n+1,this.tell()},tell:function(){for(var t=0;t<2;t++)null!==this.map[t][0]&&this.map[t][0]===this.map[t][1]&&this.map[t][1]===this.map[t][2]&&(this.result=!0,this.finished=!0);for(var n=0;n<2;n++)null!==this.map[0][n]&&this.map[0][n]===this.map[1][n]&&this.map[1][n]===this.map[2][n]&&(this.result=!0,this.finished=!0);null!==this.map[0][0]&&this.map[0][0]===this.map[1][1]&&this.map[1][1]===this.map[2][2]&&(this.result=!0,this.finished=!0),null!==this.map[0][2]&&this.map[0][2]===this.map[1][1]&&this.map[1][1]===this.map[2][0]&&(this.result=!0,this.finished=!0)}}}),p=d,m=(i("034f"),Object(a["a"])(p,l,s,!1,null,null,null)),C=m.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(C)}}).$mount("#div1")},"85ec":function(t,n,i){}});
//# sourceMappingURL=app.cf914808.js.map