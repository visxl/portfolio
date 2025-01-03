import O from"./D-2qrkfW.js";import{_ as z,d as I,v as r,D as b,E as J,F as H,G as R,H as L,i as l,I as E,J as N,K as W,L as G,M as y,N as _,O as P,P as g,r as K,Q,x as u,R as A,S as X,T as d,z as k,U as S,V as U,y as a,W as V,X as B,A as x,Y as w}from"./rAJRfOIE.js";const Y=I({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function Z(e,t,o,s,c,p){const n=O;return r(),b(n,J(H(e.$props)),null,16)}const C=z(Y,[["render",Z]]),D=(e,t,o,s,c=!1)=>{const p=R(),n=L(),m=l(()=>{var T;const i=E(t),$=E(o),h=E(s);return N((i==null?void 0:i.strategy)||((T=n.ui)==null?void 0:T.strategy),h?{wrapper:h}:{},i||{},c?W(n.ui,e,{}):{},$||{})}),j=l(()=>G(p,["class"]));return{ui:m,attrs:j}},ee={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},M={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},q={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...M,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...q,option:{...q.option},arrow:{...M}});const te={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},f=N(y.ui.strategy,y.ui.avatar,ee),ae=I({components:{UIcon:C},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>f.default.icon},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},chipColor:{type:String,default:()=>f.default.chipColor,validator(e){return["gray",...y.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>f.default.chipPosition,validator(e){return Object.keys(f.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=D("avatar",_(e,"ui"),f),s=l(()=>typeof e.src=="boolean"?null:e.src),c=l(()=>(e.alt||"").split(" ").map(h=>h.charAt(0)).join("").substring(0,2)),p=l(()=>P(g(t.value.wrapper,(i.value||!s.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),n=l(()=>P(g(t.value.rounded,t.value.size[e.size]),e.imgClass)),m=l(()=>g(t.value.icon.base,t.value.icon.size[e.size])),j=l(()=>g(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),i=K(!1);Q(()=>e.src,()=>{i.value&&(i.value=!1)});function $(){i.value=!0}return{ui:t,attrs:o,wrapperClass:p,imgClass:n,iconClass:m,chipClass:j,url:s,placeholder:c,error:i,onError:$}}});function se(e,t,o,s,c,p){const n=C;return r(),u("span",{class:d(e.wrapperClass)},[e.url&&!e.error?(r(),b(X(e.as),A({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(r(),u("span",{key:1,class:d(e.ui.text)},k(e.text),3)):e.icon?(r(),b(n,{key:2,name:e.icon,class:d(e.iconClass)},null,8,["name","class"])):e.placeholder?(r(),u("span",{key:3,class:d(e.ui.placeholder)},k(e.placeholder),3)):S("",!0),e.chipColor?(r(),u("span",{key:4,class:d(e.chipClass)},k(e.chipText),3)):S("",!0),U(e.$slots,"default")],2)}const F=z(ae,[["render",se]]),v=N(y.ui.strategy,y.ui.divider,te),re=I({components:{UIcon:C,UAvatar:F},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>v.default.size,validator(e){return Object.keys(v.border.size.horizontal).includes(e)||Object.keys(v.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>v.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=D("divider",_(e,"ui"),v),s=l(()=>P(g(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),c=l(()=>g(t.value.container.base,t.value.container[e.orientation])),p=l(()=>g(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:o,wrapperClass:s,containerClass:c,borderClass:p}}});function le(e,t,o,s,c,p){const n=C,m=F;return r(),u("div",A({class:e.wrapperClass},e.attrs),[a("div",{class:d(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),u(V,{key:0},[a("div",{class:d(e.containerClass)},[U(e.$slots,"default",{},()=>[e.label?(r(),u("span",{key:0,class:d(e.ui.label)},k(e.label),3)):e.icon?(r(),b(n,{key:1,name:e.icon,class:d(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),b(m,A({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):S("",!0)])],2),a("div",{class:d(e.borderClass)},null,2)],64)):S("",!0)],16)}const oe=z(re,[["render",le]]),ne=B("/images/photo-1519681393784-d120267933ba.jpg"),ie=B("/images/Nezu_Full_Body.webp"),de={},ce={class:"w-fullh-[50px] shadow-md"},pe={class:"flex justify-between py-5 align-middle"},ue={class:"flex ml-6"},fe={class:"gap-4 px-4 mt-4"},ge={class:"mt-24 md:px-64"},me={class:"flex flex-col gap-4 mt-10 md:flex-row md:px-64"},xe={class:"flex flex-col w-full px-10"},ve={class:"mt-24 md:px-64"},be={class:"mt-24 md:px-64"};function ye(e,t){const o=O,s=oe;return r(),u(V,null,[a("header",ce,[a("div",pe,[a("div",ue,[x(o,{name:"stash:burger-classic-duotone",class:"w-6 h-6 text-gray-900 dark:text-gray-300"})]),t[0]||(t[0]=w('<div class="hidden gap-10 mr-6 md:flex"><span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Education</span><span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Skills</span><span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Experience</span><span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Contact</span><span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">About me</span></div>',1))])]),a("main",fe,[t[8]||(t[8]=a("div",{class:"relative h-[850px] w-full bg-gray-900 rounded-xl"},[a("img",{src:ne,class:"absolute inset-0 object-cover w-full h-full shadow-md opacity-50 rounded-xl grayscale"}),a("span",{class:"absolute inset-0 flex items-center justify-center text-5xl font-bold text-white md:text-7xl"},[a("span",{class:"text-center"},"Hello, I'm Meas Vathanakvisal")])],-1)),a("div",ge,[t[1]||(t[1]=a("h1",{class:"pb-4 font-mono text-xl text-center"},"About Me",-1)),x(s,{orientation:"horizontal"})]),a("div",me,[t[5]||(t[5]=a("div",{class:"flex items-center justify-center md:w-[600px]"},[a("img",{src:ie,alt:"Photo",class:"w-48 h-56 sm:items-center grayscale"})],-1)),a("div",xe,[t[2]||(t[2]=a("div",{class:"w-full"},[a("h3",{class:"font-mono"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident")],-1)),t[3]||(t[3]=a("div",{class:"w-full"},[a("p",{class:"opacity-50"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,")],-1)),x(s,{orientation:"horizontal",class:"px-10 py-4"}),t[4]||(t[4]=w('<div><div class="hidden text-center md:grid md:grid-cols-3"><span class="font-mono">Email</span><span class="font-mono">Phone Number</span><span class="font-mono">Telegram</span><span class="font-mono opacity-50">measvathanakvisal@gmail.com</span><span class="font-mono opacity-50">+855969799974</span><span class="font-mono opacity-50">096 979 997 4</span></div><div class="grid grid-cols-1 gap-2 text-center md:grid-cols-3 md:hidden"><span class="font-mono">Email</span><span class="font-mono opacity-50">measvathanakvisal@gmail.com</span><span class="font-mono">Phone Number</span><span class="font-mono opacity-50">+855969799974</span><span class="font-mono">Telegram</span><span class="font-mono opacity-50">096 979 997 4</span></div></div>',1))])]),a("div",ve,[t[6]||(t[6]=a("h1",{class:"pb-4 font-mono text-xl text-center"},"Education & Experience",-1)),x(s,{orientation:"horizontal"})]),t[9]||(t[9]=w('<div class="mt-10 md:px-64"><div class="grid items-center justify-center grid-cols-1 gap-32 md:grid-cols-2"><div class="flex items-center flex-col justify-center font-[sans-serif] w-max"><h1 class="pb-4 font-mono text-lg text-center">Education</h1><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-mono text-gray-400">2008-2014</p><h6 class="font-mono text-sm text-gray-800">Primary School</h6><p class="text-[10px] font-mono text-gray-400">Private School of Vattanac Vichea</p></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-mono text-gray-400">2014-2020</p><h6 class="font-mono text-sm text-gray-800">High School</h6><p class="text-[10px] font-mono text-gray-400">Udom Vichea High School</p></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-mono text-gray-400">2020-2023</p><h6 class="font-mono text-sm text-gray-800">Bachelor Degree of MIS</h6><p class="text-[10px] font-mono text-gray-400">SETEC Institute</p></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-mono text-gray-400">2020-2023</p><h6 class="font-mono text-sm text-gray-800">Software Development</h6><p class="text-[10px] font-mono text-gray-400">Step IT Academy</p></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div></div></div><div class="flex items-center flex-col justify-center font-[sans-serif] w-max"><h1 class="pb-4 font-mono text-lg text-center">Experience</h1><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-bold text-gray-400">STEP 3</p><h6 class="text-sm font-bold text-gray-800">Subscription plan</h6></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-bold text-gray-400">STEP 3</p><h6 class="text-sm font-bold text-gray-800">Subscription plan</h6></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-bold text-gray-400">STEP 3</p><h6 class="text-sm font-bold text-gray-800">Subscription plan</h6></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div><div class="w-0.5 h-28 bg-gray-500"></div></div><div class="relative flex flex-col items-center"><div class="absolute top-0 ml-4 left-full w-max"><p class="text-[10px] font-bold text-gray-400">STEP 4</p><h6 class="text-sm text-gray-400">Payment details</h6></div><div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full"><span class="w-3 h-3 bg-gray-500 rounded-full"></span></div></div></div></div></div>',1)),a("div",be,[t[7]||(t[7]=a("h1",{class:"pb-4 font-mono text-xl text-center"},"Skills",-1)),x(s,{orientation:"horizontal"})]),t[10]||(t[10]=w('<div class="grid grid-cols-1 gap-8 mt-10 md:px-64 md:grid-cols-2"><div class="grid"><span class="font-mono">HTML</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="w-64 h-full bg-gray-500 rounded-full"></div></div></div><div class="grid"><span class="font-mono">CSS</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="w-64 h-full bg-gray-500 rounded-full"></div></div></div><div class="grid"><span class="font-mono">Javascript</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="w-56 h-full bg-gray-500 rounded-full"></div></div></div><div class="grid"><span class="font-mono">Typescript</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="w-64 h-full bg-gray-500 rounded-full"></div></div></div><div class="grid"><span class="font-mono">Java</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="h-full bg-gray-500 rounded-full w-72"></div></div></div><div class="grid"><span class="font-mono">Spring Boot</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="h-full bg-gray-500 rounded-full w-80"></div></div></div><div class="grid"><span class="font-mono">React JS</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="w-56 h-full bg-gray-500 rounded-full"></div></div></div><div class="grid"><span class="font-mono">Nuxt JS</span><div class="bg-gray-200 rounded-full w-full h-2.5"><div class="h-full bg-gray-500 rounded-full w-80"></div></div></div></div>',1))]),t[11]||(t[11]=a("footer",{class:"px-16 py-6 mt-10 font-sans tracking-wide text-gray-300"},[a("div",{class:"flex flex-wrap items-center justify-between gap-4 text-center max-lg:flex-col"},[a("p",{class:"text-[15px] leading-loose"},"© measvathanakvisal. All rights reserved.")])],-1))],64)}const ke=z(de,[["render",ye]]);export{ke as default};
