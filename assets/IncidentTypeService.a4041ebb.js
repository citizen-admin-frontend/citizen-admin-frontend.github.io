import{g as s,v as c,s as a,b as o}from"./Validator.e0ff0691.js";const u=async e=>{let r=await s(o,e);return r.sort((i,n)=>i.name>n.name?1:i.name===n.name?0:-1),r},d=async e=>{e.id||(e.active=!0),c(e,[{name:"name",descripcion:"Nombre",required:!0},{name:"active",descripcion:"Activo",required:!0},{name:"backgroundColor",descripcion:"Fondo",required:!0},{name:"foregroundColor",descripcion:"Fuente",required:!0},{name:"icon",descripcion:"Icono",required:!0}]),await a(o,e)};export{u as l,d as s};
