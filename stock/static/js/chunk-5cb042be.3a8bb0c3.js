(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb042be"],{2934:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var i=a("b775");function n(){return Object(i["a"])({url:"/v1/village/list",method:"post"})}function s(){return Object(i["a"])({url:"/v1/position/query",method:"post"})}},"2b96":function(t,e,a){"use strict";var i=a("9ef6"),n=a.n(i);n.a},5790:function(t,e,a){},5838:function(t,e,a){},"6cd7":function(t,e,a){"use strict";var i=a("5790"),n=a.n(i);n.a},7715:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"展开":"折叠"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),a("p",{staticClass:"tag-title"},[t._v("村")]),t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])}))],2)])},n=[],s=a("2934"),l={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageName:""}},props:{initFold:Boolean},created:function(){this.isFold=this.initFold,this.getVillageList()},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.areaChange()},getVillageList:function(){var t=this;Object(s["a"])().then((function(e){t.areaList=e.data.townshipInfos||[],t.init(t.areaList[0]),t.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];this.$emit("areaChange",e)},init:function(t){this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[],this.activeVillageIndex=this.currentTownList[0].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[0].villageName}}},r=l,o=(a("b3b8"),a("2b96"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,"6c6081f5",null);e["a"]=c.exports},"9ef6":function(t,e,a){},afd8:function(t,e,a){},b3b8:function(t,e,a){"use strict";var i=a("5838"),n=a.n(i);n.a},d88c:function(t,e,a){"use strict";var i=a("afd8"),n=a.n(i);n.a},f52b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"organization-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),a("div",{staticClass:"content"},[a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1),a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.handleEdit}},[t._v("添加经济组织")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"index",label:"编号",width:"180"}}),a("el-table-column",{attrs:{prop:"code",label:"组织代码"}}),a("el-table-column",{attrs:{prop:"name",label:"组织名称"}}),a("el-table-column",{attrs:{prop:"represent",label:"法人代表"}}),a("el-table-column",{attrs:{prop:"createdDate",label:"成立日期"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("变更")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.goDetail}},[t._v("详情")])]}}])})],1)],1)],1)},n=[],s=a("7715"),l={components:{AreaSelector:s["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",form:{},formLabelWidth:"100px",dialogFormVisible:!1,rules:{code:[{required:!0,message:"请输入组织代码",trigger:"blur"}],name:[{required:!0,message:"请输入组织名称",trigger:"blur"}],represent:[{required:!0,message:"请输入法人代表",trigger:"blur"}],createdDate:[{type:"date",message:"请选择成立日期",trigger:"change"}],desc:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],isEdit:!1}},created:function(){},methods:{showDialog:function(){this.isEdit=!1,this.resetForm(),this.dialogFormVisible=!this.dialogFormVisible},handleEdit:function(t){if(t){for(var e in this.form)this.form[e]=t[e];this.isEdit=!0}this.$router.push("/organization/edit")},goDetail:function(){this.$router.push("/organization/detail")},areaChange:function(t){console.log(t)}}},r=l,o=(a("d88c"),a("6cd7"),a("2877")),c=Object(o["a"])(r,i,n,!1,null,"9bd9d550",null);e["default"]=c.exports}}]);