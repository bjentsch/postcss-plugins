import e from"postcss-value-parser";const s=s=>{const r=Object.assign({preserve:!1},s);return{postcssPlugin:"postcss-color-hex-alpha",Declaration(s){if(!/#([0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{4})?)\b/.test(s.value))return;const{value:a}=s,n=e(a);n.walk((e=>{if("function"===e.type&&"url"===e.value)return!1;(function(e){return"word"===e.type&&/^#([0-9A-Fa-f]{4}(?:[0-9A-Fa-f]{4})?)$/.test(e.value)})(e)&&t(e)}));const l=n.toString();l!==a&&(s.cloneBefore({value:l}),r.preserve||s.remove())}}};s.postcss=!0;const t=e=>{const s=e.value,t=`0x${5===s.length?s.slice(1).replace(/[0-9A-Fa-f]/g,"$&$&"):s.slice(1)}`,[r,a,n,l]=[parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16),parseInt(t.slice(6,8),16),Math.round(parseInt(t.slice(8,10),16)/255*1e5)/1e5];e.value=`rgba(${r},${a},${n},${l})`};export{s as default};
