(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b14eeec"],{"1c43":function(t,e,a){},"2b96":function(t,e,a){"use strict";var i=a("9ef6"),n=a.n(i);n.a},"4c20":function(t,e,a){},7038:function(t,e,a){"use strict";var i=a("1c43"),n=a.n(i);n.a},7715:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"展开":"折叠"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),a("p",{staticClass:"tag-title"},[t._v("村")]),t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])}))],2)])},n=[],s=a("b775");function l(){return Object(s["a"])({url:"/v1/village/list",method:"post",data:{token:" eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjEsImFjY291bnROYW1lIjoiYWRtaW4iLCJhY2NvdW50R3JvdXBJZCI6MSwiZXhwIjoxNTk0Mzc5NTA1fQ.JSFHqN9PHoJDYG1I-DDz7ojXUFL50BmcNkRswu_n_Ko"}})}var o={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageName:""}},props:{initFold:Boolean},created:function(){this.isFold=this.initFold,this.getVillageList()},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.areaChange()},getVillageList:function(){var t=this;l().then((function(e){t.areaList=e.data.townshipInfos||[],t.init(t.areaList[0]),t.areaChange(),t.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];this.$emit("areaChange",e)},init:function(t){this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[],this.activeVillageIndex=this.currentTownList[0].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[0].villageName}}},c=o,r=(a("d674"),a("2b96"),a("2877")),d=Object(r["a"])(c,i,n,!1,null,"b25c8b5e",null);e["a"]=d.exports},"9b8b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"organization-page"},[a("area-selector"),a("div",{staticClass:"content"},[a("el-tag",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"success",size:"mini"}},[t._v("东巷村股份经济合作社")]),a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1),a("el-button",{attrs:{icon:"el-icon-download",type:"primary"}},[t._v("下载信息")])],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("编号： "+t._s(t.basicInfo.index))]),a("span",[t._v("组织代码: "+t._s(t.basicInfo.code))]),a("span",[t._v("组织名称: "+t._s(t.basicInfo.name))]),a("span",[t._v("法人: "+t._s(t.basicInfo.represent))]),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-plus",type:"text"},on:{click:t.addShareholder}},[t._v("新增股东")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"index",label:"股东户号",width:"180"}}),a("el-table-column",{attrs:{prop:"code",label:"股东"}}),a("el-table-column",{attrs:{prop:"name",label:"股权证号"}}),a("el-table-column",{attrs:{prop:"represent",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"createdDate",label:"综合股权份额\t"}}),a("el-table-column",{attrs:{prop:"综合股权价值\t",label:"地址"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:t.goDetail}},[t._v("详情")])]}}])})],1)],1)],1)],1)},n=[],s=a("7715"),l={components:{AreaSelector:s["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",basicInfo:{index:1,code:"323232",name:"张家口",represent:"酷酷酷"}}},created:function(){},methods:{addShareholder:function(t){this.$router.push("/stock/add")},goDetail:function(){this.$router.push("/stock/detail")}}},o=l,c=(a("deba"),a("7038"),a("2877")),r=Object(c["a"])(o,i,n,!1,null,"643e5f10",null);e["default"]=r.exports},"9ef6":function(t,e,a){},aee5:function(t,e,a){},d674:function(t,e,a){"use strict";var i=a("4c20"),n=a.n(i);n.a},deba:function(t,e,a){"use strict";var i=a("aee5"),n=a.n(i);n.a}}]);