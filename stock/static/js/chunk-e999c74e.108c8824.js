(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e999c74e"],{2017:function(e,s,n){"use strict";var t=n("cafe"),o=n.n(t);o.a},"28e2":function(e,s,n){},"9ed6":function(e,s,n){"use strict";n.r(s);var t=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("Login Form")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("Login")]),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),n("span",[e._v(" password: any")])])],1)],1)},o=[],r=n("61f7"),a={name:"Login",data:function(){var e=function(e,s,n){Object(r["b"])(s)?n():n(new Error("Please enter the correct user name"))},s=function(e,s,n){s.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"admin123"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},i=a,l=(n("2017"),n("e7cb"),n("2877")),c=Object(l["a"])(i,t,o,!1,null,"10c19c10",null);s["default"]=c.exports},cafe:function(e,s,n){},e7cb:function(e,s,n){"use strict";var t=n("28e2"),o=n.n(t);o.a}}]);