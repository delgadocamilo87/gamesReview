(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8571:function(e,s,t){Promise.resolve().then(t.bind(t,1165))},1165:function(e,s,t){"use strict";var a=t(7437),r=t(7138),l=t(2265);s.default=()=>{let[e,s]=(0,l.useState)(""),[t,o]=(0,l.useState)(""),[n,d]=(0,l.useState)(""),[i,c]=(0,l.useState)(""),[u,m]=(0,l.useState)(null),b=async s=>{s.preventDefault();try{if(n!==i)return m("Las contrase\xf1as no coinciden.");let s=await fetch("http://localhost:3000/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:t,password:n})});if(!s.ok){let e=await s.json();return m(e.message)}window.location.href="/"}catch(e){m(e.message)}};return(0,a.jsxs)("div",{className:"mt-20 w-1/3 p-4 bg-black bg-opacity-30 rounded-lg shadow-md h-1/2",children:[(0,a.jsx)("h2",{className:"text-2xl text-gray-500 font-semibold mb-1",children:"Registro"}),u&&(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50",children:(0,a.jsxs)("div",{className:"bg-white p-4 rounded-md shadow-md",children:[(0,a.jsx)("p",{className:"text-red-600 font-semibold",children:u}),(0,a.jsx)("button",{onClick:()=>{m(null)},className:"bg-blue-500 text-white px-4 py-2 rounded-md mt-4",children:"Cerrar"})]})}),(0,a.jsxs)("form",{onSubmit:b,className:"h-full flex flex-col justify-between",style:{height:"48vh"},children:[(0,a.jsxs)("div",{className:"mb-1",children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-gray-500 font-semibold mb-1",children:"Usuario"}),(0,a.jsx)("input",{type:"text",onChange:e=>s(e.target.value),id:"username",name:"username",className:"border text-black border-gray-300 px-3 py-1 w-full rounded-md focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"mb-1",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-gray-500 font-semibold mb-1",children:"Correo electr\xf3nico"}),(0,a.jsx)("input",{type:"email",onChange:e=>o(e.target.value),id:"email",name:"email",className:"border text-black border-gray-300 px-3 py-1 w-full rounded-md focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"mb-1",children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-gray-500 font-semibold mb-1",children:"Contrase\xf1a"}),(0,a.jsx)("input",{type:"password",onChange:e=>d(e.target.value),id:"password",name:"password",className:"border text-black border-gray-300 px-3 py-1 w-full rounded-md focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsx)("label",{htmlFor:"confirmPassword",className:"block text-gray-500 font-semibold mb-1",children:"Confirmar contrase\xf1a"}),(0,a.jsx)("input",{type:"password",onChange:e=>c(e.target.value),id:"confirmPassword",name:"confirmPassword",className:"border text-black border-gray-300 px-3 py-1 w-full rounded-md focus:outline-none focus:border-blue-500"})]}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("button",{type:"submit",className:"bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-blue-600",children:"Registrarse"}),(0,a.jsx)("button",{type:"button",className:"bg-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400",children:(0,a.jsx)(r.default,{href:"/",children:"Salir"})})]})]})]})}}},function(e){e.O(0,[138,971,23,744],function(){return e(e.s=8571)}),_N_E=e.O()}]);