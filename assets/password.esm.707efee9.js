import{Z as d,D as r,C as k,h as m,o as u,c as p,a as h,m as x,n as a,i as y,j as g,T as C,k as c,l as v,d as f,t as L}from"./index.841e0e4e.js";import{O as S,a as T,b as z}from"./plugin-vue_export-helper.5a311d7c.js";var E={name:"Password",emits:["update:modelValue"],inheritAttrs:!1,props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:String,default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:"pi pi-eye-slash"},showIcon:{type:String,default:"pi pi-eye"},inputClass:null,inputStyle:null,style:null,class:String,panelClass:String},data(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(d.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter(e){d.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(e){d.clear(e)},alignOverlay(){this.appendTo==="self"?r.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=r.getOuterWidth(this.$refs.input.$el)+"px",r.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength(e){let s=0;return this.strongCheckRegExp.test(e)?s=3:this.mediumCheckRegExp.test(e)?s=2:e.length&&(s=1),s},onInput(e){this.$emit("update:modelValue",e.target.value)},onFocus(){this.focused=!0,this.feedback&&(this.overlayVisible=!0)},onBlur(){this.focused=!1,this.feedback&&(this.overlayVisible=!1)},onKeyUp(e){if(this.feedback){const s=e.target.value;let l=null,i=null;switch(this.testStrength(s)){case 1:l=this.weakText,i={strength:"weak",width:"33.33%"};break;case 2:l=this.mediumText,i={strength:"medium",width:"66.66%"};break;case 3:l=this.strongText,i={strength:"strong",width:"100%"};break;default:l=this.promptText,i=null;break}this.meter=i,this.infoText=l,this.overlayVisible||(this.overlayVisible=!0)}},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new k(this.$refs.input.$el,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!r.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef(e){this.overlay=e},onMaskToggle(){this.unmasked=!this.unmasked},onOverlayClick(e){S.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{containerClass(){return["p-password p-component p-inputwrapper",this.class,{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-input-icon-right":this.toggleMask}]},inputFieldClass(){return["p-password-input",this.inputClass,{"p-disabled":this.$attrs.disabled}]},panelStyleClass(){return["p-password-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},toggleIconClass(){return this.unmasked?this.hideIcon:this.showIcon},strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`},inputType(){return this.unmasked?"text":"password"},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0},weakText(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText(){return this.strongLabel||this.$primevue.config.locale.strong},promptText(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt}},components:{PInputText:T,Portal:z}};const R={class:"p-password-meter"},V={class:"p-password-info"};function I(e,s,l,i,n,t){const b=m("PInputText"),w=m("Portal");return u(),p("div",{class:a(t.containerClass),style:v(l.style)},[h(b,x({ref:"input",class:t.inputFieldClass,style:l.inputStyle,type:t.inputType,value:l.modelValue,onInput:t.onInput,onFocus:t.onFocus,onBlur:t.onBlur,onKeyup:t.onKeyUp},e.$attrs),null,16,["class","style","type","value","onInput","onFocus","onBlur","onKeyup"]),l.toggleMask?(u(),p("i",{key:0,class:a(t.toggleIconClass),onClick:s[0]||(s[0]=(...o)=>t.onMaskToggle&&t.onMaskToggle(...o))},null,2)):y("",!0),h(w,{appendTo:l.appendTo},{default:g(()=>[h(C,{name:"p-connected-overlay",onEnter:t.onOverlayEnter,onLeave:t.onOverlayLeave,onAfterLeave:t.onOverlayAfterLeave},{default:g(()=>[n.overlayVisible?(u(),p("div",{key:0,ref:t.overlayRef,class:a(t.panelStyleClass),onClick:s[1]||(s[1]=(...o)=>t.onOverlayClick&&t.onOverlayClick(...o))},[c(e.$slots,"header"),c(e.$slots,"content",{},()=>[f("div",R,[f("div",{class:a(t.strengthClass),style:v({width:n.meter?n.meter.width:""})},null,6)]),f("div",V,L(n.infoText),1)]),c(e.$slots,"footer")],2)):y("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],6)}function O(e,s){s===void 0&&(s={});var l=s.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var B=`
.p-password {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-password-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-password .p-password-panel {
    min-width: 100%;
}
.p-password-meter {
    height: 10px;
}
.p-password-strength {
    height: 100%;
    width: 0;
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-fluid .p-password {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
`;O(B);E.render=I;export{E as s};
