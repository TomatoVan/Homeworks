(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{18:function(e,t,n){e.exports={wrapper:"Affairs_wrapper__1iD_J",button:"Affairs_button__ypvP4",delete:"Affairs_delete__3k6RZ",name:"Affairs_name__3X8Os",high:"Affairs_high__2iJYk",middle:"Affairs_middle__3RrxF",low:"Affairs_low__Y6yOy"}},19:function(e,t,n){e.exports={link:"HW5_link__37-wr",active:"HW5_active__1zGg2",header:"HW5_header__15k8w",block:"HW5_block__20D3J"}},21:function(e,t,n){e.exports={message:"Message_message__5G4bT",wrapper:"Message_wrapper__118Ds",postBlock:"Message_postBlock__30tU8",name:"Message_name__2qIEx",text:"Message_text__3JNGV",time:"Message_time__cnuBn",speechBubble:"Message_speechBubble__f9fnY"}},27:function(e,t,n){e.exports={range:"SuperRange_range__8IToW",rangeValues:"SuperRange_rangeValues__324kv"}},29:function(e,t,n){e.exports={someClass:"Greeting_someClass__1w_Ip",error:"Greeting_error__3AVlK",notError:"Greeting_notError__2VEnZ",errorText:"Greeting_errorText__O5GG_",inputClass:"Greeting_inputClass__2Os_a",button:"Greeting_button__Vbozr"}},30:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2XR9Q",input:"SuperInputText_input__2Emkv",errorInput:"SuperInputText_errorInput__2BzIm",error:"SuperInputText_error__3OkU3"}},33:function(e,t,n){e.exports={spanText:"SuperEditableSpan_spanText__3VbRN",buttons:"SuperEditableSpan_buttons__19hcG"}},37:function(e,t,n){e.exports={default:"SuperButton_default__TEJWq",red:"SuperButton_red__2lXvQ"}},38:function(e,t,n){e.exports={people:"HW8_people__3Ie0P",item:"HW8_item__1nOCY",buttons:"HW8_buttons__3glxI"}},42:function(e,t,n){e.exports={blue:"HW4_blue__AbRqK",column:"HW4_column__1Hi7m",testSpanError:"HW4_testSpanError__1RKUQ"}},43:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__BjBPy",spanClassName:"SuperCheckbox_spanClassName__3igPp"}},44:function(e,t,n){e.exports={select:"SuperSelect_select__m_cTi",option:"SuperSelect_option__2Nqxl"}},45:function(e,t,n){e.exports={radio:"SuperRadio_radio__1XIOh",label:"SuperRadio_label__3doIA"}},46:function(e,t,n){e.exports={time:"HW9_time__3G2Wr",clocks:"HW9_clocks__2OsIb"}},5:function(e,t,n){e.exports={App:"App_App__36cEi",title:"App_title__1Kmyv",wrapper:"App_wrapper__k4VL9",nav:"App_nav__ET7Do","rainbow-text-simple-animation-rev":"App_rainbow-text-simple-animation-rev__qG67S","rainbow-text-simple-animation":"App_rainbow-text-simple-animation__1tE-Y"}},52:function(e,t,n){e.exports={preloader:"HW10_preloader__3zkUE"}},64:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),i=(n(64),n(5)),o=n.n(i),l=n(19),j=n.n(l),u=n(20),d=n(21),b=n.n(d),p=n(0),O=function(e){return Object(p.jsxs)("div",{className:b.a.message,children:[Object(p.jsx)("img",{src:e.avatar,alt:"post ava"}),Object(p.jsx)("div",{className:b.a.speechBubble}),Object(p.jsxs)("div",{className:b.a.postBlock,children:[Object(p.jsx)("h3",{className:b.a.name,children:e.name}),Object(p.jsx)("div",{className:b.a.text,children:e.message}),Object(p.jsx)("div",{className:b.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",x="some text",_="22:00";var v=function(){return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 1"}),Object(p.jsx)(O,{avatar:h,name:m,message:x,time:_})]})},f=n(4),g=n(18),N=n.n(g);var C=function(e){return Object(p.jsxs)("div",{className:N.a.wrapper,children:[Object(p.jsx)("span",{className:N.a.name,children:e.affair.name}),Object(p.jsx)("span",{className:N.a[e.affair.priority],children:e.affair.priority}),Object(p.jsx)("button",{className:N.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(p.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(p.jsxs)("div",{children:[t,Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(w),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(f.a)(r,2),i=s[0],l=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 2 "}),Object(p.jsx)(k,{data:j,setFilter:l,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},y=n(10),A=n(29),E=n.n(A),T=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?E.a.error:E.a.notError;return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{value:t,onChange:n,onKeyDown:s,className:i}),Object(p.jsx)("button",{onClick:a,className:E.a.button,disabled:!t,children:"add"}),Object(p.jsx)("span",{children:r}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:E.a.errorText,children:c})})]})},I=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(f.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(f.a)(o,2),j=l[0],u=l[1],d=function(){n(s),i(""),alert("Hello ".concat(s,"!"))},b=t.length;return Object(p.jsx)(T,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("name is required!"))},addUser:d,error:j,totalUsers:b,onEnter:function(e){"Enter"===e.key&&s&&d()}})},G=n(87);var H=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 3 "}),Object(p.jsx)(I,{users:n,addUserCallback:function(e){c([].concat(Object(y.a)(n),[{_id:Object(G.a)(),name:e}]))}})]})},R=n(9),W=n(14),B=n(30),D=n.n(B),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(D.a.error," ").concat(i||""),j="".concat(D.a.input," ").concat(r?D.a.errorInput:D.a.superInput," ").concat(s," ");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",Object(R.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(p.jsx)("span",{className:l,children:r})]})},L=n(42),P=n.n(L),J=n(37),M=n.n(J),K=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,["red","className"]),c=" ".concat(M.a.button," ").concat(t?M.a.red:M.a.default," ").concat(n);return Object(p.jsx)("button",Object(R.a)({className:c},a))},U=n(43),V=n.n(U),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(a||"");return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",Object(R.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(p.jsx)("span",{className:V.a.spanClassName,children:c})]})};var q=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),l=Object(f.a)(i,2),j=l[0],u=l[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 4 "}),Object(p.jsxs)("div",{className:P.a.column,children:[Object(p.jsx)(F,{value:n,onChangeText:c,onEnter:s,error:r}),Object(p.jsx)(F,{className:P.a.blue}),Object(p.jsx)(K,{children:"default"}),Object(p.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(p.jsx)(K,{disabled:!0,children:"disabled"}),Object(p.jsx)(X,{checked:j,onChangeChecked:u,children:"some text "}),Object(p.jsx)(X,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]})]})},Y=n(33),z=n.n(Y),Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(f.a)(s,2),o=i[0],l=i[1],j=c||{},u=j.children,d=j.onDoubleClick,b=(j.className,Object(W.a)(j,["children","onDoubleClick","className"])),O="".concat(z.a.spanText);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)(F,Object(R.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!0),n&&n()}},r)):Object(p.jsxs)("span",Object(R.a)(Object(R.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:O},b),{},{children:["\u270e ",u||r.value]}))})};var Q=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 6"}),Object(p.jsx)(Z,{value:n,onChangeText:c,spanProps:{children:n?void 0:" Enter text..."}}),Object(p.jsxs)("div",{className:z.a.buttons,children:[Object(p.jsx)(K,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(p.jsx)(K,{onClick:function(){c(function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value",""))},children:"restore"})]})]})};var $=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)(S,{}),Object(p.jsx)(H,{}),Object(p.jsx)(q,{}),Object(p.jsx)(Q,{})]})},ee=n(44),te=n.n(ee),ne=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(W.a)(e,["options","onChange","onChangeOption"]),r=null===t||void 0===t?void 0:t.map((function(e,t){return Object(p.jsx)("option",{className:te.a.option,value:e,children:e},e+"-"+t)}));return Object(p.jsx)("select",Object(R.a)(Object(R.a)({className:te.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},ae=n(45),ce=n.n(ae),re=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(p.jsxs)("label",{className:ce.a.label,children:[Object(p.jsx)("input",{className:ce.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(p.jsx)(p.Fragment,{children:i})},se=["X","Y","Z"];var ie=function(){var e=Object(a.useState)(se[1]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 7"}),Object(p.jsx)("div",{children:Object(p.jsx)(ne,{options:se,value:n,onChangeOption:c})}),Object(p.jsx)("div",{children:Object(p.jsx)(re,{name:"radio",options:se,value:n,onChangeOption:c})})]})},oe=function(e,t){switch(t.type){case"SORT":var n=Object(y.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.name===t.name?0:e.name>t.name?1:-1})):"down"===t.payload?n.sort((function(e,t){return e.name===t.name?0:e.name>t.name?-1:1})):e;case"CHECK-AGE":return e.filter((function(e){return e.age>=t.payload}));default:return e}},le=n(38),je=n.n(le),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(a.useState)(ue),t=Object(f.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(p.jsxs)("div",{className:je.a.item,children:[Object(p.jsxs)("span",{children:[e.name," "]}),e.age]},e._id)}));return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 8"}),Object(p.jsx)("div",{className:je.a.people,children:r}),Object(p.jsxs)("div",{className:je.a.buttons,children:[Object(p.jsx)("div",{children:Object(p.jsx)(K,{onClick:function(){return c(oe(ue,{type:"SORT",payload:"up"}))},children:"sort up"})}),Object(p.jsx)("div",{children:Object(p.jsx)(K,{onClick:function(){return c(oe(ue,{type:"SORT",payload:"down"}))},children:"sort down"})}),Object(p.jsx)("div",{children:Object(p.jsx)(K,{onClick:function(){return c(oe(ue,{type:"CHECK-AGE",payload:18}))},children:"check 18"})})]})]})},be=n(46),pe=n.n(be);var Oe=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(f.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),j=Object(f.a)(l,2),u=j[0],d=j[1],b=function(){clearInterval(n)},O=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(p.jsx)("br",{}),h=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(p.jsx)("br",{});return Object(p.jsxs)("div",{className:pe.a.time,children:[Object(p.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},className:pe.a.clocks,children:O}),u&&Object(p.jsx)("div",{children:h}),Object(p.jsxs)("div",{children:[Object(p.jsx)(K,{onClick:function(){b();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(p.jsx)(K,{onClick:b,children:"stop"})]})]})};var he=function(){return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 9"}),Object(p.jsx)(Oe,{})]})},me=n(52),xe=n.n(me),_e=n(28),ve={isLoading:!1},fe=function(e){return{type:"CHANGE-LOADING",isLoading:e}},ge=n.p+"static/media/Spin.92abdd2b.svg";var Ne=function(){var e=Object(_e.c)((function(e){return e.loading.isLoading})),t=Object(_e.b)();return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 10"}),e?Object(p.jsx)("img",{className:xe.a.preloader,src:ge,alt:""}):Object(p.jsx)("div",{children:Object(p.jsx)(K,{onClick:function(){t(fe(!0)),setTimeout((function(){t(fe(!1))}),750),console.log("loading...")},children:"set loading..."})})]})},Ce=n(27),ke=n.n(Ce),we=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(W.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(ke.a.range," ").concat(a||"");return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",Object(R.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},Se=n(89),ye=n(86),Ae=function(e){var t=e.values,n=e.onChangeDoubleRange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(Se.a,{sx:{width:150},children:Object(p.jsx)(ye.a,{getAriaLabel:function(){return"Temperature range"},value:t,onChange:function(e,t){n(t)},valueLabelDisplay:"auto"})})})};var Ee=function(){var e=Object(a.useState)([20,75]),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)("div",{className:o.a.title,children:"homeworks 11"}),Object(p.jsxs)("div",{className:ke.a.changeRange,children:[Object(p.jsx)("span",{children:n[0]}),Object(p.jsx)(we,{value:n[0],onChangeRange:function(e){c([e,n[1]])}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Ae,{values:n,onChangeDoubleRange:function(e){c(e)}}),Object(p.jsxs)("div",{className:ke.a.rangeValues,children:[Object(p.jsxs)("span",{children:["MIN: ",n[0]]}),Object(p.jsxs)("span",{children:["MAX: ",n[1]]})]})]})]})};var Te=function(){return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)(ie,{}),Object(p.jsx)(de,{}),Object(p.jsx)(he,{}),Object(p.jsx)(Ne,{}),Object(p.jsx)(Ee,{})]})};var Ie=function(){return Object(p.jsx)("div",{className:o.a.wrapper,children:Object(p.jsxs)("div",{className:o.a.title,children:["Work in progress! ",Object(p.jsx)("br",{}),"\uff3c(\uffe3\u25bd\uffe3)\uff0f"]})})};var Ge=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"404"}),Object(p.jsx)("div",{children:"Page not found!"}),Object(p.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},He=n(6),Re="/pre-junior",We="/junior",Be="/junior-plus",De=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(He.d,{children:[Object(p.jsx)(He.b,{path:"/",element:Object(p.jsx)(He.a,{replace:!0,to:Re})}),Object(p.jsx)(He.b,{path:Re,element:Object(p.jsx)($,{})}),Object(p.jsx)(He.b,{path:We,element:Object(p.jsx)(Te,{})}),Object(p.jsx)(He.b,{path:Be,element:Object(p.jsx)(Ie,{})}),Object(p.jsx)(He.b,{path:"/*",element:Object(p.jsx)(Ge,{})})]})})};var Fe=function(){return Object(p.jsxs)("div",{className:j.a.header,children:[Object(p.jsx)(u.b,{to:Re,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"PreJunior"}),Object(p.jsx)(u.b,{to:We,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"Junior"}),Object(p.jsx)(u.b,{to:Be,className:function(e){var t=e.isActive;return"".concat(t?j.a.active:j.a.link)},children:"JuniorPlus"}),Object(p.jsx)("a",{className:j.a.block})]})};var Le=function(){return Object(p.jsxs)("div",{className:o.a.wrapper,children:[Object(p.jsx)(Fe,{}),Object(p.jsx)(De,{})]})};var Pe=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{className:o.a.nav,children:"React homeworks"}),Object(p.jsx)(Le,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(47),Me=Object(Je.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING":return Object(R.a)(Object(R.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Ke=Object(Je.b)(Me),Ue=Ke;window.store=Ke,s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(_e.a,{store:Ue,children:Object(p.jsx)(Pe,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.b3961159.chunk.js.map