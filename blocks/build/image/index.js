(()=>{"use strict";var e,t={561:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,r=window.wp.data,o=(window.wp.element,(0,r.withSelect)(((e,t)=>{let a=[];return t.postTypes.forEach((function(l){var n,r;const o=e("core").getEntityRecords("postType",l,{per_page:null!==(n=t.searchResultsPerPage)&&void 0!==n?n:-1,search:null!==(r=t.searchTerm)&&void 0!==r?r:""});o&&(a=[...a,...o])})),{combinedEntities:a}}))((({combinedEntities:e,postTypes:l=["post"],searchTerm:r,searchResultsPerPage:o,selected:c,onchange:s})=>{if(!e.length)return(0,t.createElement)("p",null,(0,a.__)("Loading...","lichtberg"));const i=e.map((e=>({label:e.title.rendered,value:e.link})));return(0,t.createElement)(n.RadioControl,{selected:c,options:i,onChange:s})})),({style:e,styleOptions:l,onChange:r})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.MultiSelectControl,{label:(0,a.__)("Styles","lichtberg"),value:e,options:l,onChange:r}))),c=(e=[],t)=>{let a="";for(let l=0;l<e.length;l++)""!=e[l]&&(a+=` ${t}--style-${e[l]}`);return a},s=JSON.parse('{"u2":"lichtberg/image"}');(0,e.registerBlockType)(s.u2,{edit:function({attributes:e,setAttributes:r}){const s=(0,l.useBlockProps)({className:c(e.style,e.classBaseName)});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,a.__)("Block Settings","lichtberg")},(0,t.createElement)(o,{attributes:e,setAttributes:r}),e.url?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.TextControl,{label:(0,a.__)("Alt Text","lichtberg"),value:e.alt,onChange:e=>r({alt:e})}),(0,t.createElement)(n.TextControl,{label:(0,a.__)("Caption","lichtberg"),value:e.caption,onChange:e=>r({caption:e})})):"",(0,t.createElement)(t.Fragment,null,e.url?(0,t.createElement)(n.Button,{onClick:()=>{r({id:null,url:"",alt:"",caption:""})},variant:"link",isDestructive:!0},"Remove Image"):(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:e=>{r({id:e.id,url:e.url,alt:e.alt,caption:e.caption})},allowedTypes:["image"],value:e.id,render:({open:e})=>(0,t.createElement)(n.Button,{onClick:e,variant:"secondary"},"Select/Upload Image")}))))),(0,t.createElement)("div",{...s},e.url?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("img",{src:e.url,alt:e.alt,className:`${e.classBaseName}__image`}),(0,t.createElement)(l.RichText,{tagName:"figcaption",className:`${e.classBaseName}__caption`,onChange:e=>r({caption:e}),value:e.caption,placeholder:"Add a caption..."})):(0,t.createElement)("p",{className:`${e.classBaseName}__placeholder`},(0,a.__)("Select an image from the block panel to the right.","lichtberg"))))},save:function({attributes:e}){const a=l.useBlockProps.save({className:c(e.style,e.classBaseName)});return(0,t.createElement)("div",{...a},e.url&&(0,t.createElement)("img",{src:e.url,alt:e.alt,className:`${e.classBaseName}__image`}),e.caption&&(0,t.createElement)("figcaption",{className:`${e.classBaseName}__caption`},e.caption))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,a,n,r)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,n,r]=e[m],c=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,n,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={885:0,476:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[o,c,s]=a,i=0;if(o.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var m=s(l)}for(t&&t(a);i<o.length;i++)r=o[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},a=globalThis.webpackChunklichtberg=globalThis.webpackChunklichtberg||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[476],(()=>l(561)));n=l.O(n)})();