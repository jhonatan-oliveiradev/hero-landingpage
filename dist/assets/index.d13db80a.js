import{s as t,j as p,F as f,r as h,a as g,b as x,W as u,R as m,c as y}from"./vendor.5694987f.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};b();const w=t.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`,v=t.header`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  animation: showHeader 1s linear forwards;

  @keyframes showHeader {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;var k="/assets/logo-hero.8a19dcc5.svg";const e=p.exports.jsx,r=p.exports.jsxs,C=()=>e("div",{children:e("img",{src:k,alt:"Logo Hero Header"})}),H=t.ul`
  margin-left: auto;
`,c=t.li`
  display: inline-block;
  margin-right: 25px;
  font-weight: 500;

  a {
    color: #1e255e;
    transition: color 0.2s ease;
  }

  &:hover {
    a {
      color: #17a4d0;
    }
`,j=()=>r(H,{children:[e(c,{children:e("a",{href:"#",children:"Home"})}),e(c,{children:e("a",{href:"#",children:"About"})}),e(c,{children:e("a",{href:"#",children:"How it works"})}),e(c,{children:e("a",{href:"#",children:"Services"})}),e(c,{children:e("a",{href:"#",children:"Contact"})})]}),z=t.button`
  width: 130px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #17a4d0;
  color: #17a4d0;
  background-color: transparent;
  fonts-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  box-shadow: 0px 2px 4px transparent;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #17a4d0;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`,A=()=>e(z,{children:"Enquiry"}),$=()=>r(v,{children:[e(C,{}),e(j,{}),e(A,{})]}),L=({children:s})=>r(w,{children:[e($,{}),e("main",{children:s})]}),F=t.button`
  background-color: #17a4d0;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  margin-top: 50px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #f8fdff;
    color: #17a4d0;
    border: 1px solid #17a4d0;
  }
`,S=()=>e(F,{children:"Contact Us"}),P=t.div`
  width: 50%;

  h1 {
    position: relative;
    color: #1e255e;
    font-size: 56px;
    font-weight: bold;
    opacity: 0;
    left: -50px;
    animation: showH1 .5s linear forwards;
  }

  h6 {
    position: relative;
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;
    right: -100px;
    opacity: 0;
    animation: showH6 .5s linear forwards;
  }

  @keyframes showH1{
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes showH6{
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      right: 0;
    }
  }
`,E=()=>r(P,{children:[e("h1",{children:"Design driven development of your web product"}),e("h6",{children:"We are a full service digital agency that builds immersive user experience."}),e(S,{})]}),M=t.div`
  position: relative;
  top: 185px;
  left: -60px;
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;
  opacity: 0;
  animation: showActivity .5s linear forwards;

  small {
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 25px;
    font-weight: 300;
    margin-right: 5px;
  }

  i {
    width: 154px;
    height: 77px;
    position: absolute;
    border-radius: 50px;

    &.circle1 {
      left: 90px;
      top: -20px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
    }

    &.circle2 {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1)
      );
      left: 80px;
      bottom: -50px;
      transform: rotate(45deg);
    }

    &.circle3 {
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: rotate(-72deg);
      top: -50px;
      left: 45px;
    }
  }

  @keyframes showActivity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      left: 0;
  }
`,B=()=>r(M,{children:[e("small",{children:"Activity"}),r("div",{children:[e("span",{children:"18"}),e(f,{size:22,color:"#fff"})]}),e("i",{className:"circle1"}),e("i",{className:"circle2"}),e("i",{className:"circle3"})]}),I=t.div`
  position: absolute;
  top: 415px;
  bottom: -40px;
  left: -30px;
  width: 210px;
  height: 210px;
  padding: 20px;
  border-radius: 18px;
  background-color: #ffffff;
  box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: showOnPage 0.5s linear forwards;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
  }

  @keyframes showOnPage {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;function O(){const s=[...Array(12).keys()];let n=[];return s.forEach(a=>{n.push(`
            div:nth-child(${a+1}) {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;


                  div{
                      background-color: #eff3fe;
                      height: 91px;
                      width: 2.1px;
                      border-radius: 5px;
                      display: flex;
                      justify-content: flex-end;

                  span {
                      background-color: #5236ff;
                      display: block;
                      height: 0px;
                      max-height: ${Math.ceil(Math.random()*100)}px;
                      width: 3.5px;
                      border-radius: 5px;
                      animation: animationHeight 1s linear forwards;
                    }
                  }

                  small{
                      font-size: 10px;
                      color: #baccfd;
                      font-weight: 200;
                      margin-top: 10px;
                  }
        }
        `)}),n.join("")}const N=t.div`
  margin-top: 28px;

  ${O()}

  @keyframes animationHeight {
    from {
      height: 0px;
    }

    to {
      height: 91px;
    }
  }
`,R=()=>{const s=Array.from(Array(12).keys()),n=h.exports.useCallback(a=>(a+1).toString().padStart(2,"0"),[]);return r(I,{children:[r("div",{children:[e(g,{}),e("strong",{children:"Stats"}),e(x,{})]}),e(N,{children:s.map(a=>r("div",{children:[e("div",{children:e("span",{})}),e("small",{children:n(a+1)})]},String(a)))})]})};var D="/assets/hero-header-image.995902fd.png";const W=t.div`
  text-align: right;
  position: relative;
  top: -72px;
  width: 50%;

  img {
    position: relative;
    right: -100px;
    opacity: 0;
    z-index: -1;
    animation: showImage .5s linear forwards;
  }

  @keyframes showImage {
    from {
      opacity: 0;
      right: -100px;
    }

    to {
      opacity: 1;
      right: 0;
    }
  }
`,q=()=>r(W,{children:[e(B,{}),e(R,{}),e("img",{src:D,alt:"a woman searching something"})]}),U=t.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;
  }
`;t.div`
  text-align: right;
`;function G(){return e(L,{children:r(U,{children:[e(E,{}),e(q,{})]})})}var K="/assets/Ellipse1.dae542ab.png",Z="/assets/Ellipse2.aae85483.png";const J=u`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: url(${Z}) no-repeat 1350px, 
                    url(${K}) no-repeat 1250px;
        background-size: cover;
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;m.render(r(y.StrictMode,{children:[e(G,{}),e(J,{})]}),document.getElementById("root"));
