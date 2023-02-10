"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{8043:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var n=a(7294),l=a(6010),r=a(1944),s=a(7524),o=a(5281),c=a(7462),i=a(5999),d=a(2244);function m(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,c.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,c.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(2263),v=a(9960),b=a(143),h=a(373),p=a(4477);const f={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=f[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(v.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,u.Z)(),{pluginId:s}=(0,b.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,h.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:d}=(0,b.Jo)(s),m=i??(v=d).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:d.label,to:m.path,onClick:()=>c(d.name)})))}function N(e){let{className:t}=e;const a=(0,p.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function Z(e){let{className:t}=e;const a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function C(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:o.k.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(C,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var H=a(6114),x=a(1526);const T="lastUpdated_vbeJ";function U(e){return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x.Z,e)))}function A(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(o.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(H.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",T)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:c,lastUpdatedBy:i,tags:d}=a,m=d.length>0,u=!!(r||s||i);return m||u?n.createElement("footer",{className:(0,l.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(U,{tags:d}),u&&n.createElement(A,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:c})):null}var w=a(9407),I=a(6043),M=a(3743);const B="tocCollapsibleButton_TO0P",O="tocCollapsibleButtonExpanded_MG3E";function S(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,c.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",B,!t&&O,a.className)}),n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const V="tocCollapsible_ETCw",P="tocCollapsibleContent_vkbj",D="tocCollapsibleExpanded_sAul";function R(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:c}=(0,I.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(V,!o&&D,a)},n.createElement(S,{collapsed:o,onClick:c}),n.createElement(I.z,{lazy:!0,className:P,collapsed:o},n.createElement(M.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var z=a(2503),F=a(2802),q=a(8596),J=a(4996);function j(e){return n.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const G={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function $(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(v.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function K(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,c.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Q(){const e=(0,J.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(v.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",G.breadcrumbsItemLink),href:e},n.createElement(j,{className:G.breadcrumbHomeIcon})))}function W(){const e=(0,F.s1)(),t=(0,q.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(o.k.docs.docBreadcrumbs,G.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Q,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(K,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement($,{href:t.href,isLast:l},t.label))})))):null}var X=a(3548);const Y="docItemContainer_Adtb",ee="docItemCol_GujU",te="tocMobile_aoJ5";function ae(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:s}=t,{keywords:o}=l,{description:c,title:i}=a,d=s.image??l.image;return n.createElement(r.d,{title:i,description:c,keywords:o,image:d})}function ne(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:c,hide_table_of_contents:i,toc_min_heading_level:d,toc_max_heading_level:u}=r,{title:v}=a,b=!c&&void 0===t.contentTitle,h=(0,s.i)(),p=!i&&t.toc&&t.toc.length>0,f=p&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&ee)},n.createElement(N,null),n.createElement("div",{className:Y},n.createElement("article",null,n.createElement(W,null),n.createElement(Z,null),p&&n.createElement(R,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,l.Z)(o.k.docs.docTocMobile,te)}),n.createElement("div",{className:(0,l.Z)(o.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(z.Z,{as:"h1"},v)),n.createElement(X.Z,null,n.createElement(t,null))),n.createElement(y,e)),n.createElement(m,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:o.k.docs.docTocDesktop})))}function le(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(r.FG,{className:t},n.createElement(ae,e),n.createElement(ne,e))}},9407:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),s=a(3743);const o="tableOfContents_bqdL";function c(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),l=a(7294),r=a(6668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>c(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=i(o,{anchorTopOffset:a.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const h=(0,r.L)(),p=d??h.tableOfContents.minHeadingLevel,f=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:f}}),[c,i,p,f])),l.createElement(v,(0,n.Z)({toc:E,className:a,linkClassName:c},b))}},4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);