(this.webpackJsonptexteditor=this.webpackJsonptexteditor||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),r=a.n(n),o=(a(22),a(10)),l=a(8),i=a(0);function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/About",children:"About"})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(i.jsxs)("div",{className:"form-check form-switch mx-1 text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleTheme}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}a(29);function b(e){var t=Object(c.useState)("Enter text here..."),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsxs)("div",{className:"mb-3 mt-3",children:[Object(i.jsx)("h3",{children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},id:"txtbox",rows:"8",onKeyDown:function(e){13===e.keyCode&&console.log("You pressed the Enter key!")}})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Text has been converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Text has been converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){n(""),e.showAlert("Text has been cleared","success")},children:"Clear"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Text has been coppied to clipboard","success")},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=new Set(s.split(" ")),a=Array.from(t).join(" ");n(a),e.showAlert("Unwanted spaces has been removed","success")},children:"Remove Unwanted Space"})]}),Object(i.jsxs)("div",{className:"container text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("h3",{className:"mt-2",children:"Text Summary"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:s.length>0?s.trim().split(" ").length:0})," words | ",Object(i.jsx)("strong",{children:s.length})," characters"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:.008*(s.length>0?s.trim().split(" ").length:0)})," Minutes read"]}),Object(i.jsx)("h3",{className:"mt-2",children:"Preview"}),Object(i.jsx)("p",{className:"border border-".concat("light"===e.mode?"dark":"light"," bg-").concat(e.mode),children:s})]})]})}function h(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})})}var j=a(2);function m(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#5c5c5c":"#d1d1d1"},a={color:(e.mode,"black"),backgroundColor:"dark"===e.mode?"#cfcfcf":"#ffffff"};return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(i.jsx)("strong",{children:"Developed By "})})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:a,children:Object(i.jsx)("strong",{children:"Pranav Patil"})})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(i.jsx)("strong",{children:"Free to use "})})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:a,children:"TextEditor is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(i.jsx)("strong",{children:"Browser Compatible "})})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:a,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}function x(){return Object(i.jsx)("div",{})}var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(o.a)(n,2),u=r[0],p=r[1],O=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1e3)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{title:"TextEditor",mode:a,toggleTheme:function(){"dark"===a?(s("light"),document.body.style.backgroundColor="#b5b5b5",O("Light mode has been enabled","success")):(s("dark"),document.body.style.backgroundColor="#1a333d",O("Dark mode has been enabled","success"))}}),Object(i.jsx)(h,{alert:u}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(m,{mode:a})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{heading:"Enter the text to start editing...",mode:a,showAlert:O})}),Object(i.jsx)(j.a,{component:"{NotFound}",status:404})]})})]}),Object(i.jsx)(x,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.fc450a37.chunk.js.map