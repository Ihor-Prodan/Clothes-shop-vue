import{g as ne,i as le,e as ce,a as ee,b as de,d as D,S as ue,r as S,o as te,c as p,f as g,h as i,j as y,w as F,u as A,F as V,k as O,l as $,m as W,n as Y,_ as q,p as se,q as B,v as pe,s as J,t as fe,x as me,y as ve,z as R,A as he,B as N,L as U,C as k,D as I,E as we,U as _e,G as Q,H as L,I as be,J as ge,K as xe,R as ye,M as Se,N as ke,O as ie}from"./index-Bvuiv-uf.js";function Ce(v){let{swiper:e,extendParams:r,on:l}=v;r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let m=!1,n=!1;e.thumbs={swiper:null};function f(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,o=s.clickedSlide;if(o&&o.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let u;s.params.loop?u=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):u=t,e.params.loop?e.slideToLoop(u):e.slideTo(u)}function c(){const{thumbs:s}=e.params;if(m)return!1;m=!0;const t=e.constructor;if(s.swiper instanceof t)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(le(s.swiper)){const o=Object.assign({},s.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(o),n=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",f),!0}function a(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const o=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let u=1;const w=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(u=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),t.slides.forEach(_=>_.classList.remove(w)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let _=0;_<u;_+=1)ce(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+_}"]`).forEach(h=>{h.classList.add(w)});else for(let _=0;_<u;_+=1)t.slides[e.realIndex+_]&&t.slides[e.realIndex+_].classList.add(w);const x=e.params.thumbs.autoScrollOffset,T=x&&!t.params.loop;if(e.realIndex!==t.realIndex||T){const _=t.activeIndex;let h,E;if(t.params.loop){const j=t.slides.filter(P=>P.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];h=t.slides.indexOf(j),E=e.activeIndex>e.previousIndex?"next":"prev"}else h=e.realIndex,E=h>e.previousIndex?"next":"prev";T&&(h+=E==="next"?x:-1*x),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(h)<0&&(t.params.centeredSlides?h>_?h=h-Math.floor(o/2)+1:h=h+Math.floor(o/2)-1:h>_&&t.params.slidesPerGroup,t.slideTo(h,s?0:void 0))}}l("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=ne(),o=()=>{const w=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(w&&w.swiper)s.swiper=w.swiper,c(),a(!0);else if(w){const x=T=>{s.swiper=T.detail[0],w.removeEventListener("init",x),c(),a(!0),s.swiper.update(),e.update()};w.addEventListener("init",x)}return w},u=()=>{if(e.destroyed)return;o()||requestAnimationFrame(u)};requestAnimationFrame(u)}else c(),a(!0)}),l("slideChange update resize observerUpdate",()=>{a()}),l("setTransition",(s,t)=>{const o=e.thumbs.swiper;!o||o.destroyed||o.setTransition(t)}),l("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||n&&s.destroy()}),Object.assign(e.thumbs,{init:c,update:a})}function Ie(v){const{effect:e,swiper:r,on:l,setTranslate:m,setTransition:n,overwriteParams:f,perspective:c,recreateShadows:a,getEffectParams:s}=v;l("beforeInit",()=>{if(r.params.effect!==e)return;r.classNames.push(`${r.params.containerModifierClass}${e}`),c&&c()&&r.classNames.push(`${r.params.containerModifierClass}3d`);const o=f?f():{};Object.assign(r.params,o),Object.assign(r.originalParams,o)}),l("setTranslate",()=>{r.params.effect===e&&m()}),l("setTransition",(o,u)=>{r.params.effect===e&&n(u)}),l("transitionEnd",()=>{if(r.params.effect===e&&a){if(!s||!s().slideShadows)return;r.slides.forEach(o=>{o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>u.remove())}),a()}});let t;l("virtualUpdate",()=>{r.params.effect===e&&(r.slides.length||(t=!0),requestAnimationFrame(()=>{t&&r.slides&&r.slides.length&&(m(),t=!1)}))})}function Te(v,e){const r=ee(e);return r!==e&&(r.style.backfaceVisibility="hidden",r.style["-webkit-backface-visibility"]="hidden"),r}function Pe(v){let{swiper:e,duration:r,transformElements:l,allSlides:m}=v;const{activeIndex:n}=e,f=c=>c.parentElement?c.parentElement:e.slides.filter(s=>s.shadowRoot&&s.shadowRoot===c.parentNode)[0];if(e.params.virtualTranslate&&r!==0){let c=!1,a;m?a=l:a=l.filter(s=>{const t=s.classList.contains("swiper-slide-transform")?f(s):s;return e.getSlideIndex(t)===n}),a.forEach(s=>{de(s,()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const t=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(t)})})}}function $e(v){let{swiper:e,extendParams:r,on:l}=v;r({fadeEffect:{crossFade:!1}}),Ie({effect:"fade",swiper:e,on:l,setTranslate:()=>{const{slides:f}=e,c=e.params.fadeEffect;for(let a=0;a<f.length;a+=1){const s=e.slides[a];let o=-s.swiperSlideOffset;e.params.virtualTranslate||(o-=e.translate);let u=0;e.isHorizontal()||(u=o,o=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(s.progress),0):1+Math.min(Math.max(s.progress,-1),0),x=Te(c,s);x.style.opacity=w,x.style.transform=`translate3d(${o}px, ${u}px, 0px)`}},setTransition:f=>{const c=e.slides.map(a=>ee(a));c.forEach(a=>{a.style.transitionDuration=`${f}ms`}),Pe({swiper:e,duration:f,transformElements:c,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const Ee={class:"swiper-container"},Re={class:"swiper-container gallery-top"},Ae=["src"],ze={class:"swiper-container gallery-thumbs"},Me=["src"],Fe=D({__name:"IUswiper",props:{images:{}},setup(v){ue.use([Ce,$e]);const e=v,r=S(null),l=S(null),m=f=>{r.value=f},n=f=>{l.value=f};return te(()=>{r.value&&l.value&&(l.value.thumbs.swiper=r.value)}),(f,c)=>(p(),g("div",Ee,[i("div",Re,[y(A(Y),{ref_key:"mainSwiper",ref:l,"slides-per-view":1,"space-between":10,effect:"fade","fade-effect":{crossFade:!0},thumbs:{swiper:r.value},onSwiper:n},{default:F(()=>[(p(!0),g(V,null,O(e.images,(a,s)=>(p(),$(A(W),{key:s},{default:F(()=>[i("div",{ref_for:!0,ref:"imageContainer",class:"image-container"},[i("img",{class:"swiper-image",src:a,alt:"product image"},null,8,Ae)],512)]),_:2},1024))),128))]),_:1},8,["thumbs"])]),i("div",ze,[y(A(Y),{ref_key:"thumbsSwiper",ref:r,"slides-per-view":4,"space-between":10,"watch-slides-progress":"","slide-to-clicked-slide":"",mousewheel:!0,onSwiper:m},{default:F(()=>[(p(!0),g(V,null,O(e.images,(a,s)=>(p(),$(A(W),{key:s},{default:F(()=>[i("img",{class:"swiper-thumbnail",src:a,alt:"product thumbnail"},null,8,Me)]),_:2},1024))),128))]),_:1},512)])]))}}),Le=q(Fe,[["__scopeId","data-v-b49cbaa5"]]),Ve="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='close-icon-svg'%20%3e%3cline%20x1='18'%20y1='6'%20x2='6'%20y2='18'%20/%3e%3cline%20x1='6'%20y1='6'%20x2='18'%20y2='18'%20/%3e%3c/svg%3e",Oe={class:"modal"},De=i("img",{src:Ve,alt:"Close"},null,-1),je=[De],Be={class:"review-star"},Ne=i("label",{class:"review-text",for:"review-star-select"},"Rating",-1),Ue=fe('<option value="1">1 - Poor</option><option value="2">2 - Fair</option><option value="3">3 - Good</option><option value="4">4 - Very Good</option><option value="5">5 - Excellent</option>',5),qe=[Ue],Ge={class:"review-user"},He=i("label",{class:"review-text",for:"review-user-input"},"Name",-1),Ke={class:"review-message"},We=i("label",{class:"review-text",for:"review-message-text"},"Review",-1),Ye=D({__name:"ModalAddReview",emits:["submit-review","close"],setup(v,{emit:e}){const r=e,l=se(),m=S(l.params.id),n=S({stars:1,name:"",text:"",id:Date.now(),productID:m.value,posted:a(new Date)}),f=()=>{n.value.name&&n.value.text&&r("submit-review",{...n.value})},c=()=>{r("close")};function a(s){const t={year:"numeric",month:"long",day:"numeric"};return`Posted on ${s.toLocaleDateString("en-US",t)}`}return(s,t)=>(p(),g("section",Oe,[i("button",{class:"close-icon",onClick:c},je),i("div",Be,[Ne,B(i("select",{id:"review-star-select","onUpdate:modelValue":t[0]||(t[0]=o=>n.value.stars=o),class:"review-star-select"},qe,512),[[pe,n.value.stars,void 0,{number:!0}]])]),i("div",Ge,[He,B(i("input",{id:"review-user-input","onUpdate:modelValue":t[1]||(t[1]=o=>n.value.name=o),class:"review-user-input",type:"text",placeholder:"Enter your name"},null,512),[[J,n.value.name]])]),i("div",Ke,[We,B(i("textarea",{id:"review-message-text","onUpdate:modelValue":t[2]||(t[2]=o=>n.value.text=o),class:"modal-textarea",rows:"4",placeholder:"Write your review here"},null,512),[[J,n.value.text]])]),i("button",{class:"submit-button",onClick:f}," Submit Review ")]))}}),z=v=>(Se("data-v-61bf1539"),v=v(),ke(),v),Je={class:"wrapper"},Qe={class:"product-info"},Xe={class:"link-container"},Ze={class:"link-home"},et=z(()=>i("img",{class:"link-icon",src:ie},null,-1)),tt={class:"link-product"},st=z(()=>i("img",{class:"link-icon",src:ie},null,-1)),it={class:"link-product"},rt={key:0,class:"product-info-container"},ot={class:"product-info-container-info"},at={class:"product-info-container-info-type"},nt={class:"product-info-container-info-title"},lt={class:"product-info-container-info-review"},ct={class:"product-info-container-info-review-text"},dt={class:"product-info-container-info-price"},ut={key:0,class:"product-info-priceNew"},pt={key:1,class:"product-info-priceDiscountPrcent"},ft={class:"product-info-container-info-text"},mt={class:"sizeAndbuttons"},vt={class:"product-info-container-info-size"},ht=z(()=>i("p",{class:"product-info-container-info-size-title"},"Size:",-1)),wt={class:"product-info-container-info-size-container"},_t={class:"product-info-container-info-buttons"},bt={class:"product-info-review-container"},gt={class:"review-titleAndButton"},xt=z(()=>i("h3",{class:"review-title"},"All Reviews",-1)),yt={key:0,class:"review-grid"},St={key:1,class:"review-grid-empty"},kt=z(()=>i("p",{class:"review-grid-empty-text"}," Looks like no one has reviewed this product. You could be the first! ",-1)),Ct=[kt],It={key:3,class:"addReview-container"},Tt={class:"recommended-container"},Pt=!0,X=`
    display: flex;
    width: 400px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    background: #000;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border: none;
  `,Z=`
    display: flex;
    width: 400px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    background: #FFF;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid rgba(0, 0, 0, 0.10);
  `,$t=`
    display: flex;
    width: 166px;
    height: 48px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    border-radius: 62px;
    background: #000;
    border: none;
`,Et=`
    margin-top: 30px;
    display: flex;
    width: 230px;
    height: 52px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 62px;
    border: 1px solid rgba(0, 0, 0, 0.10);
`,Rt=D({__name:"ProductInfo",setup(v){const e=me(),r=ve(),l=se(),m=S(l.params.id),n=S(""),f=S(""),c=S(""),a=S(!1),s=S(6),t=R(()=>e.products.find(d=>d.id.toString()===m.value)),o=he(),u=R(()=>o.reviews.filter(d=>{var b;return Number(d.productID)===((b=t.value)==null?void 0:b.id)})),w=R(()=>u.value.slice(0,s.value)),x=()=>{s.value+=6},T=u,_=()=>{l.query.size&&(n.value=l.query.size)},h=d=>{f.value=d,c.value=""};te(()=>{e.fetchProducts(),_()}),N(()=>l.query.size,d=>{d&&(n.value=d)}),N(()=>l.params.id,d=>{m.value=d,e.fetchProducts()});const E=R(()=>{const d=localStorage.getItem("previousRoute");if(d){const b=d.charAt(0).toUpperCase(),M=d.slice(1).toLowerCase();return b+M}return null}),j=()=>{const d=e.products.find(b=>b.id.toString()===m.value);d&&n.value?r.addProductToCart(d,n.value):c.value="Choose size"},P=R(()=>r.productsInCart.find(d=>d.id.toString()===m.value&&d.size===n.value)),re=d=>{r.deleteProductById(d,n.value)},G=()=>{P.value?re(Number(m.value)):j()};function oe(d){o.addReview(d),a.value=!1}return N(n,d=>{d&&h(d)}),(d,b)=>{var M,H,K;return p(),g("div",Je,[i("section",Qe,[y(U),i("div",Xe,[i("p",Ze,k(E.value),1),et,i("p",tt,k((M=t.value)==null?void 0:M.style),1),st,i("p",it,k((H=t.value)==null?void 0:H.type),1)]),t.value?(p(),g("div",rt,[y(Le,{images:t.value.images},null,8,["images"]),i("div",ot,[i("div",at,[i("h1",nt,k(t.value.name),1),i("div",lt,[(p(!0),g(V,null,O(Number(t.value.rating.toString()[0]),(C,ae)=>(p(),g("img",{key:ae,class:"product-info-container-info-review-icon",src:ge}))),128)),i("p",ct,k(t.value.rating.toString()[0])+"/5 ",1)]),i("div",dt,[t.value.discount>0?(p(),g("p",ut,k(t.value.discountPrice),1)):I("",!0),i("p",{class:we(t.value.discount>0?"product-info-priceDiscount":"product-info-priceNew")},k(t.value.price),3),t.value.discount>0?(p(),g("div",pt,k(t.value.discount)+"% ",1)):I("",!0)]),i("p",ft,k(t.value.description),1)]),i("div",mt,[y(U),i("div",vt,[ht,i("div",wt,[y(_e,{modelValue:n.value,"onUpdate:modelValue":b[0]||(b[0]=C=>n.value=C),"is-product-info":Pt,sizes:(K=t.value)==null?void 0:K.large,onSelectSize:b[1]||(b[1]=C=>h(n.value))},null,8,["modelValue","sizes"])])]),y(U),i("div",_t,[c.value?I("",!0):(p(),$(L,{key:0,title:P.value?"Remove from Cart":"Add to Cart","is-white":!1,style:Q(P.value?Z:X),onClick:G},null,8,["title","style"])),c.value?(p(),$(L,{key:1,title:c.value,"is-white":!1,style:Q(P.value?Z:X),onClick:G},null,8,["title","style"])):I("",!0)])])])])):I("",!0),i("div",bt,[i("div",gt,[xt,y(L,{title:"Write a Review","is-white":!1,style:$t,onClick:b[2]||(b[2]=C=>a.value=!0)})]),A(T).length>0?(p(),g("div",yt,[(p(!0),g(V,null,O(w.value,C=>(p(),$(ye,xe({key:C.id,ref_for:!0},C),null,16))),128))])):(p(),g("div",St,Ct)),a.value?(p(),$(Ye,{key:2,onClose:b[3]||(b[3]=C=>a.value=!1),onSubmitReview:oe})):I("",!0),u.value.length>s.value?(p(),g("div",It,[y(L,{title:"Load More Reviews","is-white":!0,style:Et,onClick:x})])):I("",!0)]),i("div",Tt,[y(be,{title:"YOU MIGHT ALSO LIKE"})])])])}}}),At=q(Rt,[["__scopeId","data-v-61bf1539"]]),zt={class:"container"},Mt=D({__name:"ProductInfoPage",setup(v){return(e,r)=>(p(),g("div",zt,[y(At)]))}}),Lt=q(Mt,[["__scopeId","data-v-98cc6679"]]);export{Lt as default};
