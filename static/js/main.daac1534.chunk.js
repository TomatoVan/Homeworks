(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{13:function(e,t,r){e.exports={title:"HW1_title__pxSCa"}},20:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(12),i=r.n(s),c=(r(20),r(9)),o=r.n(c),l=r(3),j=r.n(l),d=r(0),b=function(e){return Object(d.jsxs)("div",{className:j.a.message,children:[Object(d.jsx)("img",{src:e.avatar,alt:"post ava"}),Object(d.jsx)("div",{className:j.a.speechBubble}),Object(d.jsxs)("div",{className:j.a.postBlock,children:[Object(d.jsx)("h3",{className:j.a.name,children:e.name}),Object(d.jsx)("div",{className:j.a.text,children:e.message}),Object(d.jsx)("div",{className:j.a.time,children:e.time})]})]})},u=r(13),m=r.n(u),_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",f="some text",O="22:00";var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:m.a.title,children:"homeworks 1"}),Object(d.jsx)(b,{avatar:_,name:h,message:f,time:O}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},p=r(2),v=r(5),g=r.n(v);var k=function(e){return Object(d.jsxs)("div",{className:g.a.wrapper,children:[Object(d.jsx)("span",{className:g.a.name,children:e.affair.name}),Object(d.jsx)("span",{className:g.a[e.affair.priority],children:e.affair.priority}),Object(d.jsx)("button",{className:g.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(a.useState)(C),t=Object(p.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)("all"),i=Object(p.a)(s,2),c=i[0],o=i[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(r,c);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=r(15),y=r(6),S=r.n(y),E=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,s=e.totalUsers,i=e.onEnter,c=n?S.a.error:S.a.notError;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:r,onKeyDown:i,className:c}),Object(d.jsx)("button",{onClick:a,className:S.a.button,disabled:!t,children:"add"}),Object(d.jsx)("span",{children:s}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:S.a.errorText,children:n})})]})},G=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),s=Object(p.a)(n,2),i=s[0],c=s[1],o=Object(a.useState)(""),l=Object(p.a)(o,2),j=l[0],b=l[1],u=function(){r(i),c(""),alert("Hello ".concat(i,"!"))},m=t.length;return Object(d.jsx)(E,{name:i,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(c(t),b("")):(c(""),b("name is required!"))},addUser:u,error:j,totalUsers:m,onEnter:function(e){"Enter"===e.key&&i&&u()}})},B=r(14);var M=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),r=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(G,{users:r,addUserCallback:function(e){n([].concat(Object(A.a)(r),[{_id:Object(B.v1)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var F=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{className:o.a.title,children:"react homeworks:"}),Object(d.jsx)(x,{}),Object(d.jsx)(N,{}),Object(d.jsx)(M,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,r){e.exports={message:"Message_message__5G4bT",wrapper:"Message_wrapper__118Ds",postBlock:"Message_postBlock__30tU8",name:"Message_name__2qIEx",text:"Message_text__3JNGV",time:"Message_time__cnuBn",speechBubble:"Message_speechBubble__f9fnY"}},5:function(e,t,r){e.exports={wrapper:"Affairs_wrapper__1iD_J",name:"Affairs_name__3X8Os",high:"Affairs_high__2iJYk",middle:"Affairs_middle__3RrxF",low:"Affairs_low__Y6yOy",delete:"Affairs_delete__3k6RZ"}},6:function(e,t,r){e.exports={someClass:"Greeting_someClass__1w_Ip",error:"Greeting_error__3AVlK",notError:"Greeting_notError__2VEnZ",errorText:"Greeting_errorText__O5GG_",inputClass:"Greeting_inputClass__2Os_a",button:"Greeting_button__Vbozr"}},9:function(e,t,r){e.exports={App:"App_App__36cEi",title:"App_title__1Kmyv"}}},[[24,1,2]]]);
//# sourceMappingURL=main.daac1534.chunk.js.map