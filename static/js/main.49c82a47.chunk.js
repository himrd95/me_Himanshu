(this["webpackJsonpi-am-himanshu"]=this["webpackJsonpi-am-himanshu"]||[]).push([[0],[,,,function(e,t,a){e.exports={intro:"Home_intro__rAuyi",extraIntro:"Home_extraIntro__1-0ws",name:"Home_name__37hOo",profile:"Home_profile__1zAuq",profileImage:"Home_profileImage__2rcJ-",btn:"Home_btn__2QC0J",projects:"Home_projects__1IxP4",heading:"Home_heading__8VVUY",borderBottom:"Home_borderBottom__1P0_S",line:"Home_line__hljUX",resumeBtn:"Home_resumeBtn__3Mwxc"}},function(e,t,a){e.exports={techStacks:"TechStacks_techStacks__GM5cL",container:"TechStacks_container__2yV3y",logoWrapper:"TechStacks_logoWrapper__3Rwgd",shake:"TechStacks_shake__1pJSK",heading:"TechStacks_heading__1vGV2",borderBottom:"TechStacks_borderBottom__3xqHp"}},function(e,t,a){e.exports={icons:"SideIcons_icons__SFncc",iconsRihgt:"SideIcons_iconsRihgt__9syvl",line:"SideIcons_line__TcKZl",rightEmail:"SideIcons_rightEmail__fxkNz",container:"SideIcons_container__a5hcO"}},function(e,t,a){e.exports={card:"Card_card__1X8EW",card__Container:"Card_card__Container__2KaRs",image:"Card_image__3RDbH",colorDiv:"Card_colorDiv__XNeJR",description:"Card_description__xlBau",titleContainer:"Card_titleContainer__3yofO",description_container:"Card_description_container__r8jPF"}},function(e,t,a){e.exports={container:"About_container__19lq0",first:"About_first__2zHB_",second:"About_second__4r-Bc",heading:"About_heading__23zR6",borderBottom:"About_borderBottom__3EdvT",aboutMe:"About_aboutMe__p34u1"}},function(e,t,a){e.exports={navContainer:"Navbar_navContainer__nXA7m",logo:"Navbar_logo__3UAMb",navbar:"Navbar_navbar__2o2NX",links:"Navbar_links__PO8SZ",modeButton:"Navbar_modeButton__1WKQi",bars:"Navbar_bars__hVHwc"}},function(e,t,a){e.exports={footer:"Contact_footer__-KYno",container:"Contact_container__3BMT3",paragraph:"Contact_paragraph__2RHBd",contactOptions:"Contact_contactOptions__3Rk-P",shake:"Contact_shake__IyJIo"}},,,,,function(e,t,a){e.exports={buttonComponent:"Button_buttonComponent__2OgUF"}},,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),s=a(11),n=a.n(s),i=(a(20),a(2)),r=(a(21),a(15)),l=a(3),d=a.n(l),h={dark:{background:"#091425",title:"#CCD6F6",para:"#8993b1",heading:"#CCD6F6",line:"#24243a",imgBackground:"#0E0914",highlightBackground:"#081220",sideIcons:"#8892b0",menuBackground:"#093047",card:"#112240"},light:{background:"#FFF9ED",title:"#233742",para:"#233742",heading:"#233742",line:"lightgray",imgBackground:"#FFF5DE",highlightBackground:"#FFF6E3",sideIcons:"#766161",menuBackground:"#fff2c8",card:"#ebc5b5"}},b=a(0),j=JSON.parse(localStorage.getItem("theme")||"dark"),m=Object(c.createContext)(),u=function(e){var t=e.children,a=o.a.useState(j),s=Object(i.a)(a,2),n=s[0],r=s[1],l=o.a.useState(!0),d=Object(i.a)(l,2),u=d[0],g=d[1];Object(c.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(n))}),[n]);var p={mode:n,newTheme:h[n],handleMode:function(){r("dark"===n?"light":"dark")},open:u,handleMenu:function(){g(!u)}};return Object(b.jsx)(m.Provider,{value:p,children:t})};var g=function(){var e=Object(c.useState)([0,0]),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(c.useLayoutEffect)((function(){function e(){o([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},p=a(6),x=a.n(p),f=function(e){var t=o.a.useContext(m).newTheme,a=e.img,c=e.des,s=e.title,n=e.live,r=e.gitHub,l=e.technologies,d=g(),h=Object(i.a)(d,1)[0];return Object(b.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"400","data-aos-easing":"ease-in-sine","data-aos-duration":"800",className:x.a.card,style:{boxShadow:"3px 3px 5px ".concat(t.line)},children:[Object(b.jsxs)("div",{className:x.a.image,children:[Object(b.jsx)("img",{src:a,alt:""}),Object(b.jsx)("div",{className:x.a.colorDiv})]}),Object(b.jsxs)("div",{className:x.a.card__Container,children:[Object(b.jsxs)("div",{className:x.a.titleContainer,style:h<=1e3?{background:"".concat(t.card)}:{background:"none"},children:[Object(b.jsx)("h2",{style:{color:"".concat(t.title)},children:s}),Object(b.jsx)("p",{style:{color:"".concat(t.para)},children:c}),Object(b.jsx)("div",{children:l.map((function(e,a){return Object(b.jsx)("span",{style:{marginLeft:"20px",color:"".concat(t.title)},children:e},a)}))})]}),Object(b.jsxs)("div",{className:x.a.description,children:[Object(b.jsx)("a",{href:r,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:n,rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt"})})]})]})]})},O=a(12),_=a.n(O),v=a(5),w=a.n(v),k=function(){var e=o.a.useContext(m).newTheme;return Object(b.jsxs)("div",{className:w.a.container,children:[Object(b.jsxs)("div",{className:w.a.icons,style:{left:0,color:"".concat(e.sideIcons)},children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/himrd95","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-github",children:[Object(b.jsx)("title",{children:"GitHub"}),Object(b.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/mr_artist_hrd/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-instagram",children:[Object(b.jsx)("title",{children:"Instagram"}),Object(b.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),Object(b.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(b.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/himansh03285202","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-twitter",children:[Object(b.jsx)("title",{children:"Twitter"}),Object(b.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/himanshu-dwivedi-861205112/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-linkedin",children:[Object(b.jsx)("title",{children:"LinkedIn"}),Object(b.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(b.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(b.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})})}),Object(b.jsx)("li",{className:w.a.line})]}),Object(b.jsx)("div",{className:w.a.icons,style:{right:0,color:"".concat(e.sideIcons)},children:Object(b.jsxs)("div",{className:w.a.rightEmail,children:[Object(b.jsx)("a",{className:w.a.email,href:"mailto: himrd95@gmail.com","aria-label":"Email",target:"_blank",rel:"noreferrer",children:"himrd95@gmail.com"}),Object(b.jsx)("li",{className:w.a.line})]})})]})},y=a(4),N=a.n(y),C=function(){var e=Object(c.useContext)(m).newTheme;return Object(b.jsxs)("div",{id:"techStacks","data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",className:N.a.techStacks,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:N.a.heading,children:"Proficiencies"}),Object(b.jsx)("div",{className:N.a.borderBottom}),Object(b.jsxs)("div",{className:N.a.container,children:[Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-html5-plain colored"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"HTML"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-css3-plain colored"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"CSS"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-javascript-plain colored"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"Javascript"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-react-original colored"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"React"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#7248B6"},className:"devicon-redux-original"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"Redux"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{style:{color:"#509941"},className:"devicon-nodejs-plain"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"Node"})]}),Object(b.jsxs)("div",{style:{color:"".concat(e.title)},className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-express-original"}),Object(b.jsx)("p",{children:"Express"})]}),Object(b.jsxs)("div",{className:N.a.logoWrapper,children:[Object(b.jsx)("i",{className:"devicon-mongodb-plain colored"}),Object(b.jsx)("p",{style:{color:"".concat(e.title)},children:"MongoDB"})]})]})]})},S=a(13),B=a.n(S),H=(a(24),a(14)),M=a.n(H),T=function(e){var t=e.text,a=e.handleButton;return Object(b.jsx)("button",{className:M.a.buttonComponent,onClick:function(){return a()},children:Object(b.jsx)("span",{children:t})})},I=a(7),F=a.n(I),L=function(){var e=o.a.useContext(m).newTheme,t=g(),a=Object(i.a)(t,1)[0]<650?"https://github.com/himrd95/portfolio/blob/main/src/assets/profile.png?raw=true":"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true";return Object(b.jsxs)("div",{"data-aos":"fade-down","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",className:F.a.container,style:{boxShadow:"3px 3px 5px ".concat(e.line)},children:[Object(b.jsx)("div",{className:F.a.first,children:Object(b.jsx)("img",{src:a,alt:""})}),Object(b.jsxs)("div",{className:F.a.second,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},className:F.a.heading,children:"About Me"}),Object(b.jsx)("div",{className:F.a.borderBottom}),Object(b.jsxs)("p",{style:{color:"".concat(e.para)},className:F.a.aboutMe,children:["Hello! My name is Himanshu and I enjoy creating things that live on the internet. My interest in web development started back in last year when I was tryng to edit things on web \u2014 taught me a lot about HTML & CSS!. ",Object(b.jsx)("br",{})," Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am",Object(b.jsxs)("span",{style:{color:"#00a0a0"},children:[" ","looking for an opportunity as a full stack web developer"]}),"."]})]})]})},R=[{img:"https://github.com/himrd95/portfolio/blob/main/public/ProjectImages/masai_refresh.png?raw=true",title:"Masai Refresh",des:"A Quiz App that tests your knowledge based on your preferred stack topic, and analyse results. A comprehensive report is presented at the end of each quiz.",demo:"",live:"https://refresh.masai.tech/quiz_topics",gitHub:"https://github.com/masai-oss/Masai_Refresh.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://github.com/arshadalitalwar/bookmyshow/blob/main/bookmyshow-app/public/website_images/home_page.JPG?raw=true",title:"Clone of BookMyShow",des:"BookMyShow website is basically for entertainment purpose, In this app, a user can book movie tickets by choosing the different theatres and timings accordingly. The user also can see some events happening around them and can attend the events.",demo:"",live:"https://bookmyshow-clone-masaischool.netlify.app/",gitHub:"https://github.com/arshadalitalwar/bookmyshow.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://github.com/himrd95/todo/blob/main/public/dashboard.png?raw=true",title:"Todo App",des:"A ToDo application made using React, Redux and a few libraries, wherein the user can add a new task, change the status, edit it, edit sub-task and delete it.",demo:"",live:"https://him-todo.netlify.app/",gitHub:"https://github.com/himrd95/todo.git",technologies:["React","Redux","HTML","CSS","javaScript"]},{img:"https://user-images.githubusercontent.com/73213873/107113597-f547e200-6885-11eb-8abd-72106074907a.png",title:"Clone of Medium",des:"Clone of a blogging web application, Medium where a user can read the blogs written by others and show their response also, one can share their thoughts by posting a blog.",demo:"",live:"https://medium-web.netlify.app/",gitHub:"https://github.com/himrd95/Medium-Clone.git",technologies:["React","HTML","CSS","javaScript"]},{img:"https://camo.githubusercontent.com/b7f4aa8c34ddf776dd19b78dc3488456470a73e5026f48784e9e753601468802/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c62507030307771454537386c6f68584d372f67697068792e676966",title:"Clone of Fitness Blender",des:"This is a clone of the Fitness Blender website. The clone is complete with a Login page, Sign-in page, Shopping Cart, Wishlist and Calendar Scheduling feature. Following is the link to the clone of the website.",demo:"",live:"https://anshusagar.github.io/FitnessBlender/",gitHub:"https://github.com/Anshusagar/FitnessBlender.git",technologies:["HTML","CSS","javaScript"]},{img:"https://github.com/mandarsatam/Mailchimp-Clone/blob/master/Snips/Screenshot%20(79).png?raw=true",title:"Mailchimp Clone",des:"This is a static clone of a website called Mailchimp. This clone includes landing, pricing, our story, and resources page.",demo:"",live:"https://mandarsatam.github.io/Mailchimp-Clone/",gitHub:"https://github.com/mandarsatam/Mailchimp-Clone",technologies:["HTML","CSS","javaScript"]}],A=a(9),E=a.n(A),W=function(){var e=o.a.useContext(m).newTheme;return Object(b.jsx)("footer",{className:E.a.footer,style:{background:"".concat(e.highlightBackground)},children:Object(b.jsxs)("div",{className:E.a.container,children:[Object(b.jsx)("h1",{style:{color:"".concat(e.title)},children:"Get in Touch"}),Object(b.jsx)("p",{style:{color:"".concat(e.para)},className:E.a.paragraph,children:"I'm currently actively looking for any new opportunities, in full-stack web development. If you are an employer looking for dedicated web developer, HIRE me before someone else does."}),Object(b.jsxs)("div",{style:{color:"".concat(e.title)},className:E.a.contactOptions,children:[Object(b.jsx)("a",{href:"tel:9454538373","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-phone-alt"})}),Object(b.jsx)("a",{href:"mailto: himrd95@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"far fa-envelope"})}),Object(b.jsx)("a",{href:"https://wa.me/+919454538373?text=Hi%20please%20drop%20your%20message%20here.","aria-label":"wahtsapp",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-whatsapp"})}),Object(b.jsx)("a",{href:"https://github.com/himrd95","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/himanshu-dwivedi-861205112/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})})},P=function(e){var t=e.scrollRef,a=Object(c.useState)(R.slice(0,3)),s=Object(i.a)(a,2),n=s[0],l=s[1],h=o.a.useContext(m).newTheme;Object(c.useEffect)((function(){B.a.init()})),Object(c.useEffect)((function(){document.body.style.backgroundColor=h.background}),[h]);return Object(b.jsxs)("div",{ref:t,children:[Object(b.jsx)(k,{}),Object(b.jsxs)("div",{id:"top",className:d.a.profile,style:{backgroundColor:"".concat(h.imgBackground)},children:[Object(b.jsx)("img",{className:d.a.profileImage,src:"https://github.com/himrd95/portfolio/blob/main/src/assets/profile.png?raw=true",alt:"Profile pic"}),Object(b.jsxs)("div",{id:"home","data-aos":"fade-zoom-out",className:d.a.intro,style:{color:"".concat(h.para)},children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"Hi, My name is"})," ",Object(b.jsx)("span",{className:d.a.name,style:{color:"".concat(h.title)},children:"Himanshu Dwivedi."})]}),Object(b.jsx)("h1",{children:Object(b.jsx)(_.a,{options:{strings:["I am a Full Stack Developer.","I build things for web."],autoStart:!0,loop:!0,delay:"natural",deleteSpeed:25,pauseFor:1e3}})}),Object(b.jsx)("div",{className:d.a.btn,children:Object(b.jsx)("a",{href:"https://doc-00-7o-docs.googleusercontent.com/docs/securesc/rseo9t0t4ofriqtkmn0gltkeatg74ano/vboju6jnm9nmshd3o0arl9d3guj1t0nn/1628658075000/12828743192551370486/12828743192551370486/1ZSZbDSOKZga0ULLGw-blL5qETIWUJ1ua?e=download&authuser=0&nonce=8re814ivsb1i0&user=12828743192551370486&hash=0tk6q1rv5sch3ks9mbj5ttjj3a9q4iqh",download:!0,children:Object(b.jsx)(T,{text:Object(b.jsxs)("span",{className:d.a.resumeBtn,children:[Object(b.jsx)("span",{children:"Resume"})," ",Object(b.jsx)("i",{className:"fas fa-file-download"})]}),handleButton:function(){}})})})]})]}),Object(b.jsx)(C,{}),Object(b.jsx)("div",{id:"about",style:{background:"".concat(h.line)},className:d.a.line}),Object(b.jsx)(L,{}),Object(b.jsx)("div",{id:"projects",style:{background:"".concat(h.line)},className:d.a.line}),Object(b.jsxs)("div",{className:d.a.projects,children:[Object(b.jsx)("h1",{style:{color:"".concat(h.title)},className:d.a.heading,children:"Few Things I've Build"}),Object(b.jsx)("div",{className:d.a.borderBottom})]}),Object(b.jsx)("div",{children:n.map((function(e,t){return Object(b.jsx)(f,Object(r.a)({},e),t)}))}),Object(b.jsx)(T,{text:R.length!==n.length?"Show More":"Show Less",handleButton:function(){R.length===n.length?l(R.slice(0,3)):l(R)}}),Object(b.jsx)("div",{style:{background:"".concat(h.line)},className:d.a.line}),Object(b.jsx)("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",className:d.a.extraIntro,style:{color:"".concat(h.para)},children:'"Himanshu is not only great for development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended."'}),Object(b.jsx)(W,{})]})},z=a(8),D=a.n(z),J={bar1:{position:"absolute",width:"15px",transform:"rotate(45deg)"},bar2:{position:"absolute",left:"-2px"},bar3:{position:"absolute",width:"15px",transform:"rotate(-45deg)"}},q=function(){var e=Object(c.useState)(window.pageYOffset),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(c.useRef)(),n=Object(c.useContext)(m),r=n.newTheme,l=n.mode,d=n.handleMode,h=n.open,j=n.handleMenu;return window.onscroll=function(){var e=window.pageYOffset;s.current.style.top=a>e?"0":"-80px",o(e)},Object(b.jsx)("nav",{ref:s,className:D.a.navContainer,style:{background:"".concat(r.background),boxShadow:"3px 3px 10px ".concat(r.line)},children:Object(b.jsxs)("div",{className:D.a.navbar,children:[Object(b.jsx)("div",{className:D.a.logo,children:Object(b.jsx)("img",{src:"https://github.com/himrd95/portfolio/blob/main/src/assets/logo_new.png?raw=true",alt:"Logo"})}),Object(b.jsxs)("div",{style:{color:"".concat(r.title)},className:D.a.links,children:[Object(b.jsx)("a",{href:"#home",children:"Home"}),Object(b.jsx)("a",{href:"#about",children:"About"}),Object(b.jsx)("a",{href:"#techStacks",children:"Profeciencies"}),Object(b.jsx)("a",{href:"#projects",children:"Projects"}),Object(b.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(b.jsx)("button",{style:{color:"".concat(r.title)},className:D.a.modeButton,onClick:d,children:"light"===l?Object(b.jsx)("i",{className:"fas fa-moon"}):Object(b.jsx)("i",{className:"fas fa-sun"})}),Object(b.jsxs)("div",{onClick:j,className:D.a.bars,children:[Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar1}),Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar2}),Object(b.jsx)("div",{style:h?{background:"".concat(r.title)}:J.bar3})]})]})})};var G=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=o.a.useContext(m),r=n.newTheme,l=n.open,d=n.handleMenu,h=Object(c.useRef)();return Object(c.useEffect)((function(){setTimeout((function(){s(!0)}),2e3)}),[]),Object(b.jsx)(o.a.Fragment,{children:a?Object(b.jsxs)("div",{className:"components",children:[Object(b.jsxs)("div",{style:{color:"".concat(r.title),left:"".concat(l?"-100vw":"0")},className:"links",children:[Object(b.jsx)("a",{onClick:d,href:"#home",children:"Home"}),Object(b.jsx)("a",{onClick:d,href:"#about",children:"About"}),Object(b.jsx)("a",{onClick:d,href:"#techStacks",children:"Profeciencies"}),Object(b.jsx)("a",{onClick:d,href:"#projects",children:"Projects"}),Object(b.jsx)("a",{onClick:d,href:"#contact",children:"Contact"})]}),Object(b.jsx)(q,{}),Object(b.jsx)(P,{scrollRef:h})]}):Object(b.jsx)("div",{style:{background:"".concat(r.background)},className:"logoStart",children:Object(b.jsx)("img",{src:"https://github.com/himrd95/portfolio/blob/main/src/assets/logo_new.png?raw=true",alt:"logo"})})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),o(e),s(e),n(e)}))};n.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(u,{children:Object(b.jsx)(G,{})})}),document.getElementById("root")),K()}],[[25,1,2]]]);
//# sourceMappingURL=main.49c82a47.chunk.js.map