(this.webpackJsonpdelight=this.webpackJsonpdelight||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(12),c(4)),o=c.n(s),j=c(7),l=c(2),u=(c(14),c(5)),p=c.n(u),b=c(0),h=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(b.jsxs)("div",{className:p.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)("em",{children:"Ingredients"})," "]})}),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{className:p.a.image,src:n,alt:""})]})};var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),s=r[0],u=r[1],p=Object(n.useState)("chicken"),d=Object(l.a)(p,2),f=d[0],m=d[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("c458c83a","&app_key=").concat("c1bbf7192ccab38fe2f3cae38df456c3"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"nav",children:"Ingredients and Recipes"}),Object(b.jsx)("p",{className:"nav",children:"know what's in your favourite meal"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),u("")},className:"search-form",children:[Object(b.jsx)("input",{placeholder:"search for your favourite food item",className:"search-bar",type:"text",value:s,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__Du3k7",image:"recipe_image__1y3Ng"}}},[[16,1,2]]]);
//# sourceMappingURL=main.f4cf5f2a.chunk.js.map