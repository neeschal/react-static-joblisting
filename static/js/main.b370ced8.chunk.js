(this["webpackJsonpreact-static-joblisting"]=this["webpackJsonpreact-static-joblisting"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},12:function(e,o,t){"use strict";t.r(o);var a=t(4),s=t(1),n=t(3),l=t.n(n),i=(t(9),t(0));function c(e){var o=e.joblists,t=e.searchString;return Object(i.jsx)(i.Fragment,{children:o.filter((function(e){return""===t||e.role.toLowerCase().includes(t.toLowerCase())||e.languages.toString().toLowerCase().includes(t.toLowerCase())?e:void 0})).map((function(e){return Object(i.jsxs)("div",{className:e.featured?"job-list featured":"job-list",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{src:e.logo,alt:"photosnap"})}),Object(i.jsxs)("div",{className:"job-description",children:[Object(i.jsxs)("div",{className:"job-head",children:[Object(i.jsx)("h5",{children:e.company}),e.new?Object(i.jsx)("span",{className:"new",children:"New!"}):"",e.featured?Object(i.jsx)("span",{className:"feature",children:"Featured"}):""]}),Object(i.jsxs)("div",{className:"job-title",children:[Object(i.jsx)("h4",{children:e.position}),Object(i.jsxs)("ul",{className:"job-location",children:[Object(i.jsx)("li",{children:e.postedAt}),Object(i.jsx)("li",{children:e.contract}),Object(i.jsx)("li",{children:e.location})]})]})]}),Object(i.jsx)("div",{className:"job-tag",children:Object(i.jsxs)("div",{className:"tag-list",children:[Object(i.jsx)("span",{children:e.role}),e.languages.map((function(e){return Object(i.jsx)("span",{children:e},e)}))]})})]},e.id)}))})}function r(){var e=t(11),o=Object(s.useState)(""),n=Object(a.a)(o,2),l=n[0],r=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{className:"banner"}),Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("div",{className:"text-input",children:Object(i.jsx)("input",{onChange:function(e){r(e.target.value)},value:l,type:"text"})}),Object(i.jsx)("span",{className:"clear",onClick:function(){r("")},children:"Clear"})]})]}),Object(i.jsx)("section",{className:"job-lists",children:Object(i.jsx)(c,{joblists:e,searchString:l})})]})}l.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))},9:function(e,o,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.b370ced8.chunk.js.map