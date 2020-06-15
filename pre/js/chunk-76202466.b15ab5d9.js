(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76202466"],{1729:function(e,t,r){"use strict";var n=r("67b0"),a=r.n(n);a.a},"67b0":function(e,t,r){},"6cbf":function(e,t,r){},"8bbb":function(e,t,r){"use strict";var n=r("6cbf"),a=r.n(n);a.a},d785:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper",on:{dragenter:e.dragEnter,mouseleave:e.hideDt}},[r("h1",[e._v("Add expressions")]),e.headGroup?e.method?"upload"===e.method?[e.uploadsFinished?r("div",[r("h2",[e._v(" Finishing up images. "+e._s(Math.round(100*e.batchRunner.percentage))+"% ")])]):r("div",{staticClass:"page"},[r("h2",[e._v("Upload new '"+e._s(e.normalizeName(e.headGroup.name))+"' expressions")]),r("drop-target",{ref:"dt",staticClass:"drop-target",on:{drop:e.addByImageFile}},[e._v("Drop here to add as a new expression")]),r("div",{staticClass:"expression_list_wrapper"},[r("div",{staticClass:"expression_list",on:{"&wheel":function(t){return e.verticalScrollRedirect(t)}}},[r("button",{on:{click:function(t){return e.$refs.upload.click()}}},[e._v(" Upload expression "),r("input",{ref:"upload",attrs:{type:"file",multiple:""},on:{change:e.addByUpload}})]),r("button",{on:{click:e.addByUrl}},[e._v("Add expression from URL")]),e._l(e.uploadedExpressions,(function(t,n){return r("div",{key:n,class:{expression_item:!0,active:e.currentUploadedExpression===t},style:{backgroundImage:"url('"+t+"')"},on:{click:function(r){e.currentUploadedExpression=t}}})}))],2),r("div",{staticClass:"options_wrapper"},[r("div",{staticClass:"image"},[r("canvas",{ref:"target",attrs:{width:e.previewPoses[e.previewPoseIdx].width,height:e.previewPoses[e.previewPoseIdx].height}})]),r("div",[e._v(" Preview pose: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.previewPoseIdx,expression:"previewPoseIdx"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.previewPoseIdx=t.target.multiple?r:r[0]}}},e._l(e.previewPoses,(function(t,n){return r("option",{key:n,domProps:{value:n}},[e._v(e._s(e.normalizeName(t.name)))])})),0),r("fieldset",[r("legend",[e._v("Offset")]),r("table",[r("tr",[r("th",[e._v("X:")]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.offsetX,expression:"offsetX",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.offsetX},on:{input:function(t){t.target.composing||(e.offsetX=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("th",[e._v("Y:")]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.offsetY,expression:"offsetY",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.offsetY},on:{input:function(t){t.target.composing||(e.offsetY=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])]),e.headGroup.imagePatching&&e.headGroup.imagePatching.mask?r("toggle-box",{attrs:{label:"Reduce to fit DDDG standard"},model:{value:e.addMask,callback:function(t){e.addMask=t},expression:"addMask"}}):e._e(),e.headGroup.imagePatching&&e.headGroup.imagePatching.addition?r("toggle-box",{attrs:{label:"Add new parts to fit DDDG standard"},model:{value:e.addExtras,callback:function(t){e.addExtras=t},expression:"addExtras"}}):e._e(),r("button",{attrs:{disabled:null===e.currentUploadedExpression},on:{click:e.removeUploadedExpression}},[e._v(" Remove this expression ")]),r("button",{on:{click:e.finishUpload}},[e._v("Finish")]),r("button",{on:{click:e.leave}},[e._v("Abort")])],1)])])],1)]:e._e():r("selector",{attrs:{label:"How would you like to add the new expressions?"}},[r("selection",{attrs:{label:"Build expressions from parts",icon:"info",disabled:e.hasParts},on:{selected:function(t){e.method="parts"}}}),r("selection",{attrs:{label:"Upload expression images",icon:"info"},on:{selected:function(t){e.method="upload"}}})],1):r("selector",{attrs:{label:"What kind of expression would you like to add?"}},e._l(e.availableHeadGroups,(function(t){return r("selection",{key:t.name,attrs:{label:e.normalizeName(t.name),images:t.preview},on:{selected:function(r){e.headGroup=t}}})})),1)],2)},a=[],s=(r("8e6e"),r("20d6"),r("6762"),r("2fdb"),r("456d"),r("4917"),r("5df3"),r("1c4c"),r("28a5"),r("bd86")),i=(r("f559"),r("ac4d"),r("8a81"),r("ac6a"),r("7f7f"),r("7514"),r("96cf"),r("3b8d")),o=r("d225"),u=r("b0b4"),c=r("308d"),d=r("6bb5"),l=r("013f"),p=r("4e2b"),h=r("9ab4"),f=r("60a3"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"selection",style:{background:e.background},on:{click:function(t){return t.stopPropagation(),e.$emit("selected")}}},[r("div",{staticClass:"icon material-icons"},[e._v(e._s(e.icon))]),r("div",{staticClass:"label"},[e._v(e._s(e.label))])])},b=[],m=function(e){function t(){return Object(o["a"])(this,t),Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"background",get:function(){return this.images.map((function(e){return"center / contain no-repeat url('".concat(e,"')")})).join(",")}}]),t}(f["d"]);Object(h["a"])([Object(f["c"])()],m.prototype,"icon",void 0),Object(h["a"])([Object(f["c"])()],m.prototype,"label",void 0),Object(h["a"])([Object(f["c"])({default:[]})],m.prototype,"images",void 0),m=Object(h["a"])([Object(f["a"])({components:{}})],m);var g=m,y=g,k=(r("1729"),r("2877")),w=Object(k["a"])(y,v,b,!1,null,"055af9e0",null),x=w.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"selector"},[e._t("default")],2)},j=[],G=function(e){function t(){return Object(o["a"])(this,t),Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),t}(f["d"]);G=Object(h["a"])([Object(f["a"])({components:{}})],G);var P=G,R=P,_=(r("8bbb"),Object(k["a"])(R,O,j,!1,null,"0b6e2f14",null)),E=_.exports,D=r("dc61"),C=r("c4e5"),U=r("032b"),I=25,S=function(e){function t(){return Object(o["a"])(this,t),Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"verticalScrollRedirect",value:function(e){if("wheel"===e.type&&e.currentTarget){var t=e.currentTarget,r=e;0!==r.deltaY&&(r.mozInputSource?t.scrollLeft+=r.deltaY*I:t.scrollLeft+=r.deltaY)}}}]),t}(f["d"]);S=Object(h["a"])([Object(f["a"])({})],S);var $=r("1a7b"),H=r("5947"),z=r("fd0b"),M=(r("4f7f"),function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.busy=!1,e.error=null,e.completed=0,e.fullCount=0,e}return Object(p["a"])(t,e),t}(f["d"]));M=Object(h["a"])([Object(f["a"])({})],M);var Y=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;Object(o["a"])(this,e),this.runner=t,this.disposer=r,this.parallel=n,this.state=new f["d"](M),this.pendingData=[],this.currentlyRunning=new Set,this.resolveCurrentRun=null,this.rejectCurrentRun=null,this.returnData=[],this.remainingDisposers=new Set,this.runningDisposers=new Set}return Object(u["a"])(e,[{key:"run",value:function(e){var t=this;return this.rejectCurrentRun&&this.reject(),e=e.slice(),this.pendingData=e,this.returnData=[],this.state.fullCount=e.length,this.state.error=null,this.state.busy=!0,this.state.completed=0,new Promise((function(r,n){t.resolveCurrentRun=r,t.rejectCurrentRun=n,e.length>0?t.restock():t.resolve()}))}},{key:"restock",value:function(){while(this.remainingCapacity>0&&this.pendingData.length>0)this.startOne();while(this.remainingCapacity>0&&this.remainingDisposers.size>0)this.startDisposer()}},{key:"startOne",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.pendingData.shift(),r=this.returnData.length,this.returnData[r]=void 0,t){e.next=5;break}return e.abrupt("return");case 5:return this.currentlyRunning.add(t),n=function(){return i.currentlyRunning.has(t)},e.prev=7,e.next=10,this.runner(t,n);case 10:a=e.sent,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](7),this.reject(e.t0);case 16:n()?(++this.state.completed,this.returnData[r]=a,this.currentlyRunning.delete(t),s=this.returnData.length-1===r,0===this.currentlyRunning.size&&s&&this.resolve()):void 0!==a&&this.remainingDisposers.add(a),this.restock();case 18:case"end":return e.stop()}}),e,this,[[7,13]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"startDisposer",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.remainingDisposers.values().next().value,this.remainingDisposers.delete(t),this.runningDisposers.add(t),e.prev=3,e.next=6,this.disposer(t);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](3);case 10:this.runningDisposers.delete(t),this.restock();case 12:case"end":return e.stop()}}),e,this,[[3,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"resolve",value:function(){this.state.busy=!1,this.state.completed=this.state.fullCount;var e=this.returnData,t=this.resolveCurrentRun;this.reset(),t(e)}},{key:"reject",value:function(e){this.state.busy=!1,this.state.error=(null===e||void 0===e?void 0:e.message)||null;var t=this.returnData,r=this.rejectCurrentRun;this.reset();var n=!0,a=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var u=i.value;void 0!==u&&this.remainingDisposers.add(u)}}catch(c){a=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}r()}},{key:"reset",value:function(){this.returnData=[],this.currentlyRunning=new Set,this.resolveCurrentRun=null,this.rejectCurrentRun=null}},{key:"remainingCapacity",get:function(){return this.parallel-this.currentlyRunning.size-this.runningDisposers.size}},{key:"busy",get:function(){return this.state.busy}},{key:"fullCount",get:function(){return this.state.fullCount}},{key:"completed",get:function(){return this.state.completed}},{key:"percentage",get:function(){return 0===this.fullCount?0:this.completed/this.fullCount}},{key:"error",get:function(){return this.state.error}}]),e}();function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={packId:"dddg.buildin.uploadedExpressions",dependencies:[],packCredits:[],characters:[],fonts:[],sprites:[],poemStyles:[],poemBackgrounds:[],backgrounds:[],colors:[]},T={"dddg.buildin.base.monika:straight":"assets/mask/monika-a-mask.png","dddg.buildin.base.monika:sideways":"assets/mask/monika-b-mask.png","dddg.buildin.base.natsuki:straight":"assets/mask/natsuki-a-mask.png","dddg.buildin.base.natsuki:sideways":"assets/mask/natsuki-b-mask.png","dddg.buildin.base.natsuki:turnedAway":"assets/mask/natsuki-c-mask.png","dddg.buildin.base.sayori:straight":"assets/mask/sayori-a-mask.png","dddg.buildin.base.sayori:sideways":"assets/mask/sayori-b-mask.png","dddg.buildin.base.yuri:straight":"assets/mask/yuri-a-mask.png","dddg.buildin.base.yuri:sideways":"assets/mask/yuri-b-mask.png"},X={"dddg.buildin.base.natsuki:straight":"assets/mask/natsuki-a-add.png"},A={},q=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.method="upload",e.headGroup=null,e.uploadsFinished=!1,e.everythingBroken=!1,e.uploadedExpressions=[],e.currentUploadedExpression=null,e.previewPoseIdx=0,e.offsetX=0,e.offsetY=0,e.addMask=!1,e.addExtras=!1,e.batchRunner=new Y(e.processExpression.bind(Object(l["a"])(e)),function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}return Object(p["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){var e=this;window.exp=this,this.initHeadGroup&&(this.headGroup=this.availableHeadGroups.find((function(t){return t.name===e.initHeadGroup}))),this.applySingleHeadGroup()}},{key:"applySingleHeadGroup",value:function(){1===this.availableHeadGroups.length&&(this.headGroup=this.availableHeadGroups[0])}},{key:"addByUpload",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs.upload,t.files){e.next=3;break}return e.abrupt("return");case 3:for(r=!0,n=!1,a=void 0,e.prev=6,s=t.files[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)o=i.value,this.addByImageFile(o);e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](6),n=!0,a=e.t0;case 14:e.prev=14,e.prev=15,r||null==s.return||s.return();case 17:if(e.prev=17,!n){e.next=20;break}throw a;case 20:return e.finish(17);case 21:return e.finish(14);case 22:case"end":return e.stop()}}),e,this,[[6,10,14,22],[15,,17,21]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addByImageFile",value:function(e){var t=URL.createObjectURL(e);this.addUrl(t)}},{key:"addByUrl",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U["a"].prompt("Enter the url of the image.","");case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:this.addUrl(t);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addUrl",value:function(e){this.currentUploadedExpression=e,this.uploadedExpressions.push(e)}},{key:"processExpression",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s,o,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(H["c"])(t);case 2:if(a=e.sent,r()){e.next=5;break}return e.abrupt("return",void 0);case 5:return s=new z["a"](a.width+this.offsetX,a.height+this.offsetY),e.next=8,s.renderToBlob(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.drawImage({image:a,x:u.offsetX,y:u.offsetY,w:a.width,h:a.height}),!(u.addMask&&u.headGroup&&u.headGroup.imagePatching&&u.headGroup.imagePatching.mask)){e.next=8;break}return e.next=4,Object(H["c"])(u.headGroup.imagePatching.mask);case 4:if(n=e.sent,r()){e.next=7;break}return e.abrupt("return",void 0);case 7:t.drawImage({image:n,x:0,y:0,w:n.width,h:n.height,composite:"destination-in"});case 8:if(!(u.addExtras&&u.headGroup&&u.headGroup.imagePatching&&u.headGroup.imagePatching.addition)){e.next=15;break}return e.next=11,Object(H["c"])(u.headGroup.imagePatching.addition);case 11:if(s=e.sent,r()){e.next=14;break}return e.abrupt("return",void 0);case 14:t.drawImage({image:s,x:0,y:0,w:s.width,h:s.height});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:return o=e.sent,n=URL.createObjectURL(o),t!==n&&t.startsWith("blob:")&&URL.revokeObjectURL(t),e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"redraw",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.uploadsFinished){e.next=2;break}return e.abrupt("return");case 2:if(t=this.previewPoses[this.previewPoseIdx],t){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.t0=$["a"],e.t1=F({},W,{width:t.width,height:t.height,poseId:this.previewPoseIdx,x:t.width/2,posePositions:{headGroup:0,head:this.uploadedExpressions.indexOf(this.currentUploadedExpression)}}),e.next=10,this.temporaryCharacterModel;case 10:e.t2=e.sent,r=new e.t0(e.t1,e.t2),e.next=17;break;case 14:return e.prev=14,e.t3=e["catch"](5),e.abrupt("return");case 17:this.$nextTick(Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.uploadsFinished){e.next=2;break}return e.abrupt("return");case 2:return a=new z["a"](t.width,t.height),e.next=5,a.render(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.render(!1,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:s=n.$refs.target,o=s.getContext("2d"),o.clearRect(0,0,s.width,s.height),a.paintOnto(o,0,0,s.width,s.height);case 9:case"end":return e.stop()}}),e)}))));case 18:case"end":return e.stop()}}),e,this,[[5,14]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"finishUpload",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,i,o,u,c,d,l,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.uploadsFinished=!0,e.next=3,this.batchRunner.run(this.uploadedExpressions);case 3:for(e.t0=function(e){return e},t=e.sent.filter(e.t0),r=this.$store.state.content.current.characters.find((function(e){return e.id===p.character})),n=L.characters.find((function(e){return e.id===p.character})),n||(n={id:this.character,heads:{},styleGroups:[],label:"",chibi:""},L.characters.push(n)),a=n.heads[this.headGroup.name],s=r.heads[this.headGroup.name],a||(a={previewSize:s.previewSize,previewOffset:s.previewOffset,variants:[]},n.heads[this.headGroup.name]=a),i=!0,o=!1,u=void 0,e.prev=14,c=t[Symbol.iterator]();!(i=(d=c.next()).done);i=!0)l=d.value,a.variants.push([l]);e.next=22;break;case 18:e.prev=18,e.t1=e["catch"](14),o=!0,u=e.t1;case 22:e.prev=22,e.prev=23,i||null==c.return||c.return();case 25:if(e.prev=25,!o){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.next=32,this.vuexHistory.transaction((function(){p.$store.dispatch("content/replaceContentPack",{contentPack:L})}));case 32:this.leave();case 33:case"end":return e.stop()}}),e,this,[[14,18,22,30],[23,,25,29]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"leave",value:function(){this.$emit("leave"),this.method=null,this.headGroup=null,this.uploadedExpressions=[]}},{key:"removeUploadedExpression",value:function(){if(this.currentUploadedExpression){var e=this.currentUploadedExpression;this.currentUploadedExpression=null,e.startsWith("blob:")&&URL.revokeObjectURL(e);var t=this.uploadedExpressions.indexOf(e);this.uploadedExpressions.splice(t,1),t>this.uploadedExpressions.length-1&&(t=this.uploadedExpressions.length-1),this.currentUploadedExpression=this.uploadedExpressions[t]||null}}},{key:"normalizeName",value:function(e){var t=e.split(":"),r=t[t.length-1],n=t.length>1?t[0].trim():"";return r=(r[0].toUpperCase()+r.slice(1).toLowerCase()).split("_").join(" "),n.startsWith("dddg.")||""===n?r:n+": "+r}},{key:"dragEnter",value:function(e){this.headGroup&&"upload"===this.method&&e.dataTransfer&&(e.dataTransfer.effectAllowed="none",Array.from(e.dataTransfer.items).find((function(e){return e.type.match(/^image.*$/)}))&&(e.dataTransfer.effectAllowed="link",this.$refs.dt.show()))}},{key:"hideDt",value:function(){this.$refs.dt&&this.$refs.dt.hide()}},{key:"characterData",get:function(){var e=this;return this.$store.state.content.current.characters.find((function(t){return t.id===e.character}))}},{key:"availableHeadGroups",get:function(){var e=this.characterData,t=Object.keys(e.heads);return t.map((function(t){var r=e.heads[t];return{name:t,preview:r.variants[0].map((function(e){return e.lq})),partsFiles:A[t]||[],imagePatching:{mask:T[t],addition:X[t]}}}))}},{key:"hasParts",get:function(){return!!this.availableHeadGroups.find((function(e){return e.partsFiles.length>0}))}},{key:"previewPoses",get:function(){var e=this.characterData;if(!e||!this.headGroup)return[];for(var t=[],r=0;r<e.styleGroups.length;++r)for(var n=e.styleGroups[r],a=0;a<n.styles.length;++a)for(var s=n.styles[a],i=0;i<s.poses.length;++i){var o=s.poses[i];o.compatibleHeads.includes(this.headGroup.name)&&t.push({name:o.id,styleGroupId:r,styleId:a,poseId:i,width:o.size[0],height:o.size[1]})}return t}},{key:"expressionModels",get:function(){return this.uploadedExpressions.map((function(e){return[{hq:e,lq:e,sourcePack:"dddg.temp1:default"}]}))}},{key:"temporaryCharacterModel",get:function(){var e=this,t=this.previewPoses,r=this.$store.state.content.current.characters.find((function(t){return t.id===e.character})),n=this.offsetX,a=this.offsetY;return{id:this.character,heads:{"dddg.temp1:default":{variants:this.expressionModels,previewSize:[0,0],previewOffset:[0,0]}},styleGroups:[{id:"preview",styleComponents:[],styles:[{components:{},poses:t.map((function(t,s){var i=r.styleGroups[t.styleGroupId],o=i.styles[t.styleId],u=o.poses[t.poseId].renderCommands.slice(0),c=u.findIndex((function(e){return"head"===e.type})),d=u[c],l={type:"head",offset:[d.offset[0]+n,d.offset[1]+a]};if(e.addMask&&e.headGroup&&e.headGroup.imagePatching&&e.headGroup.imagePatching.mask){var p=e.headGroup.imagePatching.mask;u.splice(c,1),c=1,u.splice(0,0,l,{type:"image",images:[{hq:p,lq:p,sourcePack:"dddg.temp1"}],composite:"destination-in",offset:d.offset})}else u.splice(c,1,l);if(e.addExtras&&e.headGroup&&e.headGroup.imagePatching&&e.headGroup.imagePatching.addition){var h=e.headGroup.imagePatching.addition;u.splice(c+1,0,{type:"image",images:[{hq:h,lq:h,sourcePack:"dddg.temp1"}],offset:d.offset})}return F({},o.poses[t.poseId],{renderCommands:u,id:"dddg.temp1:pose"+s,compatibleHeads:["dddg.temp1:default"]})}))}]}],label:"",chibi:null}}}]),t}(Object(f["b"])(S));q.nr=0,Object(h["a"])([Object(f["c"])()],q.prototype,"character",void 0),Object(h["a"])([Object(f["c"])()],q.prototype,"initHeadGroup",void 0),Object(h["a"])([Object(f["e"])("availableHeadGroups")],q.prototype,"applySingleHeadGroup",null),Object(h["a"])([Object(f["e"])("previewPoseIdx"),Object(f["e"])("previewPoses"),Object(f["e"])("currentUploadedExpression"),Object(f["e"])("offsetX"),Object(f["e"])("offsetY"),Object(f["e"])("addMask"),Object(f["e"])("addExtras")],q.prototype,"redraw",null),q=Object(h["a"])([Object(f["a"])({components:{Selection:x,Selector:E,ToggleBox:C["a"],DropTarget:D["a"]}})],q);var N=q,W={type:"character",characterType:"",freeMove:!1,close:!1,styleGroupId:0,styleId:0,poseId:0,posePositions:{},panelId:"",id:"",y:0,preserveRatio:!0,ratio:1,opacity:100,version:1,flip:!1,onTop:!1},J=N,K=(r("e341"),Object(k["a"])(J,n,a,!1,null,"ae39e754",null));t["default"]=K.exports},e341:function(e,t,r){"use strict";var n=r("e3e1"),a=r.n(n);a.a},e3e1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-76202466.b15ab5d9.js.map