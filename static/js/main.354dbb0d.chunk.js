(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),u=n(17),r=n.n(u),s=(n(23),n(18)),o=n(3),j=(n(24),n(25),n(0));function i(e){var t=e.currencyName,n=e.selectedCurrency,c=e.onChangeCurrency,a=e.sum,u=e.onChangeSum;return Object(j.jsxs)("div",{className:"currency",children:[Object(j.jsx)("input",{className:"input",type:"number",value:a,onChange:u}),Object(j.jsx)("select",{value:n,onChange:c,children:t.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})]})}n(27);var b="https://www.cbr-xml-daily.ru/latest.js";var l=function(){var e,t,n=Object(c.useState)([]),a=Object(o.a)(n,2),u=a[0],r=a[1],l=Object(c.useState)([]),h=Object(o.a)(l,2),O=h[0],f=h[1],m=Object(c.useState)([]),d=Object(o.a)(m,2),g=d[0],y=d[1],C=Object(c.useState)([]),p=Object(o.a)(C,2),v=p[0],x=p[1],S=Object(c.useState)(),N=Object(o.a)(S,2),w=N[0],k=N[1],F=Object(c.useState)(!0),E=Object(o.a)(F,2),B=E[0],I=E[1];return console.log(B),B?(t=w,e=w*v):(e=w,t=w/v),Object(c.useEffect)((function(){fetch(b).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];r([e.base].concat(Object(s.a)(Object.keys(e.rates)))),f(e.base),y(t),x(e.rates[t])}))}),[]),Object(c.useEffect)((function(){null!=O&&null!=g&&fetch("".concat(b,"?base=").concat(O,"&symbols=").concat(g)).then((function(e){return e.json()})).then((function(e){return x(e.rates[g])}))}),[O,g]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Currency Converter"}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(i,{currencyName:u,selectedCurrency:O,onChangeCurrency:function(e){I(!1),f(e.target.value)},sum:t,onChangeSum:function(e){k(e.target.value),I(!0)}}),Object(j.jsx)("span",{className:"equal",children:"="}),Object(j.jsx)(i,{currencyName:u,selectedCurrency:g,onChangeCurrency:function(e){I(!0),y(e.target.value)},sum:e,onChangeSum:function(e){k(e.target.value),I(!1)}})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),u(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),h()}},[[46,1,2]]]);
//# sourceMappingURL=main.354dbb0d.chunk.js.map