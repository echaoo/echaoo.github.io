(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5256179a"],{"2b96":function(e,t,a){"use strict";var r=a("9ef6"),s=a.n(r);s.a},"308c":function(e,t,a){"use strict";var r=a("5b33"),s=a.n(r);s.a},"4ad1":function(e,t,a){},"55f4":function(e,t,a){"use strict";var r=a("ee50"),s=a.n(r);s.a},5713:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"organization-page"},[a("back"),a("area-selector",{attrs:{initFold:!0}}),a("div",{staticClass:"content"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"组织代码",prop:"code"}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"组织名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"法人代表",prop:"represent"}},[a("el-input",{model:{value:e.form.represent,callback:function(t){e.$set(e.form,"represent",t)},expression:"form.represent"}})],1),a("el-form-item",{attrs:{label:"成立日期",prop:"createdDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.createdDate,callback:function(t){e.$set(e.form,"createdDate",t)},expression:"form.createdDate"}})],1),a("el-form-item",{attrs:{label:"所在社/组"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择所在社/组"},model:{value:e.form.group,callback:function(t){e.$set(e.form,"group",t)},expression:"form.group"}},e._l(e.groupOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"组织介绍",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",placeholder:"组织介绍"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("提 交")])],1)],1)],1)},s=[],i=a("7715"),l=a("66b7"),n={components:{AreaSelector:i["a"],Back:l["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",form:{},formLabelWidth:"100px",dialogFormVisible:!1,rules:{code:[{required:!0,message:"请输入组织代码",trigger:"blur"}],name:[{required:!0,message:"请输入组织名称",trigger:"blur"}],represent:[{required:!0,message:"请输入法人代表",trigger:"blur"}],createdDate:[{type:"date",message:"请选择成立日期",trigger:"change"}],desc:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],isEdit:!1}},methods:{handleEdit:function(e){for(var t in this.showDialog(),this.form)this.form[t]=e[t];this.isEdit=!0}}},o=n,c=(a("55f4"),a("81fb"),a("2877")),u=Object(c["a"])(o,r,s,!1,null,"fde0dd86",null);t["default"]=u.exports},"5b33":function(e,t,a){},"66b7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"back-container"},[a("span",{staticClass:"custom-back",on:{click:e.goBack}},[a("i",{staticClass:"el-icon-back ",on:{click:e.goBack}}),e._v("返回 ")])])},s=[],i=(a("2f62"),{name:"Back",methods:{goBack:function(){history.back()}}}),l=i,n=(a("8ccd"),a("2877")),o=Object(n["a"])(l,r,s,!1,null,"1a422e96",null);t["a"]=o.exports},7715:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e.isFold=!e.isFold}}},[e._v(e._s(e.isFold?"展开":"折叠"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[e._v("乡镇")]),e._l(e.areaList,(function(t){return a("el-tag",{key:t.value,class:["tag-cursor",{active:e.activeAreaIndex===t.value}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return e.getTowns(t)}}},[e._v(e._s(t.label)+" ")])})),a("p",{staticClass:"tag-title"},[e._v("村")]),e._l(e.currentTownList,(function(t){return a("el-tag",{key:t.value,class:["tag-cursor",{active:e.activeTownIndex===t.value}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return e.selectTown(t)}}},[e._v(e._s(t.label)+" ")])}))],2)])},s=[],i={data:function(){return{isFold:!1,areaList:[{label:"碧岩镇",value:"1",children:[{label:"北站镇",value:"11"},{label:"杜家镇",value:"12"}]},{label:"哈哈镇",value:"2",children:[{label:"哈空站镇",value:"21"},{label:"就看家镇",value:"22"}]}],currentTownList:[],activeAreaIndex:"1",activeTownIndex:"11"}},props:{initFold:Boolean},created:function(){console.log(this.initFold),this.isFold=this.initFold,this.currentTownList=this.areaList[0].children},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(e){this.activeAreaIndex=e.value,this.currentTownList=e&&e.children||[],this.activeTownIndex=this.currentTownList[0].value},selectTown:function(e){this.activeTownIndex=e.value}}},l=i,n=(a("308c"),a("2b96"),a("2877")),o=Object(n["a"])(l,r,s,!1,null,"67ad467a",null);t["a"]=o.exports},"81fb":function(e,t,a){"use strict";var r=a("e80f"),s=a.n(r);s.a},"8ccd":function(e,t,a){"use strict";var r=a("4ad1"),s=a.n(r);s.a},"9ef6":function(e,t,a){},e80f:function(e,t,a){},ee50:function(e,t,a){}}]);