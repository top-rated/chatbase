(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{24106:function(e,t,s){"use strict";var a=s(85893),n=s(94184),i=s.n(n),l=s(67294),r=s(35878),c=s(41372),d=s.n(c),o=s(6124);let m=(0,l.forwardRef)((e,t)=>{let{className:s,variant:n="flat",children:c,active:m,width:x,loading:u=!1,disabled:h=!1,style:f={},Component:p="button",...g}=e,j=(0,l.useRef)(null),v=i()(d().root,{[d().slim]:"slim"===n,[d().loading]:u,[d().disabled]:h},s);return(0,a.jsxs)(p,{"aria-pressed":m,"data-variant":n,ref:(0,r.Z)([j,t]),className:v,disabled:h,style:{width:x,...f},...g,children:[c,u&&(0,a.jsx)("i",{className:"pl-2 m-0 flex",children:(0,a.jsx)(o.Z,{})})]})});t.Z=m},72749:function(e,t,s){"use strict";s.d(t,{Z:function(){return a.Z}});var a=s(24106)},81639:function(e,t,s){"use strict";s.d(t,{Z:function(){return X}});var a=s(85893),n=s(99328),i=s(29034),l=s(3387),r=s(84053),c=s(11163),d=s(67294),o=s(72483),m=s(24106),x=function(e){let{start:t,duration:s,done:n}=e;if(!t)return null;let[i,l]=d.useState(0),r=Date.now();return d.useEffect(()=>{if(n){l(100);return}let e=setInterval(()=>{l(Math.min((Date.now()-r)/s*100,100))},100);return()=>{clearInterval(e)}},[n]),(0,a.jsxs)("div",{className:"w-full rounded-full py-4",children:[(0,a.jsxs)("p",{className:"text-xs text-zinc-600",children:[" ",i.toFixed(0),"%"]}),(0,a.jsx)("div",{className:"bg-violet-600 h-2 text-xs font-medium text-violet-100 text-center p-0.5 leading-none rounded-full",style:{width:i+"%"}})]})},u=s(48680),h=function(e){let{filesInputextractedTexts:t,textInputExtractedText:s,filesInputCombinedExtractedText:i,fetchedLinks:l,qnaItems:r,loading:c,isPopulating:d,startedPopulating:o,endedPopulating:h,handleSubmit:f,chatbotId:p,existingFileSources:g}=e,j=[...t,...g],v=i.length+g.reduce((e,t)=>e+t.num_of_characters,0);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:" mt-8 max-w-lg m-auto p-4 rounded border",children:[(0,a.jsx)("div",{className:" ",children:"Included sources:"}),(0,a.jsxs)("div",{className:"flex py-1 space-x-3",children:[j.length>0&&(0,a.jsxs)("div",{className:"text-sm text-zinc-700",children:[j.length," File(s) (",(0,n.x6)(v)," chars)"]}),j.length>0&&s.text.length>0&&(0,a.jsx)("div",{className:"text-sm text-zinc-700",children:"|"}),s.text.length>0&&(0,a.jsxs)("div",{className:"text-sm text-zinc-700",children:[(0,n.x6)(s.text.length)," text input chars"]}),s.text.length>0&&l.length>0&&(0,a.jsx)("div",{className:"text-sm text-zinc-700",children:" | "}),j.length>0&&0===s.text.length&&l.length>0&&(0,a.jsx)("div",{className:"text-sm text-zinc-700",children:" | "}),l.length>0&&(0,a.jsxs)("div",{className:"text-sm text-zinc-700",children:[l.length," Links"]}),(j.length>0||s.text.length>0||l.length>0)&&r.length>0&&(0,a.jsx)("div",{className:"text-sm text-zinc-700",children:" | "}),r.length>0&&(0,a.jsxs)("div",{className:"text-sm text-zinc-700",children:[r.length," Q&A"]})]}),(0,a.jsx)(m.Z,{type:"submit",disabled:c||d,loading:d,className:"w-full",onClick:f,children:p?"Retrain Chatbot":d?"Creating Chatbot":"Create Chatbot"}),(0,a.jsx)(x,{start:o,duration:u.tL,done:h})]})})},f=s(94184),p=s.n(f);let g=[{name:"Files"},{name:"Text"},{name:"Website"},{name:"Q&A"}];var j=function(e){let{dataSourceToShow:t,setDataSourceToShow:s}=e,{user:n}=(0,l.aF)();return(0,a.jsx)("div",{className:" pb-8",children:(0,a.jsx)("div",{className:" text-center space-x-8",children:g.map(e=>(0,a.jsx)("button",{className:p()(e.name===t?"border-violet-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"),onClick:()=>s(e.name),children:e.name},e.name))})})},v=s(72749),w=s(52783);function b(e){let{fetchedLink:t,setFetchedLinks:s,index:i}=e,[l,r]=(0,d.useState)(!1);return(0,a.jsxs)("div",{className:"relative mt-2 rounded-md shadow-sm",children:[(0,a.jsxs)("div",{className:"flex items-center",children:["training"===t.status?(0,a.jsx)(k,{}):"trained"===t.status?(0,a.jsx)(N,{}):"failed"===t.status?(0,a.jsx)(S,{}):"failed (limit exceeded)"===t.status?(0,a.jsx)(z,{}):null,(0,a.jsx)("input",{type:"text",name:"website",className:"block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6",placeholder:"https://www.example.com/",value:t.url,onChange:e=>{let t=e.target.value.trim();(0,n.K2)(t)?r(!1):r(!0),""===t&&r(!1),s(e=>e.map((e,s)=>s===i?{url:t,size:void 0}:e))}}),t.size&&(0,a.jsx)("p",{className:"w-12 text-xs ml-1",children:t.size}),(0,a.jsx)("button",{type:"button",className:"text-zinc-600 hover:text-zinc-900",children:(0,a.jsx)(w,{onClick:()=>{s(e=>e.filter((e,t)=>t!==i))},className:"w-4 h-4 text-red-600 ml-1"})})]}),l&&(0,a.jsx)("p",{className:"mt-2 text-sm text-red-600",children:"Invalid URL"})]})}var y=function(e){let{fetchedLinks:t,setFetchedLinks:s}=e,i=t.reduce((e,t)=>{var s;return e+(null!==(s=t.size)&&void 0!==s?s:0)},0);return(0,a.jsxs)("div",{className:"mt-16",children:[(0,a.jsx)("label",{htmlFor:"exluded_urls",className:"block text-sm font-medium leading-6 text-gray-900 my-2",children:"Included Links"}),t.length>0&&(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:" text-sm text-red-700",onClick:()=>s([]),children:"Delete all"})}),t.map((e,t)=>(0,a.jsx)(b,{fetchedLink:e,setFetchedLinks:s,index:t},"".concat(t))),i>0&&(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsxs)("p",{className:"mt-2 text-xs text-zinc-600",children:[(0,n.x6)(i)," detected characters"]})}),(0,a.jsx)("div",{className:"my-2 flex justify-end",children:(0,a.jsx)("button",{type:"button",className:"flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300",onClick:()=>s(e=>[...e,{url:"",size:void 0}]),children:"Add"})})]})};function N(){return(0,a.jsx)("span",{className:"mr-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",children:"Trained"})}function k(){return(0,a.jsx)("span",{className:"mr-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-red-600/20",children:"Training"})}function S(){return(0,a.jsx)("span",{className:"mr-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20",children:"Failed"})}function z(){return(0,a.jsx)("span",{className:"mr-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20",children:"limit exceeded"})}var F=s(30034);function C(e){let{fetchedLinks:t,setFetchedLinks:s,loading:i,setLoading:l}=e,[r,c]=d.useState(""),[o,m]=d.useState(!1),x=async()=>{if(!r)return;if(!(0,n.K2)(r)){m(!0);return}l(!0);let e=await fetch("/api/sitemap?sitemapUrl=".concat(encodeURIComponent(r))),t=await e.text(),a=new DOMParser,i=a.parseFromString(t,"application/xml"),d=i.querySelectorAll("urlset url loc"),o=[];d.forEach(e=>{let t=e.textContent||"";if(!t)return;let s=u.Do.some(e=>t.split("?")[0].endsWith(e));s||o.push({url:t,size:void 0})}),s(e=>{let t=o.filter(t=>!e.some(e=>e.url===t.url));return[...e,...t]}),c(""),m(!1),l(!1)};return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"sitemap",className:"block text-sm font-medium leading-6 text-gray-900 my-2",children:"Submit Sitemap"}),(0,a.jsxs)("div",{className:"relative mt-2 rounded-md ",children:[(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"text",name:"sitemap",className:" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6",placeholder:"https://www.example.com/sitemap.xml",value:r,onChange:e=>{let t=e.target.value.trim();(0,n.K2)(t)?m(!1):m(!0),""===t&&m(!1),c(t)}}),(0,a.jsx)(v.Z,{type:"button",disabled:i,onClick:()=>x(),children:t.length>0?"Load additional sitemap":"Load sitemap"})]}),o&&(0,a.jsx)("p",{className:"text-sm text-red-600",children:"Invalid URL"})]})]})}var _=function(e){let{fetchedLinks:t,setFetchedLinks:s,loading:i,setLoading:r}=e,[c,m]=d.useState(""),[h,f]=d.useState(!1),[p,g]=d.useState(!1),[j,w]=d.useState(!1),[b,N]=d.useState(!1),[k,S]=d.useState(!1),[z,_]=d.useState({title:"",description:""}),[T,E]=d.useState("warning"),{user:L,accessToken:I}=(0,l.aF)(),R=async()=>{if(c){if(!(0,n.K2)(c)){f(!0);return}r(!0),g(!0),w(!0),N(!1);try{let e=await fetch("https://server.chatbase.co/api/fetch-links?sourceURL=".concat(c),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(I)}}),t=await e.json();t.stoppingReason&&(_({title:"Not all links were fetched",description:t.stoppingReason}),E("warning"),S(!0),g(!1)),s(e=>{let s=t.fetchedLinks.filter(t=>!e.some(e=>e.url===t.url));return[...e,...s]}),m(""),f(!1),g(!1),r(!1),N(!0)}catch(a){console.log(a),S(!0),a instanceof Error?_({title:"Error",description:a.message}):_({title:"Error",description:"Something went wrong"}),E("error"),r(!1),g(!1),N(!0),w(!1)}}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900 my-2",children:"Crawl"}),(0,a.jsxs)("div",{className:"relative mt-2 rounded-md",children:[(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"text",name:"website",className:" flex-auto rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6",placeholder:"https://www.example.com",value:c,onChange:e=>{let t=e.target.value.trim();(0,n.K2)(t)?f(!1):f(!0),""===t&&f(!1),m(t)}}),(0,a.jsx)(v.Z,{type:"button",disabled:i||p,loading:p,onClick:()=>R(),children:t.length>0?"Fetch more links":"Fetch links"})]}),(0,a.jsx)(x,{start:j,duration:u.xK,done:b}),h&&(0,a.jsx)("p",{className:"text-sm text-red-600",children:"Invalid URL"}),(0,a.jsxs)("div",{className:"py-4 text-sm text-zinc-600",children:["This will crawl all the links starting with"," ",c?"'".concat(c,"'"):"the URL"," (not including files on the website)."]})]}),(0,a.jsx)(F.Z,{text:"OR"}),(0,a.jsx)(C,{fetchedLinks:t,setFetchedLinks:s,loading:i,setLoading:r}),t&&(0,a.jsx)(y,{fetchedLinks:t,setFetchedLinks:s}),(0,a.jsx)(o.Z,{show:k,setShow:S,title:z.title,description:z.description,variant:T})]})},T=s(59255);let{convert:E}=s(11024),L=()=>{let e=window["pdfjs-dist/build/pdf"];return e.GlobalWorkerOptions.workerSrc="//mozilla.github.io/pdf.js/build/pdf.worker.js",e},I=async e=>{let t=e.numPages,s="";for(let a=1;a<=t;a++){let n=await e.getPage(a),i=await n.getTextContent();s+=i.items.map(e=>e.str).join(" ")}return s},R={selectors:[{selector:"img",format:"skip"}]},A=async e=>{let t=await e.arrayBuffer(),s=await T.convertToHtml({arrayBuffer:t}).then(e=>e.value).catch(e=>(console.error("Error processing .doc/.docx file:",e),""));return E(s,R)};var D=s(17949),U=s(8523),Z=s(6124),q=s(84539),B=s(98831),K=s(45402);function P(e){let{open:t,setOpen:s,source:n,setExistingFileSources:o}=e,m=(0,d.useRef)(null),[x,u]=(0,d.useState)(!1);(0,c.useRouter)();let h=(0,r.useSupabaseClient)(),{user:f,subscription:p}=(0,l.aF)(),g=async()=>{x||(u(!0),await (0,i.rG)(h,f,n.id),u(!1),s(!1),o(e=>e.filter(e=>e.id!==n.id)))};return(0,a.jsx)(q.u.Root,{show:t,as:d.Fragment,children:(0,a.jsxs)(B.V,{as:"div",className:"relative z-10",initialFocus:m,onClose:s,children:[(0,a.jsx)(q.u.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,a.jsx)(q.u.Child,{as:d.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)(B.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6",children:[(0,a.jsxs)("div",{className:"sm:flex sm:items-start",children:[(0,a.jsx)("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,a.jsx)(K,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,a.jsx)(B.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Delete source"}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsxs)("p",{className:"text-sm text-zinc-500",children:['Are you sure you want to delete "',n.name,'"? This action cannot be undone.']}),(0,a.jsx)("p",{className:"text-sm font-semibold mt-2",children:"Make sure to retrain your chatbot after deleting a source!"})]})]})]}),(0,a.jsxs)("div",{className:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",children:[(0,a.jsx)("button",{type:"button",disabled:x,className:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>g(),children:x?"Deleting...":"Delete"}),(0,a.jsx)("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:()=>s(!1),ref:m,children:"Cancel"})]})]})})})})]})})}let O=e=>{let{source:t,setExistingFileSources:s}=e,[i,l]=(0,d.useState)(!1);return(0,a.jsxs)("div",{className:"grid grid-cols-10 pb-4",children:[(0,a.jsxs)("div",{className:"col-span-9",children:[(0,a.jsx)("span",{className:"break-words",children:t.name})," ",(0,a.jsxs)("span",{className:"text-zinc-500 text-sm",children:["(",(0,n.x6)(t.num_of_characters)," chars)"]})]}),(0,a.jsx)("div",{className:"flex items-center justify-end",children:(0,a.jsx)("button",{onClick:()=>l(!0),children:(0,a.jsx)(w,{className:"w-4 h-4 text-red-600 ml-1"})})}),(0,a.jsx)(P,{setExistingFileSources:s,open:i,setOpen:l,source:t})]})},M=e=>{let{attachedFile:t,removeAttachedFile:s,index:i}=e;return(0,a.jsxs)("div",{className:"grid grid-cols-10 pb-4",children:[(0,a.jsxs)("div",{className:"col-span-9",children:[(0,a.jsx)("span",{className:"break-words",children:null==t?void 0:t.fileName})," ",(0,a.jsxs)("span",{className:"text-zinc-500 text-sm",children:["(",(0,n.x6)(null==t?void 0:t.characters)," chars)"]})]}),(0,a.jsx)("div",{className:"flex items-center justify-end",children:(0,a.jsx)("button",{onClick:()=>s(i,t.fileName),children:(0,a.jsx)(w,{className:"w-4 h-4 text-red-600 ml-1"})})})]})};var Q=function(e){let{setExtractedTexts:t,dropZoneAttachedFiles:s,setDropZoneAttachedFiles:i,attachedFiles:r,setAttachedFiles:c,filesInputCombinedExtractedText:o,setLoading:m,existingFileSources:x,setExistingFileSources:u,chatbot:h}=e,{user:f,subscription:p}=(0,l.aF)(),[g,j]=(0,d.useState)(!1),v=x.reduce((e,t)=>e+t.num_of_characters,0),w=(0,d.useCallback)(async e=>{if(null==e?void 0:e.length){let t=L();for(let a of([...s,...e],i([...s,...e]),e)){var n,l,r;let d=null!==(r=null===(n=null===(l=a.name)||void 0===l?void 0:l.split(".").pop())||void 0===n?void 0:n.toLowerCase())&&void 0!==r?r:"";if(["pdf"].includes(d)){let o=new Uint8Array(await a.arrayBuffer()),m=await t.getDocument({data:o}).promise,x=await I(m);c(e=>[...e,{fileName:a.name,fileImageURL:"",characters:x.replace(/\s\s+/g," ").length}])}else if(["txt"].includes(d)){let u=await a.text();c(e=>[...e,{fileName:a.name,fileImageURL:"",characters:u.replace(/\s\s+/g," ").length}])}else if(["doc","docx"].includes(d)){let h=await A(a);c(e=>[...e,{fileName:a.name,fileImageURL:"",characters:h.replace(/\s\s+/g," ").length}])}}}},[s]),b=async(e,a)=>{m(!0),t(e=>e.filter(e=>e.name!==a)),s[e].name===a&&i([...s.slice(0,e),...s.slice(e+1)]),r[e].fileName===a&&c([...r.slice(0,e),...r.slice(e+1)]),m(!1)},{getRootProps:y,getInputProps:N,isDragActive:k}=(0,U.uI)({accept:{"text/html":[".pdf",".doc",".docx",".txt"]},onDrop:w,validator:e=>s.some(t=>t.name===e.name&&t.size===e.size&&t.lastModified===e.lastModified)?(console.log(e.name),{code:"duplicate-file",message:"This file has already been added"}):null});return(0,d.useEffect)(()=>{let e=async()=>{if(!s)return;t([]),j(!1),m(!0);let e=L();for(let a of s){var n,i,l;let r=null!==(l=null===(n=null===(i=a.name)||void 0===i?void 0:i.split(".").pop())||void 0===n?void 0:n.toLowerCase())&&void 0!==l?l:"";if(["pdf"].includes(r)){let c=new Uint8Array(await a.arrayBuffer()),d=await e.getDocument({data:c}).promise,o=await I(d);t(e=>[...e,{text:o,name:a.name||"Untitled file"}])}else if(["txt"].includes(r)){let x=await a.text();t(e=>[...e,{text:x,name:a.name||"Untitled file"}])}else if(["doc","docx"].includes(r)){let u=await A(a);t(e=>[...e,{text:u,name:a.name||"Untitled file"}])}else console.error("Unsupported file type:",r)}j(!0),m(!1)};e()},[s]),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:" text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Upload Files"}),(0,a.jsxs)("div",{...y({className:"dropzone"}),className:"border border-neutral-200 p-16",children:[(0,a.jsx)("input",{...N({name:"file"})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,a.jsx)(D,{className:"h-5 w-5 fill-current"}),k?(0,a.jsx)("p",{className:"text-sm text-gray-600 text-center",children:"Drop the files here ..."}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"text-center justify-center items-center",children:[(0,a.jsx)("p",{className:"text-sm text-gray-600 ",children:"Drag & drop files here, or click to select files"}),(0,a.jsx)("span",{className:"text-xs text-gray-500 dark:text-gray-300",id:"file_type_help",children:"Supported File Types: .pdf, .doc, .docx, .txt"})]})})]})]}),(0,a.jsx)("p",{className:"mt-2 text-sm text-center text-gray-500 dark:text-gray-300",id:"file_input_help",children:"NOTE: Uploading a PDF using safari doesn't work, we're looking into the issue. Make sure the text is OCR'd, i.e. you can copy it."}),(0,a.jsx)("div",{className:"pt-8",children:!g||s.length?(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:" font-semibold pb-2",children:["Attached Files"," ",(0,a.jsx)("span",{className:"text-zinc-500 text-sm ml-1",children:g?(0,a.jsxs)(a.Fragment,{children:["(",(0,n.x6)(o.length)," ","chars)"]}):s.length&&(0,a.jsx)(Z.Z,{})})]}),r.map((e,t)=>(0,a.jsx)(M,{attachedFile:e,index:t,removeAttachedFile:b},t))]}):null}),(null==x?void 0:x.length)>0&&(0,a.jsxs)("div",{className:"pt-8",children:[(0,a.jsxs)("p",{className:" font-semibold pb-2",children:["Already Included Files"," ",(0,a.jsxs)("span",{className:"text-zinc-500 text-sm ml-1",children:["(",(0,n.x6)(v)," chars)"]})]}),x.map(e=>(0,a.jsx)(O,{source:e,setExistingFileSources:u},e.id))]})]})},W=function(e){let{initialTextInputSource:t,textInputExtractedText:s,setTextInputExtractedText:i}=e,{user:c,subscription:d}=(0,l.aF)();return(0,r.useSupabaseClient)(),(0,a.jsxs)("div",{children:[(0,a.jsx)("textarea",{placeholder:"data",name:"data",rows:20,className:"my-2 min-w-0 p-1 flex-auto w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900",value:s.text,onChange:e=>i({name:e.target.value.slice(0,25)+"...",text:e.target.value,is_text_input:!0})}),(0,a.jsx)("p",{className:"text-sm text-gray-600 text-center h-8",children:s.text.length>0&&"".concat((0,n.x6)(s.text.replace(/\s\s+/g," ").length)," characters")})]})},G=s(53416);function V(e){let{qnaItem:t,setQnaItems:s,index:n}=e;return(0,a.jsxs)("div",{className:"border rounded shadow p-2 my-8",children:[(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{onClick:()=>{s(e=>e.filter((e,t)=>t!==n))},type:"button",className:"text-zinc-600 hover:text-zinc-900",children:(0,a.jsx)(w,{className:"w-4 h-4 text-red-600 ml-1"})})}),(0,a.jsxs)("div",{className:" ",children:[(0,a.jsx)("label",{className:"mt-8 text-sm text-zinc-700",children:"Question"}),(0,a.jsx)("textarea",{className:"min-w-0 p-1 w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900",value:t.question,rows:3,onChange:e=>{let t=e.target.value;s(e=>e.map((e,s)=>s===n?{question:t,answer:e.answer,id:e.id}:e))}})]}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("label",{className:"mt-8 text-sm text-zinc-700",children:"Answer"}),(0,a.jsx)("textarea",{className:"min-w-0 p-1 w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm text-gray-900",value:t.answer,rows:8,onChange:e=>{let t=e.target.value;s(e=>e.map((e,s)=>s===n?{answer:t,question:e.question,id:e.id}:e))}})]})]})}var H=function(e){let{qnaItems:t,setQnAItems:s}=e,{user:n,subscription:i}=(0,l.aF)();return(0,r.useSupabaseClient)(),(0,a.jsxs)("div",{className:"mt-16",children:[t.length>0&&(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:" text-sm text-red-700",onClick:()=>s([]),children:"Delete all"})}),t.map((e,t)=>(0,a.jsx)(V,{qnaItem:e,setQnaItems:s,index:t},e.id)),(0,a.jsx)("div",{className:"my-2 flex justify-end",children:(0,a.jsx)("button",{type:"button",className:"flex items-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300",onClick:()=>s(e=>[...e,{question:"",answer:"",id:(0,G.x0)()}]),children:"Add"})})]})};let J=e=>{let t,s=[],a=[],n=[];return e?(e.forEach(e=>{e.is_text_input?t=e:"file"!==e.type||e.is_text_input?"link"===e.type&&e.url?a.push(e):"qna"===e.type&&n.push(e):s.push(e)}),{initialFileSources:s,initialTextInputSource:t,initialFetchedLinksSources:a,initialQnASources:n}):{initialFileSources:s,initialTextInputSource:t,initialQnASources:n,initialFetchedLinksSources:a}};var X=function(e){let{chatbot:t,initialSources:s}=e,{initialTextInputSource:m,initialFileSources:x,initialFetchedLinksSources:u,initialQnASources:f}=J(s),[p,g]=(0,d.useState)("Files"),v=(0,c.useRouter)(),{chatId:w}=v.query,b=w,y=(0,r.useSupabaseClient)(),[N,k]=(0,d.useState)([]),[S,z]=(0,d.useState)([]),[F,C]=(0,d.useState)([]),[T,E]=(0,d.useState)(x),[L,I]=(0,d.useState)({name:"",text:"",is_text_input:!0}),[R,A]=(0,d.useState)(""),[D,U]=(0,d.useState)([]),[Z,q]=(0,d.useState)([]),[B,K]=(0,d.useState)(0),[P,O]=(0,d.useState)(!1),[M,G]=(0,d.useState)(!1),[V,X]=(0,d.useState)(!1),[Y,$]=(0,d.useState)(!1),[ee,et]=(0,d.useState)(),[es,ea]=(0,d.useState)(),[en,ei]=(0,d.useState)(!1),{user:el,subscription:er}=(0,l.aF)();(0,d.useEffect)(()=>{A(F.map(e=>e.text.replace(/\s\s+/g," ")).join(" "))},[F]),(0,d.useEffect)(()=>{let e=D.reduce((e,t)=>{var s;return e+(null!==(s=t.size)&&void 0!==s?s:0)},0);K(e)},[D]);let ec=async()=>{if(!(null==m?void 0:m.id)||!(null==el?void 0:el.id))return;let{data:e,error:t}=await y.storage.from("source-files").download("".concat(el.id,"/").concat(m.id,".txt"));if(t||!e)return console.log(t);let s=await e.arrayBuffer(),a=new TextDecoder().decode(s);I({name:m.name,text:a,is_text_input:!0})};(0,d.useEffect)(()=>{ec()},[el]),(0,d.useEffect)(()=>{u.length&&U(u.map(e=>({url:e.url||"",size:e.num_of_characters,status:e.status})))},[]),(0,d.useEffect)(()=>{f.length&&q(f.map(e=>({question:e.question||"",answer:e.answer||"",id:e.id})))},[]);let ed=async e=>{if(el){e.preventDefault();try{O(!0),G(!0),X(!1);let s=!1;b||(s=!0),await (0,i.tf)(R,T,L,D,Z,el,er,B,L.name,s);let a=[...F];L.text&&a.push(L),b?(0,i.dj)(y,b,"training"):b=await (0,i.vc)(y,el.id),await (0,i.T3)(y,el,a,D,Z,b,u,f,null==m?void 0:m.id);let l="";l=t?t.name:(0,i.Jx)(N,T,D,L.name);let r=await (0,n.qC)({url:"/api/populate-chatbot",data:{chatbotId:b,chatbotName:l,isNewChatbot:s}});b||(b=r.chatbotId),k([]),O(!1),X(!0),v.push("/chatbot/".concat(b))}catch(c){console.log(c),$(!0),c instanceof Error?ea({title:"Error",description:c.message}):ea({title:"Error",description:"Something went wrong"}),et("error"),G(!1),O(!1),X(!0)}}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(j,{dataSourceToShow:p,setDataSourceToShow:g}),"Files"===p?(0,a.jsx)("div",{className:"max-w-md m-auto",children:(0,a.jsx)(Q,{existingFileSources:T,setExistingFileSources:E,setExtractedTexts:C,dropZoneAttachedFiles:N,setDropZoneAttachedFiles:k,attachedFiles:S,setAttachedFiles:z,filesInputCombinedExtractedText:R,setLoading:ei,chatbot:t})}):"Text"===p?(0,a.jsx)("div",{className:"max-w-3xl m-auto",children:(0,a.jsx)(W,{initialTextInputSource:m,textInputExtractedText:L,setTextInputExtractedText:I})}):"Website"===p?(0,a.jsx)("div",{className:"max-w-3xl m-auto",children:(0,a.jsx)(_,{loading:en,setLoading:ei,fetchedLinks:D,setFetchedLinks:U})}):"Q&A"===p?(0,a.jsx)("div",{className:"max-w-3xl m-auto",children:(0,a.jsx)(H,{qnaItems:Z,setQnAItems:q})}):null,(0,a.jsx)(h,{existingFileSources:T,filesInputextractedTexts:F,filesInputCombinedExtractedText:R,textInputExtractedText:L,fetchedLinks:D,qnaItems:Z,loading:en,isPopulating:P,startedPopulating:M,endedPopulating:V,chatbotId:b,handleSubmit:ed}),(0,a.jsx)(o.Z,{show:Y,setShow:$,title:null==es?void 0:es.title,description:null==es?void 0:es.description,variant:ee})]})}},30034:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(85893);function n(e){let{text:t}=e;return(0,a.jsxs)("div",{className:"flex items-center my-4",children:[(0,a.jsx)("hr",{className:"w-full border-gray-300 border-t"}),t&&(0,a.jsx)("span",{className:"px-2 text-gray-600 whitespace-nowrap",children:t}),(0,a.jsx)("hr",{className:"w-full border-gray-300 border-t"})]})}},41372:function(e){e.exports={root:"Button_root__G_l9X",loading:"Button_loading__4K_aO",disabled:"Button_disabled__Ksgjy"}}}]);