(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,n){e.exports={App:"App_App__36cEi",title:"App_title__1Kmyv",wrapper:"App_wrapper__k4VL9",nav:"App_nav__ET7Do","rainbow-text-simple-animation-rev":"App_rainbow-text-simple-animation-rev__qG67S","rainbow-text-simple-animation":"App_rainbow-text-simple-animation__1tE-Y"}},,,,,function(e,t,n){e.exports={wrapper:"Affairs_wrapper__1iD_J",button:"Affairs_button__ypvP4",delete:"Affairs_delete__3k6RZ",name:"Affairs_name__3X8Os",high:"Affairs_high__2iJYk",middle:"Affairs_middle__3RrxF",low:"Affairs_low__Y6yOy"}},function(e,t,n){e.exports={link:"HW5_link__37-wr",active:"HW5_active__1zGg2",header:"HW5_header__15k8w",block:"HW5_block__20D3J"}},,function(e,t,n){e.exports={message:"Message_message__5G4bT",wrapper:"Message_wrapper__118Ds",postBlock:"Message_postBlock__30tU8",name:"Message_name__2qIEx",text:"Message_text__3JNGV",time:"Message_time__cnuBn",speechBubble:"Message_speechBubble__f9fnY"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__1w_Ip",error:"Greeting_error__3AVlK",notError:"Greeting_notError__2VEnZ",errorText:"Greeting_errorText__O5GG_",inputClass:"Greeting_inputClass__2Os_a",button:"Greeting_button__Vbozr"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2XR9Q",input:"SuperInputText_input__2Emkv",errorInput:"SuperInputText_errorInput__2BzIm",error:"SuperInputText_error__3OkU3"}},function(e,t,n){e.exports={spanText:"SuperEditableSpan_spanText__3VbRN",buttons:"SuperEditableSpan_buttons__19hcG"}},function(e,t,n){e.exports={wrapper:"LevelsWrapper_wrapper__11GQ2"}},function(e,t,n){e.exports={default:"SuperButton_default__TEJWq",red:"SuperButton_red__2lXvQ"}},,function(e,t,n){e.exports={blue:"HW4_blue__AbRqK",column:"HW4_column__1Hi7m",testSpanError:"HW4_testSpanError__1RKUQ"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__BjBPy",spanClassName:"SuperCheckbox_spanClassName__3igPp"}},function(e,t,n){e.exports={select:"SuperSelect_select__m_cTi",option:"SuperSelect_option__2Nqxl"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__1XIOh",label:"SuperRadio_label__3doIA"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(24),s=n.n(c),i=(n(30),n(3)),o=n.n(i),l=n(9),j=n.n(l),u=n(10),b=n(11),d=n.n(b),p=n(0),h=function(e){return Object(p.jsxs)("div",{className:d.a.message,children:[Object(p.jsx)("img",{src:e.avatar,alt:"post ava"}),Object(p.jsx)("div",{className:d.a.speechBubble}),Object(p.jsxs)("div",{className:d.a.postBlock,children:[Object(p.jsx)("h3",{className:d.a.name,children:e.name}),Object(p.jsx)("div",{className:d.a.text,children:e.message}),Object(p.jsx)("div",{className:d.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",x="some text",_="22:00";var f=function(){return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 1"}),Object(p.jsx)(h,{avatar:m,name:O,message:x,time:_})]})},v=n(4),g=n(8),N=n.n(g);var k=function(e){return Object(p.jsxs)("div",{className:N.a.wrapper,children:[Object(p.jsx)("span",{className:N.a.name,children:e.affair.name}),Object(p.jsx)("span",{className:N.a[e.affair.priority],children:e.affair.priority}),Object(p.jsx)("button",{className:N.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(p.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(p.jsxs)("div",{children:[t,Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(w),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(v.a)(c,2),i=s[0],l=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 2 "}),Object(p.jsx)(C,{data:j,setFilter:l,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},y=n(25),A=n(14),E=n.n(A),T=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,i=r?E.a.error:E.a.notError;return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{value:t,onChange:n,onKeyDown:s,className:i}),Object(p.jsx)("button",{onClick:a,className:E.a.button,disabled:!t,children:"add"}),Object(p.jsx)("span",{children:c}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:E.a.errorText,children:r})})]})},B=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(v.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(v.a)(o,2),j=l[0],u=l[1],b=function(){n(s),i(""),alert("Hello ".concat(s,"!"))},d=t.length;return Object(p.jsx)(T,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("name is required!"))},addUser:b,error:j,totalUsers:d,onEnter:function(e){"Enter"===e.key&&s&&b()}})},I=n(34);var G=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 3 "}),Object(p.jsx)(B,{users:n,addUserCallback:function(e){r([].concat(Object(y.a)(n),[{_id:Object(I.a)(),name:e}]))}})]})},W=n(7),F=n(6),J=n(15),P=n.n(J),H=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(P.a.error," ").concat(i||""),j="".concat(P.a.input," ").concat(c?P.a.errorInput:P.a.superInput," ").concat(s," ");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",Object(W.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(p.jsx)("span",{className:l,children:c})]})},R=n(20),M=n.n(R),U=n(18),D=n.n(U),K=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,["red","className"]),r=" ".concat(D.a.button," ").concat(t?D.a.red:D.a.default," ").concat(n);return Object(p.jsx)("button",Object(W.a)({className:r},a))},q=n(21),X=n.n(q),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(a||"");return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(W.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(p.jsx)("span",{className:X.a.spanClassName,children:r})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),l=Object(v.a)(i,2),j=l[0],u=l[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 4 "}),Object(p.jsxs)("div",{className:M.a.column,children:[Object(p.jsx)(H,{value:n,onChangeText:r,onEnter:s,error:c}),Object(p.jsx)(H,{className:M.a.blue}),Object(p.jsx)(K,{children:"default"}),Object(p.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(p.jsx)(K,{disabled:!0,children:"disabled"}),Object(p.jsx)(V,{checked:j,onChangeChecked:u,children:"some text "}),Object(p.jsx)(V,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]})]})},Q=n(16),Z=n.n(Q),z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,b=j.onDoubleClick,d=(j.className,Object(F.a)(j,["children","onDoubleClick","className"])),h="".concat(Z.a.spanText);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)(H,Object(W.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!0),n&&n()}},c)):Object(p.jsxs)("span",Object(W.a)(Object(W.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:h},d),{},{children:["\u270e ",u||c.value]}))})};var L=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 6"}),Object(p.jsx)(z,{value:n,onChangeText:r,spanProps:{children:n?void 0:" Enter text..."}}),Object(p.jsxs)("div",{className:Z.a.buttons,children:[Object(p.jsx)(K,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(p.jsx)(K,{onClick:function(){r(function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value",""))},children:"restore"})]})]})};var $=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsx)(S,{}),Object(p.jsx)(G,{}),Object(p.jsx)(Y,{}),Object(p.jsx)(L,{})]})},ee=n(17),te=n.n(ee),ne=n(22),ae=n.n(ne),re=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(F.a)(e,["options","onChange","onChangeOption"]),c=null===t||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)("option",{className:ae.a.option,value:e,children:e},e+"-"+t)}));return Object(p.jsx)("select",Object(W.a)(Object(W.a)({className:ae.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},ce=n(23),se=n.n(ce),ie=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(p.jsxs)("label",{className:se.a.label,children:[Object(p.jsx)("input",{className:se.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(p.jsx)(p.Fragment,{children:i})},oe=["X","Y","Z"];var le=function(){var e=Object(a.useState)(oe[1]),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 7"}),Object(p.jsx)("div",{children:Object(p.jsx)(re,{options:oe,value:n,onChangeOption:r})}),Object(p.jsx)("div",{children:Object(p.jsx)(ie,{name:"radio",options:oe,value:n,onChangeOption:r})})]})};var je=function(){return Object(p.jsx)("div",{className:te.a.wrapper,children:Object(p.jsx)(le,{})})};var ue=function(){return Object(p.jsx)("div",{className:te.a.wrapper,children:Object(p.jsxs)("div",{className:o.a.title,children:["Work in progress! ",Object(p.jsx)("br",{}),"\uff3c(\uffe3\u25bd\uffe3)\uff0f"]})})};var be=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"404"}),Object(p.jsx)("div",{children:"Page not found!"}),Object(p.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},de=n(2),pe="/pre-junior",he="/junior",me="/junior-plus",Oe=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(de.d,{children:[Object(p.jsx)(de.b,{path:"/",element:Object(p.jsx)(de.a,{to:pe})}),Object(p.jsx)(de.b,{path:pe,element:Object(p.jsx)($,{})}),Object(p.jsx)(de.b,{path:he,element:Object(p.jsx)(je,{})}),Object(p.jsx)(de.b,{path:me,element:Object(p.jsx)(ue,{})}),Object(p.jsx)(de.b,{path:"*",element:Object(p.jsx)(be,{})})]})})};var xe=function(){return Object(p.jsxs)("div",{className:j.a.header,children:[Object(p.jsx)(u.b,{to:pe,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"PreJunior"}),Object(p.jsx)(u.b,{to:he,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"Junior"}),Object(p.jsx)(u.b,{to:me,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"JuniorPlus"}),Object(p.jsx)("a",{className:j.a.block})]})};var _e=function(){return Object(p.jsx)(u.a,{basename:"/Homeworks",children:Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)(xe,{}),Object(p.jsx)(Oe,{})]})})};var fe=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{className:o.a.nav,children:"React homeworks"}),Object(p.jsx)(_e,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(fe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.80a9d677.chunk.js.map