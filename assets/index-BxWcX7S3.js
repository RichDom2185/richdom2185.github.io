import{i as t,c as n,a as $,b as g,d as c,s as N,F as _,t as m}from"./index-DSLA65ca.js";import{c as l,C as u,S as O,I as P,T as j,p as C,P as R,a as I,b as k}from"./Placeholder-COVkJIXn.js";var D=m("<div><h4>"),M=m('<ul class="mt-3 space-y-1 text-sm">'),A=m('<li><a target=_blank rel="noopener noreferrer"><span><span>'),V=m("<div>");const Y=({name:s,description:i,links:p,tech:d})=>(()=>{var o=D(),e=o.firstChild;return t(e,s),t(o,i&&n(O,{linkTarget:"_blank",get class(){return l("mt-1",u.MARKDOWN_CONTAINER)},children:i}),null),t(o,(()=>{var r=$(()=>!!p?.length);return()=>r()&&(()=>{var a=M();return t(a,n(_,{each:p,children:h=>(()=>{var x=A(),f=x.firstChild,b=f.firstChild,T=b.firstChild;return t(b,n(P,{inline:!0,get icon(){return h.icon}}),T),t(T,()=>h.label),g(v=>{var w=l("hover:text-blue-600","dark:hover:text-white"),y=h.url,S=l("hover:underline underline-offset-4","space-x-2");return w!==v.e&&c(f,v.e=w),y!==v.t&&N(f,"href",v.t=y),S!==v.a&&c(b,v.a=S),v},{e:void 0,t:void 0,a:void 0}),x})()})),a})()})(),null),t(o,(()=>{var r=$(()=>!!d?.length);return()=>r()&&(()=>{var a=V();return t(a,n(_,{each:d,children:h=>n(j,{withTooltip:!0,tooltipPosition:"bottom",tech:h})})),g(()=>c(a,l("text-3xl text-center","flex flex-wrap gap-2","mt-4"))),a})()})(),null),g(()=>c(e,l(u.TEXT_MEDIUM,"text-xl"))),o})(),G=`- name: Some Test Project
  description: |
    This one has a description.

    In fact, a multiline one.
  links:
    - icon: simple-icons:github
      url: https://github.com/
      label: View the source code on GitHub

- name: Some Second Test Project
  tech:
    - React
    - TypeScript
    - TailwindCSS
  links:
    - icon: simple-icons:github
      url: https://github.com/
      label: View the source code on GitHub
    - icon: simple-icons:netlify
      url: https://www.netlify.com/
      label: View the deployment on Netlify
`,H=`- name: Confidential Test Project
  description: Hence, there are no links.
  tech:
    - Python
    - TypeScript
    - React
    - R
    - Golang
    - JavaScript
    - PostgreSQL
    - Jekyll
    - Java
    - TailwindCSS

- name: YATP
  description: Stands for Yet Another Test Project.
  links:
    - icon: simple-icons:gitlab
      url: https://gitlab.com/
      label: View the source code on GitLab
    - icon: simple-icons:render
      url: https://www.render.com/
      label: View the deployment on Render
`,B=[2022,2023],L={2022:C(G),2023:C(H)};var X=m("<div class=space-y-6><p>This page is coming soon!</p><p class=text-sm>Congrats, you found a hidden page! This page is not quite ready yet, as it is missing the main bulk of its content. In the meantime, as a reward for finding this page, enjoy some test data below:"),J=m('<div><h1> Experiments</h1><div class="w-full max-w-lg space-y-6 mx-auto"><p>');const U=()=>n(I,{get children(){var s=J(),i=s.firstChild,p=i.firstChild,d=i.nextSibling,o=d.firstChild;return t(i,n(P,{inline:!0,icon:"twemoji:alembic"}),p),t(o,n(R,{disableOverlay:!0,get children(){return X()}})),g(e=>{var r=l(u.SECTION_BODY_RESPONSIVE,"space-y-10"),a=l("text-4xl font-display text-center",u.TEXT_BOLD),h=l("text-md md:text-lg text-justify","italic",u.TEXT_NORMAL);return r!==e.e&&c(s,e.e=r),a!==e.t&&c(i,e.t=a),h!==e.a&&c(o,e.a=h),e},{e:void 0,t:void 0,a:void 0}),s}});var E=m("<div>"),F=m("<div class=space-y-4><h2></h2><div>");const K=[...B].sort((s,i)=>i-s),q=()=>n(k,{withHeader:!0,withSidebar:!0,get children(){return[n(U,{}),n(I,{get children(){var s=E();return t(s,n(_,{each:K,children:i=>(()=>{var p=F(),d=p.firstChild,o=d.nextSibling;return t(d,i),t(o,n(_,{get each(){return L[i]},children:e=>(()=>{var r=E();return t(r,n(Y,e)),g(()=>c(r,l("pt-3 pb-4 px-4",u.HOVER_DYNAMIC_BACKGROUND))),r})()})),g(e=>{var r=l("text-3xl font-display tracking-wider",u.TEXT_MEDIUM),a=l("divide-y divide-neutral-300 dark:divide-stone-800");return r!==e.e&&c(d,e.e=r),a!==e.t&&c(o,e.t=a),e},{e:void 0,t:void 0}),p})()})),g(()=>c(s,l(u.SECTION_BODY_RESPONSIVE,"space-y-10"))),s}})]}}),z=q;export{z as default};
