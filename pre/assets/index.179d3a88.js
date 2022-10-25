var F=Object.defineProperty;var M=(e,s,t)=>s in e?F(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var m=(e,s,t)=>(M(e,typeof s!="symbol"?s+"":s,t),t);import{x as T,d as _,_ as x,o as l,c as p,a as n,t as D,s as j,b as S,y as O,z as V,j as N,D as q,A,L as X,k as Y,B as U,C as z,E as W,S as J,l as b,q as g,i as v,F as C,m as k,e as $,h as P,r as E,n as Q,w as I,G as Z,v as H,p as K,g as ee}from"./index.686bfb1a.js";class se{constructor(s,t,i=4){m(this,"state",T({busy:!1,error:null,completed:0,fullCount:0}));m(this,"pendingData",[]);m(this,"currentlyRunning",new Set);m(this,"resolveCurrentRun",null);m(this,"rejectCurrentRun",null);m(this,"returnData",[]);m(this,"remainingDisposers",new Set);m(this,"runningDisposers",new Set);this.runner=s,this.disposer=t,this.parallel=i}run(s){return this.rejectCurrentRun&&this.reject(),s=s.slice(),this.pendingData=s,this.returnData=[],this.state.fullCount=s.length,this.state.error=null,this.state.busy=!0,this.state.completed=0,new Promise((t,i)=>{this.resolveCurrentRun=t,this.rejectCurrentRun=i,s.length>0?this.restock():this.resolve()})}get remainingCapacity(){return this.parallel-this.currentlyRunning.size-this.runningDisposers.size}restock(){for(;this.remainingCapacity>0&&this.pendingData.length>0;)this.startOne();for(;this.remainingCapacity>0&&this.remainingDisposers.size>0;)this.startDisposer()}async startOne(){const s=this.pendingData.shift(),t=this.returnData.length;if(this.returnData[t]=void 0,s==null)return;this.currentlyRunning.add(s);const i=()=>this.currentlyRunning.has(s);let r;try{r=await this.runner(s,i)}catch(d){this.reject(d)}i()?(++this.state.completed,this.returnData[t]=r,this.currentlyRunning.delete(s),this.currentlyRunning.size===0&&this.pendingData.length===0&&this.resolve()):r!==void 0&&this.remainingDisposers.add(r),this.restock()}async startDisposer(){const s=this.remainingDisposers.values().next().value;this.remainingDisposers.delete(s),this.runningDisposers.add(s);try{await this.disposer(s)}catch{}this.runningDisposers.delete(s),this.restock()}resolve(){this.state.busy=!1,this.state.completed=this.state.fullCount;const s=this.returnData,t=this.resolveCurrentRun;this.reset(),t(s)}reject(s){var r;this.state.busy=!1,this.state.error=(r=s==null?void 0:s.message)!=null?r:null;const t=this.returnData,i=this.rejectCurrentRun;this.reset();for(const d of t)d!==void 0&&this.remainingDisposers.add(d);i()}reset(){this.returnData=[],this.currentlyRunning=new Set,this.resolveCurrentRun=null,this.rejectCurrentRun=null}get busy(){return this.state.busy}get fullCount(){return this.state.fullCount}get completed(){return this.state.completed}get percentage(){return this.fullCount===0?0:this.completed/this.fullCount}get error(){return this.state.error}}const te=_({props:{icon:String,label:String,images:{default:[]}},computed:{background(){return this.images.map(e=>`center / contain no-repeat url('${e}')`).join(",")}}});const ae={class:"icon material-icons"},ie={class:"label"};function re(e,s,t,i,r,d){return l(),p("div",{class:"selection",style:j({background:e.background}),onClick:s[0]||(s[0]=S(u=>e.$emit("selected"),["stop"]))},[n("div",ae,D(e.icon),1),n("div",ie,D(e.label),1)],4)}const ne=x(te,[["render",re],["__scopeId","data-v-9845bfb8"]]),de=_({});const oe={class:"selector"};function le(e,s,t,i,r,d){return l(),p("div",oe,[O(e.$slots,"default",{},void 0,!0)])}const he=x(de,[["render",le],["__scopeId","data-v-5cd45a10"]]),R={packId:"dddg.buildin.uploadedExpressions",dependencies:[],packCredits:[],characters:[],fonts:[],sprites:[],poemStyles:[],poemBackgrounds:[],backgrounds:[],colors:[]},ue={"dddg.buildin.base.monika:straight":"assets/mask/monika-a-mask.png","dddg.buildin.base.monika:sideways":"assets/mask/monika-b-mask.png","dddg.buildin.base.natsuki:straight":"assets/mask/natsuki-a-mask.png","dddg.buildin.base.natsuki:sideways":"assets/mask/natsuki-b-mask.png","dddg.buildin.base.natsuki:turnedAway":"assets/mask/natsuki-c-mask.png","dddg.buildin.base.sayori:straight":"assets/mask/sayori-a-mask.png","dddg.buildin.base.sayori:sideways":"assets/mask/sayori-b-mask.png","dddg.buildin.base.yuri:straight":"assets/mask/yuri-a-mask.png","dddg.buildin.base.yuri:sideways":"assets/mask/yuri-b-mask.png"},pe={"dddg.buildin.base.natsuki:straight":"assets/mask/natsuki-a-add.png"},h="https://github.com/edave64/Doki-Doki-Dialog-Generator/tree/master/public/assets/",L={"dddg.buildin.base.monika:ddlc.monika":`${h}monika`,"dddg.buildin.base.natsuki:ddlc.natsuki":`${h}natsuki`,"dddg.buildin.base.sayori:ddlc.sayori":`${h}sayori`,"dddg.buildin.base.yuri:ddlc.yuri":`${h}yuri`,"dddg.buildin.amy1:ddlc.fan.amy1":`${h}classic_amy`,"dddg.buildin.amy2:ddlc.fan.amy2":`${h}amy`,"dddg.buildin.femc:ddlc.fan.femc":`${h}femc`,"dddg.buildin.femc:ddlc.fan.femc:straight_lh":`${h}femc_lh`,"dddg.buildin.femc:ddlc.fan.femc:straight_hetero":`${h}femc/hetero`,"dddg.buildin.femc:ddlc.fan.femc:straight_hetero_lh":`${h}femc_lh/hetero`,"dddg.buildin.mc_classic:ddlc.fan.mc1":`${h}classic_mc`,"dddg.buildin.mc:ddlc.fan.mc2":`${h}mc`,"dddg.buildin.mc:ddlc.fan.mc2:straight_red":`${h}mc/red`,"dddg.buildin.mc_chad:ddlc.fan.mc_chad":`${h}chad`,"dddg.buildin.mc_chad:ddlc.fan.mc_chad:straight_red":`${h}chad/red`},ce={},me={type:"character",characterType:"",freeMove:!1,close:!1,styleGroupId:0,styleId:0,poseId:0,posePositions:{},panelId:0,id:0,y:0,rotation:0,preserveRatio:!0,ratio:1,opacity:100,version:1,flip:!1,onTop:!1,composite:"source-over",filters:[]},fe=_({mixins:[V],components:{Selection:ne,Selector:he,ToggleBox:N,DropTarget:q,DFieldset:A,L:X},props:{character:{type:String,required:!0},initHeadGroup:String},data:()=>({method:"upload",headGroup:null,uploadsFinished:!1,everythingBroken:!1,uploadedExpressions:[],currentUploadedExpression:null,previewPoseIdx:0,offsetX:0,offsetY:0,addMask:!1,addExtras:!1,batchRunner:null}),created(){window.exp=this,this.batchRunner=new se(this.processExpression.bind(this),async()=>{}),this.initHeadGroup!=null&&(this.headGroup=this.availableHeadGroups.find(e=>e.name===this.initHeadGroup)),this.applySingleHeadGroup()},watch:{availableHeadGroups(){this.applySingleHeadGroup()},previewPoseIdx(){this.redraw()},previewPoses(){this.redraw()},currentUploadedExpression(){this.redraw()},offsetX(){this.redraw()},offsetY(){this.redraw()},addMask(){this.redraw()},addExtras(){this.redraw()}},methods:{applySingleHeadGroup(){this.availableHeadGroups.length===1&&(this.headGroup=this.availableHeadGroups[0])},async addByUpload(){const e=this.$refs.upload;if(!!e.files)for(const s of e.files)this.addByImageFile(s)},addByImageFile(e){const s=URL.createObjectURL(e);this.addUrl(s)},async addByUrl(){const e=await Y.prompt("Enter the url of the image.","");e!=null&&this.addUrl(e)},addUrl(e){this.currentUploadedExpression=e,this.uploadedExpressions.push(e)},async processExpression(e,s){const t=await U(e);if(!s())return;const r=await new z(t.width+this.offsetX,t.height+this.offsetY).renderToBlob(async u=>{if(u.drawImage({image:t,x:this.offsetX,y:this.offsetY,w:t.width,h:t.height}),this.addMask&&this.headGroup&&this.headGroup.imagePatching&&this.headGroup.imagePatching.mask!=null){const o=await U(this.headGroup.imagePatching.mask);if(!s())return;u.drawImage({image:o,x:0,y:0,w:o.width,h:o.height,composite:"destination-in"})}if(this.addExtras&&this.headGroup&&this.headGroup.imagePatching&&this.headGroup.imagePatching.addition!=null){const o=await U(this.headGroup.imagePatching.addition);if(!s())return;u.drawImage({image:o,x:0,y:0,w:o.width,h:o.height})}}),d=URL.createObjectURL(r);return e!==d&&e.startsWith("blob:")&&URL.revokeObjectURL(e),d},async redraw(){if(this.uploadsFinished)return;const e=this.previewPoses[this.previewPoseIdx];let s;try{s=new W({...me,width:e.width,height:e.height,poseId:this.previewPoseIdx,x:e.width/2,posePositions:{headGroup:0,head:this.uploadedExpressions.indexOf(this.currentUploadedExpression)},label:null,textboxColor:null,enlargeWhenTalking:!1,nameboxWidth:null,zoom:1},await this.temporaryCharacterModel)}catch{return}this.$nextTick(async()=>{if(this.uploadsFinished)return;const t=new z(e.width,e.height);await t.render(async d=>{await s.render(J.None,d)});const i=this.$refs.target,r=i.getContext("2d");r.clearRect(0,0,i.width,i.height),t.paintOnto(r,{x:0,y:0,w:i.width,h:i.height})})},async finishUpload(){this.uploadsFinished=!0;const e=(await this.batchRunner.run(this.uploadedExpressions)).filter(d=>d),s=this.$store.state.content.current.characters.find(d=>d.id===this.character);let t=R.characters.find(d=>d.id===this.character);t||(t={id:this.character,heads:{},styleGroups:[],label:"",chibi:"",size:[960,960],defaultScale:[.8,.8],hd:!1},R.characters.push(t));let i=t.heads[this.headGroup.name];const r=s.heads[this.headGroup.name];i||(i={previewSize:r.previewSize,previewOffset:r.previewOffset,variants:[]},t.heads[this.headGroup.name]=i);for(const d of e)i.variants.push([d]);await this.vuexHistory.transaction(()=>{this.$store.dispatch("content/replaceContentPack",{contentPack:R})}),this.leave()},leave(){this.$emit("leave"),this.method=null,this.headGroup=null,this.uploadedExpressions=[]},removeUploadedExpression(){if(this.currentUploadedExpression==null)return;const e=this.currentUploadedExpression;this.currentUploadedExpression=null,e.startsWith("blob:")&&URL.revokeObjectURL(e);let s=this.uploadedExpressions.indexOf(e);this.uploadedExpressions.splice(s,1),s>this.uploadedExpressions.length-1&&(s=this.uploadedExpressions.length-1),this.currentUploadedExpression=this.uploadedExpressions[s]||null},normalizeName(e){const s=e.split(":");let t=s[s.length-1];const i=s.length>1?s[0].trim():"";return t=(t[0].toUpperCase()+t.slice(1).toLowerCase()).split("_").join(" "),i.startsWith("dddg.")||i===""?t:i+": "+t},dragEnter(e){!this.headGroup||this.method!=="upload"||!e.dataTransfer||(e.dataTransfer.effectAllowed="none",Array.from(e.dataTransfer.items).find(s=>s.type.match(/^image.*$/))&&(e.dataTransfer.effectAllowed="link",this.$refs.dt.show()))},hideDt(){this.$refs.dt&&this.$refs.dt.hide()}},computed:{characterData(){return this.$store.state.content.current.characters.find(e=>e.id===this.character)},availableHeadGroups(){const e=this.characterData;return Object.keys(e.heads).map(t=>{const i=e.heads[t];return{name:t,preview:i.variants[0].map(r=>r.lq),partsFiles:ce[t]||[],imagePatching:{mask:ue[t],addition:pe[t]}}})},hasParts(){return!!this.availableHeadGroups.find(e=>e.partsFiles.length>0)},downloadLink(){const e=this.characterData;return this.headGroup?e.heads[this.headGroup.name].variants[0][0].hq:null},listLink(){var t,i;if(!this.headGroup)return null;const e=this.characterData.id,s=this.headGroup.name;return(i=(t=L[e+":"+s])!=null?t:L[e])!=null?i:null},previewPoses(){const e=this.characterData;if(!this.headGroup)return[];const s=[];for(let t=0;t<e.styleGroups.length;++t){const i=e.styleGroups[t];for(let r=0;r<i.styles.length;++r){const d=i.styles[r];for(let u=0;u<d.poses.length;++u){const o=d.poses[u];o.compatibleHeads.includes(this.headGroup.name)&&s.push({name:o.id,styleGroupId:t,styleId:r,poseId:u,width:o.size[0],height:o.size[1]})}}}return s},expressionModels(){return this.uploadedExpressions.map(e=>[{hq:e,lq:e,sourcePack:"dddg.temp1:default"}])},temporaryCharacterModel(){const e=this.previewPoses,s=this.$store.state.content.current.characters.find(r=>r.id===this.character),t=this.offsetX,i=this.offsetY;return{id:this.character,size:[960,960],defaultScale:[.8,.8],hd:!1,heads:{"dddg.temp1:default":{variants:this.expressionModels,previewSize:[0,0],previewOffset:[0,0]}},styleGroups:[{id:"preview",styleComponents:[],styles:[{components:{},poses:e.map((r,d)=>{const o=s.styleGroups[r.styleGroupId].styles[r.styleId],c=o.poses[r.poseId].renderCommands.slice(0);let f=c.findIndex(a=>a.type==="head");const y=c[f],w={type:"head",offset:[y.offset[0]+t,y.offset[1]+i]};if(this.addMask&&this.headGroup&&this.headGroup.imagePatching&&this.headGroup.imagePatching.mask!=null){const a=this.headGroup.imagePatching.mask;c.splice(f,1),f=1,c.splice(0,0,w,{type:"image",images:[{hq:a,lq:a,sourcePack:"dddg.temp1"}],composite:"destination-in",offset:y.offset})}else c.splice(f,1,w);if(this.addExtras&&this.headGroup&&this.headGroup.imagePatching&&this.headGroup.imagePatching.addition!=null){const a=this.headGroup.imagePatching.addition;c.splice(f+1,0,{type:"image",images:[{hq:a,lq:a,sourcePack:"dddg.temp1"}],offset:y.offset})}return{...o.poses[r.poseId],renderCommands:c,id:"dddg.temp1:pose"+d,compatibleHeads:["dddg.temp1:default"]}})}]}],label:"",chibi:null}}}});const B=e=>(K("data-v-2bff7b68"),e=e(),ee(),e),ge=B(()=>n("h1",null,"Add expressions",-1)),ye={key:0,class:"page"},be=k("(Template)"),ve=k("(List)"),ke=k("Drop here to add as a new expression "),we={class:"expression_list_wrapper"},Ge=k(" Upload expression "),$e=["onClick"],De={class:"options_wrapper"},Ce={class:"image"},Pe=["width","height"],Ue=k(" Preview pose: "),Ee=["value"],Ie=B(()=>n("th",null,"X:",-1)),Re=B(()=>n("th",null,"Y:",-1)),Se=["disabled"],_e={key:1};function xe(e,s,t,i,r,d){const u=b("selection"),o=b("selector"),c=b("l"),f=b("drop-target"),y=b("d-fieldset"),w=b("toggle-box");return l(),p("div",{class:"wrapper",onDragenter:s[16]||(s[16]=(...a)=>e.dragEnter&&e.dragEnter(...a)),onMouseleave:s[17]||(s[17]=(...a)=>e.hideDt&&e.hideDt(...a))},[ge,e.headGroup?e.method?e.method==="upload"?(l(),p(C,{key:2},[e.uploadsFinished?(l(),p("div",_e,[n("h2",null," Finishing up images. "+D(Math.round(e.batchRunner.percentage*100))+"% ",1)])):(l(),p("div",ye,[n("h2",null,[k(" Upload new '"+D(e.normalizeName(e.headGroup.name))+"' expressions ",1),e.downloadLink?(l(),g(c,{key:0,to:e.downloadLink},{default:v(()=>[be]),_:1},8,["to"])):$("",!0),e.listLink?(l(),g(c,{key:1,to:e.listLink},{default:v(()=>[ve]),_:1},8,["to"])):$("",!0)]),P(f,{ref:"dt",class:"drop-target",onDrop:e.addByImageFile},{default:v(()=>[ke]),_:1},8,["onDrop"]),n("div",we,[n("div",{class:"expression_list",onWheelPassive:s[5]||(s[5]=(...a)=>e.verticalScrollRedirect&&e.verticalScrollRedirect(...a))},[n("button",{onClick:s[3]||(s[3]=a=>e.$refs.upload.click())},[Ge,n("input",{type:"file",ref:"upload",multiple:"",onChange:s[2]||(s[2]=(...a)=>e.addByUpload&&e.addByUpload(...a))},null,544)]),n("button",{onClick:s[4]||(s[4]=(...a)=>e.addByUrl&&e.addByUrl(...a))},"Add expression from URL"),(l(!0),p(C,null,E(e.uploadedExpressions,(a,G)=>(l(),p("div",{key:G,style:j({backgroundImage:`url('${a}')`}),class:Q({expression_item:!0,active:e.currentUploadedExpression===a}),onClick:Be=>e.currentUploadedExpression=a},null,14,$e))),128))],32),n("div",De,[n("div",Ce,[n("canvas",{ref:"target",width:e.previewPoses[e.previewPoseIdx].width,height:e.previewPoses[e.previewPoseIdx].height},null,8,Pe)]),n("div",null,[Ue,I(n("select",{"onUpdate:modelValue":s[6]||(s[6]=a=>e.previewPoseIdx=a)},[(l(!0),p(C,null,E(e.previewPoses,(a,G)=>(l(),p("option",{key:G,value:G},D(e.normalizeName(a.name)),9,Ee))),128))],512),[[Z,e.previewPoseIdx]]),P(y,{title:"Offset"},{default:v(()=>[n("table",null,[n("tr",null,[Ie,n("td",null,[I(n("input",{type:"number","onUpdate:modelValue":s[7]||(s[7]=a=>e.offsetX=a),onKeydown:s[8]||(s[8]=S(()=>{},["stop"]))},null,544),[[H,e.offsetX,void 0,{number:!0}]])]),Re,n("td",null,[I(n("input",{type:"number","onUpdate:modelValue":s[9]||(s[9]=a=>e.offsetY=a),onKeydown:s[10]||(s[10]=S(()=>{},["stop"]))},null,544),[[H,e.offsetY,void 0,{number:!0}]])])])])]),_:1}),e.headGroup.imagePatching&&e.headGroup.imagePatching.mask?(l(),g(w,{key:0,label:"Reduce to fit DDDG standard",modelValue:e.addMask,"onUpdate:modelValue":s[11]||(s[11]=a=>e.addMask=a)},null,8,["modelValue"])):$("",!0),e.headGroup.imagePatching&&e.headGroup.imagePatching.addition?(l(),g(w,{key:1,label:"Add new parts to fit DDDG standard",modelValue:e.addExtras,"onUpdate:modelValue":s[12]||(s[12]=a=>e.addExtras=a)},null,8,["modelValue"])):$("",!0),n("button",{disabled:e.currentUploadedExpression===null,onClick:s[13]||(s[13]=(...a)=>e.removeUploadedExpression&&e.removeUploadedExpression(...a))}," Remove this expression ",8,Se),n("button",{onClick:s[14]||(s[14]=(...a)=>e.finishUpload&&e.finishUpload(...a))},"Finish"),n("button",{onClick:s[15]||(s[15]=(...a)=>e.leave&&e.leave(...a))},"Abort")])])])]))],64)):$("",!0):(l(),g(o,{key:1,label:"How would you like to add the new expressions?"},{default:v(()=>[P(u,{label:"Build expressions from parts",icon:"info",disabled:e.hasParts,onSelected:s[0]||(s[0]=a=>e.method="parts")},null,8,["disabled"]),P(u,{label:"Upload expression images",icon:"info",onSelected:s[1]||(s[1]=a=>e.method="upload")})]),_:1})):(l(),g(o,{key:0,label:"What kind of expression would you like to add?"},{default:v(()=>[(l(!0),p(C,null,E(e.availableHeadGroups,a=>(l(),g(u,{key:a.name,label:e.normalizeName(a.name),images:a.preview,onSelected:G=>e.headGroup=a},null,8,["label","images","onSelected"]))),128))]),_:1}))],32)}const Le=x(fe,[["render",xe],["__scopeId","data-v-2bff7b68"]]);export{Le as default};