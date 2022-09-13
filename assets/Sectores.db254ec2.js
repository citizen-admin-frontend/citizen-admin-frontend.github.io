import{_ as C,a as x,s as k,l as w,y as _,R as S,D as I}from"./plugin-vue_export-helper.c8c60fc3.js";import{s as N,a as T,b as B,c as E,d as R,e as V,f as F,g as U,h as P,i as q,j as z}from"./radiobutton.esm.027fb967.js";import{s as A,g as O,h as r,o as p,c as u,a as t,j as d,d as n,t as j,n as M,i as g}from"./index.dd426db0.js";const G={components:{Button:A,Dialog:N,FileUpload:T,InputText:x,Toolbar:B,DataTable:E,Column:R,Rating:V,Textarea:F,Dropdown:U,RadioButton:P,InputNumber:q,ScrollPanel:z,Toast:k},data(){return{title:"Sectores",items:null,showDialog:!1,deleteDialog:!1,model:{},selectedItems:null,filters:{},submitted:!1,fireStore:null}},mounted(){let i=this;this.getFromFirestore(i)},methods:{getFromFirestore:async i=>{let h=O().appContext.config.globalProperties.$firebaseApp,m=w(h);i.fireStore=m;let e=_(m,"Sectors"),a=await S(e);i.items=a.docs.map(c=>{let l=c.data();return l.id=c.id,l})},openNew(){this.model={},this.submitted=!1,this.showDialog=!0},hideDialog(){this.showDialog=!1,this.submitted=!1},async save(){if(this.submitted=!0,this.model.name.trim()){if(this.model.id)this.$toast.add({severity:"success",summary:"Ok",detail:"Actualizado correctamente",life:3e3});else{this.model.active=!0;let i=await I(_(this.fireStore,"Sectors"),this.model);this.model.id=i.id,this.items.push(this.model),this.$toast.add({severity:"success",summary:"Ok",detail:"Registro creado",life:3e3})}this.showDialog=!1,this.model={}}},openEdit(i){this.model={...i},this.showDialog=!0},confirmDeleteSelected(i){this.deleteDialog=!0},deleteSelectedItems(){this.model=this.selectedItems,this.items=this.items.filter(i=>i.id!==this.model.id),this.deleteDialog=!1,this.model={},this.$toast.add({severity:"success",summary:"Ok",detail:"Item eliminado",life:3e3})}}},H={class:"muniform"},K={class:"container"},J={class:"container"},L={class:"container"},Q={class:"field"},W=n("label",{for:"name"},"Nombre",-1),X={key:0,class:"p-error"},Y={class:"confirmation-content"},Z=n("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),$={key:0};function ee(i,s,h,m,e,a){const c=r("Toast"),l=r("Button"),f=r("Column"),v=r("DataTable"),D=r("ScrollPanel"),y=r("InputText"),b=r("Dialog");return p(),u("main",H,[t(c),t(D,{style:{width:"100%",height:"100%"}},{default:d(()=>[n("div",K,[n("h2",null,j(e.title),1)]),n("div",J,[t(l,{label:"Nuevo",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:a.openNew},null,8,["onClick"]),t(l,{label:"Editar",icon:"pi pi-user-edit",class:"p-button-secondary mr-2",onClick:s[0]||(s[0]=o=>a.openEdit(e.selectedItems)),disabled:!e.selectedItems},null,8,["disabled"]),t(l,{label:"Eliminar",icon:"pi pi-trash",class:"p-button-danger",onClick:a.confirmDeleteSelected,disabled:!e.selectedItems},null,8,["onClick","disabled"])]),n("div",L,[t(v,{value:e.items,style:{width:"300px"},selection:e.selectedItems,"onUpdate:selection":s[1]||(s[1]=o=>e.selectedItems=o),dataKey:"id",scrollable:!0,scrollHeight:"calc(100vh - 223px)"},{default:d(()=>[t(f,{selectionMode:"single",headerStyle:"width: 1em; max-width:50px",style:{"max-width":"50px"}}),t(f,{field:"name",header:"Nombre"})]),_:1},8,["value","selection"])])]),_:1}),t(b,{visible:e.showDialog,"onUpdate:visible":s[3]||(s[3]=o=>e.showDialog=o),style:{width:"450px"},header:"Sector",modal:!0,class:"p-fluid"},{footer:d(()=>[t(l,{label:"Cancelar",icon:"pi pi-times",class:"p-button-text",onClick:a.hideDialog},null,8,["onClick"]),t(l,{label:"Guardar",icon:"pi pi-check",class:"p-button-text",onClick:a.save},null,8,["onClick"])]),default:d(()=>[n("div",Q,[W,t(y,{id:"name",modelValue:e.model.name,"onUpdate:modelValue":s[2]||(s[2]=o=>e.model.name=o),modelModifiers:{trim:!0},required:"true",autofocus:"",class:M({"p-invalid":e.submitted&&!e.model.name})},null,8,["modelValue","class"]),e.submitted&&!e.model.name?(p(),u("small",X,"Nombre es requerido.")):g("",!0)])]),_:1},8,["visible"]),t(b,{visible:e.deleteDialog,"onUpdate:visible":s[5]||(s[5]=o=>e.deleteDialog=o),style:{width:"450px"},header:"Confirmar",modal:!0},{footer:d(()=>[t(l,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:s[4]||(s[4]=o=>e.deleteDialog=!1)}),t(l,{label:"Si",icon:"pi pi-check",class:"p-button-text",onClick:a.deleteSelectedItems},null,8,["onClick"])]),default:d(()=>[n("div",Y,[Z,e.model?(p(),u("span",$,"\xBFEst\xE1s seguro que deseas eliminar el registro seleccionado?")):g("",!0)])]),_:1},8,["visible"])])}var le=C(G,[["render",ee]]);export{le as default};