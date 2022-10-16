import{g as V,v as G,s as T,C as x}from"./Validator.e0ff0691.js";import{D as y,a as S,_ as N,g as k,n as m}from"./notify.5f6b1d3c.js";import{D as I,b as F,c as A,d as H,e as R,f as z,g as U,h as $,i as j,j as q,k as E,l as M,_ as O,m as J,n as K}from"./scroll-view.219cb9af.js";import{_ as L}from"./check-box.7f5972a9.js";import{_ as Q,r as l,o as W,c as X,a as o,w as n,b as s,aC as Y}from"./index.6eb5cfaa.js";import"./exporter.44b2b8c9.js";const Z=async e=>{let a=await V(x,e);return a.sort((t,c)=>t.name>c.name?1:t.name===c.name?0:-1),a.forEach(t=>{t.enabled=t.enabled==null?!0:t.enabled}),a},ee=async e=>{e.id||(e.active=!0),G(e,[{name:"name",descripcion:"Nombre",required:!0},{name:"dni",descripcion:"DNI",required:!0}]),await T(x,e)},oe={components:{DxDataGrid:I,DxColumn:F,DxFilterRow:A,DxGrouping:H,DxGroupPanel:R,DxSearchPanel:z,DxHeaderFilter:U,DxScrolling:$,DxGridToolbar:j,DxItem:q,DxSelectBox:E,DxGridButton:M,DxPopup:y,DxToolbarItem:S,DxTextBox:N,DxButton:O,DxScrollView:J,DxCheckBox:L},data:()=>({showPopup:!1,crudTitle:"Detalle de Ciudadano",items:[],model:{type:{}},newPassword:null}),mounted(){this.listAll()},methods:{create(){k(),this.model={active:!0},this.showPopup=!0},onClosePopup(){this.showPopup=!1},async disable(){K("Seguro deseas cambiar el estado","Confirmar").then(async a=>{try{if(a){let t=Object.assign({},this.model);t.enabled=!1,await ee(t),t.id&&(m("Desabilitado con \xE9xito","success",3e3),this.listAll(),this.showPopup=!1)}}catch(t){console.log(t.message),m(t,"error",4e3)}})},showDetail(e){this.model=e,this.newPassword=null,this.showPopup=!0},async listAll(e){this.items=await Z(e)}}},te={style:{padding:"10px",width:"100vw","box-sizing":"border-box"}},le=s("label",{style:{"font-size":"1.2em","margin-bottom":"5px"}},"Ciudadanos registrados",-1),ae=["onClick"],se=s("i",{class:"dx-icon-doc"},null,-1),ie={class:"dx-field"},ne=s("div",{class:"dx-field-label"},"DNI",-1),de={class:"dx-field-value"},re={class:"dx-field"},ce=s("div",{class:"dx-field-label"},"Nombre",-1),ue={class:"dx-field-value"},me={class:"dx-field"},xe=s("div",{class:"dx-field-label"},"Apellidos",-1),pe={class:"dx-field-value"};function De(e,a,t,c,_e,r){const p=l("DxFilterRow"),D=l("DxHeaderFilter"),_=l("DxSearchPanel"),h=l("DxScrolling"),f=l("DxGroupPanel"),d=l("DxColumn"),b=l("DxItem"),w=l("DxGridToolbar"),v=l("DxButton"),g=l("DxDataGrid"),u=l("DxTextBox"),C=l("DxScrollView"),P=l("DxToolbarItem"),B=l("DxPopup");return W(),X("div",te,[le,o(g,{id:"dataGrid",ref:"dataGridRef","data-source":e.items,"key-expr":"id","show-borders":!0,height:"calc(100vh - 72px)",width:"600px","allow-column-resizing":!0},{buttonsTemplate:n(({data:i})=>[s("a",{onClick:he=>r.showDetail(i.data),style:{cursor:"pointer",color:"blue"}},[se,Y("\xA0Ver")],8,ae)]),refreshButton:n(()=>[o(v,{icon:"refresh",onClick:r.listAll},null,8,["onClick"])]),default:n(()=>[o(p,{visible:!0}),o(D,{visible:!0}),o(_,{visible:!0,width:240,placeholder:"Buscar..."}),o(h,{mode:"virtual"}),o(f,{visible:!0}),o(d,{width:"120","data-field":"dni",caption:"DNI"}),o(d,{width:"120","data-field":"lastName",caption:"Apellidos","sort-order":"asc"}),o(d,{width:"120","data-field":"name",caption:"Nombre","sort-order":"asc"}),o(d,{width:"120","data-field":"enabled",caption:"Habilitado","data-type":"boolean"}),o(d,{type:"buttons",width:110,"cell-template":"buttonsTemplate"}),o(w,null,{default:n(()=>[o(b,{location:"after",template:"refreshButton"})]),_:1})]),_:1},8,["data-source"]),o(B,{visible:e.showPopup,"drag-enabled":!0,"hide-on-outside-click":!1,"show-close-button":!0,"show-title":!0,width:400,height:300,title:e.crudTitle,"on-hidden":r.onClosePopup},{default:n(()=>[o(C,{height:"calc(400px - 135px)"},{default:n(()=>[s("div",ie,[ne,s("div",de,[o(u,{modelValue:e.model.dni,"onUpdate:modelValue":a[0]||(a[0]=i=>e.model.dni=i)},null,8,["modelValue"])])]),s("div",re,[ce,s("div",ue,[o(u,{modelValue:e.model.name,"onUpdate:modelValue":a[1]||(a[1]=i=>e.model.name=i)},null,8,["modelValue"])])]),s("div",me,[xe,s("div",pe,[o(u,{modelValue:e.model.lastName,"onUpdate:modelValue":a[2]||(a[2]=i=>e.model.lastName=i)},null,8,["modelValue"])])])]),_:1}),o(P,{widget:"dxButton",toolbar:"bottom",location:"after",options:{text:"Deshabilitar",type:"danger",onClick:r.disable}},null,8,["options"])]),_:1},8,["visible","title","on-hidden"])])}const Pe=Q(oe,[["render",De]]);export{Pe as default};
