(()=>{"use strict";var e,t={42:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,s=window.wp.data,o=(window.wp.element,(0,s.withSelect)(((e,t)=>{let r=[];return t.postTypes.forEach((function(l){var n,s;const o=e("core").getEntityRecords("postType",l,{per_page:null!==(n=t.searchResultsPerPage)&&void 0!==n?n:-1,search:null!==(s=t.searchTerm)&&void 0!==s?s:""});o&&(r=[...r,...o])})),{combinedEntities:r}}))((({combinedEntities:e,postTypes:l=["post"],searchTerm:s,searchResultsPerPage:o,selected:i,onchange:a})=>{if(!e.length)return(0,t.createElement)("p",null,(0,r.__)("Loading...","lichtberg"));const c=e.map((e=>({label:e.title.rendered,value:e.link})));return(0,t.createElement)(n.RadioControl,{selected:i,options:c,onChange:a})})),({style:e,styleOptions:l,onChange:s})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.MultiSelectControl,{label:(0,r.__)("Styles","lichtberg"),value:e,options:l,onChange:s}))),i=JSON.parse('{"i8":"0.5.0","W3":"lichtberg","kG":"lichtberg","Y4":{"o":{"type":"array","default":[]},"T":{"type":"array","default":[{"label":"Button","value":"button"}]}},"nE":["lichtberg/group","lichtberg/image","lichtberg/link","lichtberg/shortcode","lichtberg/text"]}'),a=(e=[],t)=>{let r="";for(let l=0;l<e.length;l++)""!=e[l]&&(r+=` ${t}--style-${e[l]}`);return r},c=(e=>(e.version=i.i8,e.category=i.W3,e.textdomain=i.kG,e.attributes.style=i.Y4.o,e.attributes.styleOptions=i.Y4.T,e))(JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"lichtberg/group","ancestor":["lichtberg/section"],"title":"Group","icon":"screenoptions","description":"A group block to encapsulate content.","example":{},"supports":{"html":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"classBaseName":{"type":"string","default":"wp-block-lichtberg-group"}}}'));(0,e.registerBlockType)(c.name,{edit:function({attributes:e,setAttributes:s}){const c=(0,l.useBlockProps)({className:a(e.style,e.classBaseName)}),p=(0,l.useInnerBlocksProps)(c,{templateInsertUpdatesSelection:!0,allowedBlocks:i.nE});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,r.__)("Block Settings","lichtberg")},(0,t.createElement)(o,{attributes:e,setAttributes:s}))),(0,t.createElement)("div",{...p}))},save:function({attributes:e}){const r=l.useBlockProps.save({className:a(e.style,e.classBaseName)});return(0,t.createElement)("div",{...r},(0,t.createElement)(l.InnerBlocks.Content,null))}})}},r={};function l(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,l),s.exports}l.m=t,e=[],l.O=(t,r,n,s)=>{if(!r){var o=1/0;for(p=0;p<e.length;p++){for(var[r,n,s]=e[p],i=!0,a=0;a<r.length;a++)(!1&s||o>=s)&&Object.keys(l.O).every((e=>l.O[e](r[a])))?r.splice(a--,1):(i=!1,s<o&&(o=s));if(i){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[r,n,s]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={353:0,25:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[o,i,a]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(a)var p=a(l)}for(t&&t(r);c<o.length;c++)s=o[c],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(p)},r=globalThis.webpackChunklichtberg=globalThis.webpackChunklichtberg||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=l.O(void 0,[25],(()=>l(42)));n=l.O(n)})();