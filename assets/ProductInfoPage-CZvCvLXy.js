import{g as te,i as se,e as ie,a as J,b as re,d as V,S as ae,r as k,o as Q,c as f,f as _,h as i,j as S,w as A,u as z,F,k as L,l as M,m as K,n as W,_ as q,p as X,q as j,v as oe,s as Y,t as ne,x as le,y as ce,z as R,A as de,B as U,L as B,C as y,D as P,E as ue,U as pe,G as fe,H as N,I as me,J as ve,K as he,R as we,M as _e,N as be,O as Z}from"./index-mYIIbtZB.js";function ge(h){let{swiper:e,extendParams:r,on:n}=h;r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let m=!1,o=!1;e.thumbs={swiper:null};function p(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,c=t.clickedSlide;if(c&&c.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let u;t.params.loop?u=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):u=s,e.params.loop?e.slideToLoop(u):e.slideTo(u)}function d(){const{thumbs:t}=e.params;if(m)return!1;m=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(se(t.swiper)){const c=Object.assign({},t.swiper);Object.assign(c,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(c),o=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",p),!0}function a(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const c=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let u=1;const w=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(u=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),s.slides.forEach(b=>b.classList.remove(w)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let b=0;b<u;b+=1)ie(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(v=>{v.classList.add(w)});else for(let b=0;b<u;b+=1)s.slides[e.realIndex+b]&&s.slides[e.realIndex+b].classList.add(w);const x=e.params.thumbs.autoScrollOffset,T=x&&!s.params.loop;if(e.realIndex!==s.realIndex||T){const b=s.activeIndex;let v,C;if(s.params.loop){const O=s.slides.filter(D=>D.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];v=s.slides.indexOf(O),C=e.activeIndex>e.previousIndex?"next":"prev"}else v=e.realIndex,C=v>e.previousIndex?"next":"prev";T&&(v+=C==="next"?x:-1*x),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(v)<0&&(s.params.centeredSlides?v>b?v=v-Math.floor(c/2)+1:v=v+Math.floor(c/2)-1:v>b&&s.params.slidesPerGroup,s.slideTo(v,t?0:void 0))}}n("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const s=te(),c=()=>{const w=typeof t.swiper=="string"?s.querySelector(t.swiper):t.swiper;if(w&&w.swiper)t.swiper=w.swiper,d(),a(!0);else if(w){const x=T=>{t.swiper=T.detail[0],w.removeEventListener("init",x),d(),a(!0),t.swiper.update(),e.update()};w.addEventListener("init",x)}return w},u=()=>{if(e.destroyed)return;c()||requestAnimationFrame(u)};requestAnimationFrame(u)}else d(),a(!0)}),n("slideChange update resize observerUpdate",()=>{a()}),n("setTransition",(t,s)=>{const c=e.thumbs.swiper;!c||c.destroyed||c.setTransition(s)}),n("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||o&&t.destroy()}),Object.assign(e.thumbs,{init:d,update:a})}function xe(h){const{effect:e,swiper:r,on:n,setTranslate:m,setTransition:o,overwriteParams:p,perspective:d,recreateShadows:a,getEffectParams:t}=h;n("beforeInit",()=>{if(r.params.effect!==e)return;r.classNames.push(`${r.params.containerModifierClass}${e}`),d&&d()&&r.classNames.push(`${r.params.containerModifierClass}3d`);const c=p?p():{};Object.assign(r.params,c),Object.assign(r.originalParams,c)}),n("setTranslate",()=>{r.params.effect===e&&m()}),n("setTransition",(c,u)=>{r.params.effect===e&&o(u)}),n("transitionEnd",()=>{if(r.params.effect===e&&a){if(!t||!t().slideShadows)return;r.slides.forEach(c=>{c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>u.remove())}),a()}});let s;n("virtualUpdate",()=>{r.params.effect===e&&(r.slides.length||(s=!0),requestAnimationFrame(()=>{s&&r.slides&&r.slides.length&&(m(),s=!1)}))})}function Se(h,e){const r=J(e);return r!==e&&(r.style.backfaceVisibility="hidden",r.style["-webkit-backface-visibility"]="hidden"),r}function ye(h){let{swiper:e,duration:r,transformElements:n,allSlides:m}=h;const{activeIndex:o}=e,p=d=>d.parentElement?d.parentElement:e.slides.filter(t=>t.shadowRoot&&t.shadowRoot===d.parentNode)[0];if(e.params.virtualTranslate&&r!==0){let d=!1,a;m?a=n:a=n.filter(t=>{const s=t.classList.contains("swiper-slide-transform")?p(t):t;return e.getSlideIndex(s)===o}),a.forEach(t=>{re(t,()=>{if(d||!e||e.destroyed)return;d=!0,e.animating=!1;const s=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(s)})})}}function ke(h){let{swiper:e,extendParams:r,on:n}=h;r({fadeEffect:{crossFade:!1}}),xe({effect:"fade",swiper:e,on:n,setTranslate:()=>{const{slides:p}=e,d=e.params.fadeEffect;for(let a=0;a<p.length;a+=1){const t=e.slides[a];let c=-t.swiperSlideOffset;e.params.virtualTranslate||(c-=e.translate);let u=0;e.isHorizontal()||(u=c,c=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t.progress),0):1+Math.min(Math.max(t.progress,-1),0),x=Se(d,t);x.style.opacity=w,x.style.transform=`translate3d(${c}px, ${u}px, 0px)`}},setTransition:p=>{const d=e.slides.map(a=>J(a));d.forEach(a=>{a.style.transitionDuration=`${p}ms`}),ye({swiper:e,duration:p,transformElements:d,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const Ie={class:"swiper-container"},Te={class:"swiper-container gallery-top"},Pe=["src"],Ce={class:"swiper-container gallery-thumbs"},Ee=["src"],$e=V({__name:"IUswiper",props:{images:{}},setup(h){ae.use([ge,ke]);const e=h,r=k(null),n=k(null),m=p=>{r.value=p},o=p=>{n.value=p};return Q(()=>{r.value&&n.value&&(n.value.thumbs.swiper=r.value)}),(p,d)=>(f(),_("div",Ie,[i("div",Te,[S(z(W),{ref_key:"mainSwiper",ref:n,"slides-per-view":1,"space-between":10,effect:"fade","fade-effect":{crossFade:!0},thumbs:{swiper:r.value},onSwiper:o},{default:A(()=>[(f(!0),_(F,null,L(e.images,(a,t)=>(f(),M(z(K),{key:t},{default:A(()=>[i("div",{ref_for:!0,ref:"imageContainer",class:"image-container"},[i("img",{class:"swiper-image",src:a,alt:"product image"},null,8,Pe)],512)]),_:2},1024))),128))]),_:1},8,["thumbs"])]),i("div",Ce,[S(z(W),{ref_key:"thumbsSwiper",ref:r,"slides-per-view":4,"space-between":10,"watch-slides-progress":"","slide-to-clicked-slide":"",mousewheel:!0,onSwiper:m},{default:A(()=>[(f(!0),_(F,null,L(e.images,(a,t)=>(f(),M(z(K),{key:t},{default:A(()=>[i("img",{class:"swiper-thumbnail",src:a,alt:"product thumbnail"},null,8,Ee)]),_:2},1024))),128))]),_:1},512)])]))}}),Ae=q($e,[["__scopeId","data-v-b49cbaa5"]]),ze={class:"modal"},Re={class:"review-star"},Fe=i("label",{class:"review-text",for:"review-star-select"},"Rating",-1),Le=ne('<option value="1">1 - Poor</option><option value="2">2 - Fair</option><option value="3">3 - Good</option><option value="4">4 - Very Good</option><option value="5">5 - Excellent</option>',5),Me=[Le],Ve={class:"review-user"},Oe=i("label",{class:"review-text",for:"review-user-input"},"Name",-1),De={class:"review-message"},je=i("label",{class:"review-text",for:"review-message-text"},"Review",-1),Ue=V({__name:"ModalAddReview",emits:["submit-review"],setup(h,{emit:e}){const r=e,n=X(),m=k(n.params.id),o=k({stars:1,name:"",text:"",id:Date.now(),productID:m.value,posted:d(new Date)});console.log(o.value);const p=()=>{o.value.name&&o.value.text&&r("submit-review",{...o.value})};function d(a){const t={year:"numeric",month:"long",day:"numeric"};return`Posted on ${a.toLocaleDateString("en-US",t)}`}return(a,t)=>(f(),_("section",ze,[i("div",Re,[Fe,j(i("select",{id:"review-star-select","onUpdate:modelValue":t[0]||(t[0]=s=>o.value.stars=s),class:"review-star-select"},Me,512),[[oe,o.value.stars]])]),i("div",Ve,[Oe,j(i("input",{id:"review-user-input","onUpdate:modelValue":t[1]||(t[1]=s=>o.value.name=s),class:"review-user-input",type:"text",placeholder:"Enter your name"},null,512),[[Y,o.value.name]])]),i("div",De,[je,j(i("textarea",{id:"review-message-text","onUpdate:modelValue":t[2]||(t[2]=s=>o.value.text=s),class:"modal-textarea",rows:"4",placeholder:"Write your review here"},null,512),[[Y,o.value.text]])]),i("button",{class:"submit-button",onClick:p}," Submit Review ")]))}}),E=h=>(_e("data-v-cc8c9e58"),h=h(),be(),h),Be={class:"wrapper"},Ne={class:"product-info"},qe={class:"link-container"},Ge={class:"link-home"},He=E(()=>i("img",{class:"link-icon",src:Z},null,-1)),Ke={class:"link-product"},We=E(()=>i("img",{class:"link-icon",src:Z},null,-1)),Ye={class:"link-product"},Je={key:0,class:"product-info-container"},Qe={class:"product-info-container-info"},Xe={class:"product-info-container-info-type"},Ze={class:"product-info-container-info-title"},et={class:"product-info-container-info-review"},tt={class:"product-info-container-info-review-text"},st={class:"product-info-container-info-price"},it={key:0,class:"product-info-priceNew"},rt={key:1,class:"product-info-priceDiscountPrcent"},at={class:"product-info-container-info-text"},ot={class:"sizeAndbuttons"},nt={class:"product-info-container-info-size"},lt=E(()=>i("p",{class:"product-info-container-info-size-title"},"Size:",-1)),ct={class:"product-info-container-info-size-container"},dt={class:"product-info-container-info-buttons"},ut={key:0,class:"error-message"},pt={class:"product-info-review-container"},ft={class:"review-titleAndButton"},mt=E(()=>i("h3",{class:"review-title"},"All Reviews",-1)),vt={key:0,class:"review-grid"},ht={key:1,class:"review-grid-empty"},wt=E(()=>i("p",{class:"review-grid-empty-text"}," Looks like no one has reviewed this product. You could be the first! ",-1)),_t=[wt],bt={key:2,class:"addReview-container"},gt={class:"recommended-container"},xt=!0,St=`
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
  `,yt=`
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
  `,kt=`
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
`,It=`
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
`,Tt=V({__name:"ProductInfo",setup(h){const e=le(),r=ce(),n=X(),m=k(n.params.id),o=k(""),p=k(""),d=k(""),a=k(!1),t=R(()=>e.products.find(l=>l.id.toString()===m.value)),s=de(),c=R(()=>s.reviews.filter(l=>{var g;return l.productID===((g=t.value)==null?void 0:g.id)})),u=k(c.value),w=()=>{n.query.size&&(o.value=n.query.size)};console.log(u.value,"jh");const x=l=>{p.value=l};Q(()=>{e.fetchProducts(),w()}),U(()=>n.query.size,l=>{l&&(o.value=l)}),U(()=>n.params.id,l=>{m.value=l,e.fetchProducts()});const T=R(()=>{const l=localStorage.getItem("previousRoute");if(l){const g=l.charAt(0).toUpperCase(),$=l.slice(1).toLowerCase();return g+$}return null}),b=()=>{const l=e.products.find(g=>g.id.toString()===m.value);l&&o.value?r.addProductToCart(l,o.value):d.value="Choose size"},v=R(()=>r.productsInCart.find(l=>l.id.toString()===m.value&&l.size===o.value)),C=l=>{r.deleteProductById(l,o.value)},O=()=>{v.value?C(Number(m.value)):b()};function D(l){s.addReview(l),a.value=!1}return U(o,l=>{l&&x(l)}),(l,g)=>{var $,G,H;return f(),_("div",Be,[i("section",Ne,[S(B),i("div",qe,[i("p",Ge,y(T.value),1),He,i("p",Ke,y(($=t.value)==null?void 0:$.style),1),We,i("p",Ye,y((G=t.value)==null?void 0:G.type),1)]),t.value?(f(),_("div",Je,[S(Ae,{images:t.value.images},null,8,["images"]),i("div",Qe,[i("div",Xe,[i("h1",Ze,y(t.value.name),1),i("div",et,[(f(!0),_(F,null,L(Number(t.value.rating.toString()[0]),(I,ee)=>(f(),_("img",{key:ee,class:"product-info-container-info-review-icon",src:ve}))),128)),i("p",tt,y(t.value.rating.toString()[0])+"/5 ",1)]),i("div",st,[t.value.discount>0?(f(),_("p",it,y(t.value.discountPrice),1)):P("",!0),i("p",{class:ue(t.value.discount>0?"product-info-priceDiscount":"product-info-priceNew")},y(t.value.price),3),t.value.discount>0?(f(),_("div",rt,y(t.value.discount)+"% ",1)):P("",!0)]),i("p",at,y(t.value.description),1)]),i("div",ot,[S(B),i("div",nt,[lt,i("div",ct,[S(pe,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=I=>o.value=I),"is-product-info":xt,sizes:(H=t.value)==null?void 0:H.large,onSelectSize:g[1]||(g[1]=I=>x(o.value))},null,8,["modelValue","sizes"])])]),S(B),i("div",dt,[S(N,{title:v.value?"Remove from Cart":"Add to Cart","is-white":!1,style:fe(v.value?yt:St),onClick:O},null,8,["title","style"]),d.value?(f(),_("p",ut,y(d.value),1)):P("",!0)])])])])):P("",!0),i("div",pt,[i("div",ft,[mt,S(N,{title:"Write a Review","is-white":!1,style:kt,onClick:g[2]||(g[2]=I=>a.value=!0)})]),u.value.length>0?(f(),_("div",vt,[(f(!0),_(F,null,L(u.value,I=>(f(),M(we,he({key:I.id,ref_for:!0},I),null,16))),128)),a.value?(f(),M(Ue,{key:0,onClose:g[3]||(g[3]=I=>a.value=!1),onSubmitReview:D})):P("",!0)])):(f(),_("div",ht,_t)),u.value.length>6?(f(),_("div",bt,[S(N,{title:"Load More Reviews","is-white":!0,style:It})])):P("",!0)]),i("div",gt,[S(me,{title:"YOU MIGHT ALSO LIKE"})])])])}}}),Pt=q(Tt,[["__scopeId","data-v-cc8c9e58"]]),Ct={class:"container"},Et=V({__name:"ProductInfoPage",setup(h){return(e,r)=>(f(),_("div",Ct,[S(Pt)]))}}),At=q(Et,[["__scopeId","data-v-98cc6679"]]);export{At as default};