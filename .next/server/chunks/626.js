exports.id=626,exports.ids=[626],exports.modules={8215:i=>{i.exports={title:"creaPizza_title__HxLm1",container:"creaPizza_container__YsQqg",options:"creaPizza_options__VC4Cy",option:"creaPizza_option__1CP1R",smallP:"creaPizza_smallP__C2gd_",btn_option:"creaPizza_btn_option__gy_qq",addToCart:"creaPizza_addToCart__EcAfl"}},4626:(i,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997);s(6689);var n=s(8215),t=s.n(n);let __WEBPACK_DEFAULT_EXPORT__=({title:i,options:e,selectedOption:s,handleClick:n,handleRemove:o})=>(console.log("selectedOption:",s),a.jsx("div",{className:t().container,children:(0,a.jsxs)("div",{className:t().options,children:[a.jsx("h2",{children:i}),e&&e.map(i=>(0,a.jsxs)("div",{className:t().option,children:[(0,a.jsxs)("p",{children:[i.nome,i.ingredienti&&(0,a.jsxs)("p",{className:t().smallP,children:["Ingredienti: ",i.ingredienti]})]}),(0,a.jsxs)("div",{children:[a.jsx("input",{className:t().btn_option,type:"button",value:"+",onClick:()=>n(i.id)}),(s===i.id||Array.isArray(s)&&s.includes(i.id))&&a.jsx("input",{className:t().btn_option,type:"button",value:"-",onClick:()=>o(i.id)})]})]},i.id))]})}))}};