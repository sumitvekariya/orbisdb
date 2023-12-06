"use strict";exports.id=917,exports.ids=[917],exports.modules={917:(e,t,s)=>{s.d(t,{Z:()=>AddModelModal});var a=s(997),n=s(6689),l=s(6640),i=s(662),r=s(7737),d=s(8709),o=s(3279);function AddModelModal({setAddModalVis:e}){let[t,s]=(0,n.useState)(1);return a.jsx(i.Z,{hide:()=>e(!1),children:(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[a.jsx("h2",{className:"text-center font-medium mb-1",children:"Start indexing a new model"}),a.jsx("p",{className:"text-center text-slate-500 text-base mb-2",children:"This will archive the model's streams in your Ceramic node as well as start indexing those in your database."}),a.jsx("div",{className:"w-full",children:a.jsx(d.Z,{steps:["Add your model","Get model details","Setup indexing"],currentStep:t})}),a.jsx(AddModelSteps,{step:t,setStep:s,setAddModalVis:e})]})})}let AddModelSteps=({step:e,setStep:t,setAddModalVis:s})=>{let{orbis:i,setSettings:d}=(0,n.useContext)(l.k),[c,m]=(0,n.useState)(""),[x,p]=(0,n.useState)(o.Q_.ACTIVE),[h,g]=(0,n.useState)();async function loadModelDetails(){p(o.Q_.LOADING);try{let e=await i.ceramic.loadStream(c);console.log("stream.state:",e.state),e&&g(e.state.content),p(o.Q_.SUCCESS),await (0,o._v)(500),t(2),p(o.Q_.ACTIVE)}catch(e){alert("Couldn't load model details."),console.log("Error adding new model to the settings file:",e),p(o.Q_.ERROR),await (0,o._v)(500),p(o.Q_.ACTIVE)}}async function saveInSettings(){p(o.Q_.LOADING);try{let e=await fetch("/api/settings/add-model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:{name:h.name?h.name:h.title,stream_id:c,status:0}})});e=await e.json(),console.log("response:",e),200==e.status?(d(e.settings),p(o.Q_.SUCCESS),await (0,o._v)(500),t(o.Q_.ERROR),p(0)):p(o.Q_.ERROR)}catch(e){console.log("Error saving model in settings."),p(o.Q_.ERROR)}}async function startIndexing(){p(o.Q_.LOADING);try{let e=await fetch("/api/settings/index-model",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({modelId:c})});e=await e.json(),console.log("response in startIndexing:",e),200==e.status?(d(e.settings),p(o.Q_.SUCCESS),await (0,o._v)(500),s(!1)):p(o.Q_.ERROR)}catch(e){console.log("Error saving model in settings."),p(3)}}switch(e){case 1:return(0,a.jsxs)(a.Fragment,{children:[a.jsx("input",{type:"text",placeholder:"Model ID",className:"bg-white px-2 py-1 rounded-md border border-slate-300 text-base text-slate-900 mb-2",onChange:e=>m(e.target.value),value:c}),a.jsx(r.Z,{type:"primary",onClick:()=>loadModelDetails(!0),status:x,title:"Load details"})]});case 2:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-base text-slate-500 mb-2",children:["Model name: ",a.jsx("span",{className:"font-medium text-slate-900",children:h.name?h.name:h.title})]}),a.jsx(r.Z,{type:"primary",onClick:()=>saveInSettings(),status:x,title:"Save"})]});case 3:return(0,a.jsxs)(a.Fragment,{children:[a.jsx("p",{className:"text-base text-slate-900 mb-3 text-center",children:"We will now initialize the indexing of this model which is going to create a new table in your database with those fields."}),a.jsx("div",{className:"mb-3 justify-center flex",children:h.schema?a.jsx(SchemaDetails,{content:h,properties:h.schema.properties}):a.jsx("p",{className:"rounded-md p-2 bg-slate-50 text-center w-full",children:"This stream is not a model."})}),a.jsx(r.Z,{type:"primary",onClick:()=>startIndexing(),status:x,title:"Start indexing"})]})}},SchemaDetails=({content:e,properties:t})=>t?a.jsx("ul",{className:"space-y-3 text-sm",children:a.jsx(SchemaType,{properties:Object.entries(t),isParent:!0})}):a.jsx("p",{className:"text-gray-500 text-md",children:"We couldn't find any property for this schema."}),ValueDetails=({val:e})=>Array.isArray(e)?e.map((e,t)=>e?(0,a.jsxs)(a.Fragment,{children:[":",a.jsx("span",{className:"rounded-md px-2 py-1 bg-slate-100 text-gray-600 mr-1.5",children:e},t)]}):null):e?(0,a.jsxs)(a.Fragment,{children:[":",a.jsx("span",{className:"rounded-md px-2 py-1 bg-slate-100 text-gray-600",children:e})]}):null,SchemaType=({properties:e,isParent:t})=>e.map(([e,s])=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("li",{children:[a.jsx("span",{className:t?"text-gray-900 font-mono":"text-gray-500 font-mono",children:e})," ",a.jsx(ValueDetails,{val:s.type})]},e),s?.type?.includes("object")&&s.properties&&a.jsx("div",{className:"pl-4 mt-2 border-l border-gray-200 space-y-2",children:a.jsx(SchemaType,{properties:Object.entries(s.properties),isParent:!1})})]}))}};