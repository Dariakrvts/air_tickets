(function(){"use strict";var e={107:function(e,a,l){var t=l(963),o=l(252);const n={id:"app"};function i(e,a,l,t,i,r){const s=(0,o.up)("router-view"),u=(0,o.up)("app-navigation");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(s),(0,o.Wm)(u)])}var r=l(577);const s={class:"bottom-navbar",style:{height:"60px"}};function u(e,a,l,t,n,i){const u=(0,o.up)("va-tab"),m=(0,o.up)("va-tabs");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(m,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),grow:"","hide-slider":""},{tabs:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tabs,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.icon,color:"info",to:e.path},{default:(0,o.w5)((()=>[(0,o._)("i",{class:(0,r.C_)(e.icon)},null,2)])),_:2},1032,["to"])))),128))])),_:1},8,["modelValue"])])}var m={data(){return{value:0,tabs:[{icon:"fas fa-plane icon_nav",path:"/"},{icon:"fas fa-user icon_nav",path:"/account"}]}},name:"AppNavigation"},d=l(744);const c=(0,d.Z)(m,[["render",u]]);var v=c,h={components:{AppNavigation:v},data(){return{}},name:"App"};const p=(0,d.Z)(h,[["render",i]]);var f=p,g=l(52),w=(l(917),l(201));const _={class:"AppNavigationHome"},b={class:"main__container md12"},V={class:"main__navigation md12"},y={class:"path"},D={key:0,class:"main__waybillFrom"},k={class:"btm-revers"},T={key:1,class:"main__waybillTo"},F={class:"btn__info"},C={class:"row justify-space-between"},x={class:"date flex flex-col xs12"},W={class:"date flex flex-col xs12"},U={class:"price"},P={class:"scan sm12"},q={key:0,class:"tabel__tickets"},N={class:"va-table va-table--striped va-table--clickable"},A=(0,o._)("th",null,"Звідки",-1),L={key:0},O=(0,o._)("th",null,"Ціна",-1),S=(0,o._)("th",null,"Дата",-1),j={key:0},R={class:"error"},z={key:0,class:"error"},I={key:1,class:"error"};function Z(e,a,l,n,i,s){const u=(0,o.up)("va-button"),m=(0,o.up)("va-select"),d=(0,o.up)("va-date-input");return(0,o.wg)(),(0,o.iD)("main",_,[(0,o._)("div",b,[(0,o._)("div",V,[(0,o.Wm)(u,{class:"btn-way md9",onChange:s.handleFlightTypeChange,onClick:a[0]||(a[0]=(0,t.iM)((e=>s.handleClickshowFrom()),["stop"]))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Туди й назад ")])),_:1},8,["onChange"]),(0,o.Wm)(u,{class:"btn-way md9",onChange:s.handleFlightTypeChange,onClick:a[1]||(a[1]=(0,t.iM)((e=>s.handleClickshowTo()),["stop"]))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Односторонній ")])),_:1},8,["onChange"])]),(0,o._)("div",y,[i.waybillFrom?((0,o.wg)(),(0,o.iD)("div",D,[(0,o._)("div",null,[(0,o.Wm)(m,{modelValue:i.valueFrom,"onUpdate:modelValue":a[2]||(a[2]=e=>i.valueFrom=e),label:"",options:i.optionsFrom,searchable:"","highlight-matched-text":""},null,8,["modelValue","options"])])])):(0,o.kq)("",!0),(0,o.wy)((0,o._)("div",k,[(0,o.Wm)(u,{round:"",icon:"cached",onClick:a[3]||(a[3]=e=>s.reverseSelection())})],512),[[t.F8,i.showTo]]),i.waybillTo?((0,o.wg)(),(0,o.iD)("div",T,[(0,o._)("div",null,[(0,o.Wm)(m,{modelValue:i.valueTo,"onUpdate:modelValue":a[4]||(a[4]=e=>i.valueTo=e),label:"",options:i.optionsTo,searchable:"","highlight-matched-text":""},null,8,["modelValue","options"])])])):(0,o.kq)("",!0)]),(0,o._)("div",F,[(0,o._)("div",C,[(0,o._)("div",x,[i.showFromDate?((0,o.wg)(),(0,o.j4)(d,{key:0,class:"date__input",label:"Дата отправления",modelValue:i.valueDateFrom,"onUpdate:modelValue":a[5]||(a[5]=e=>i.valueDateFrom=e),stateful:"",clearable:"","min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","min-date","max-date"])):(0,o.kq)("",!0)]),(0,o._)("div",W,[i.showToDate?((0,o.wg)(),(0,o.j4)(d,{key:0,class:"date__input",label:"Дата прибытия",modelValue:i.valueDateTo,"onUpdate:modelValue":a[6]||(a[6]=e=>i.valueDateTo=e),stateful:"",clearable:"","min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","min-date","max-date"])):(0,o.kq)("",!0)])]),(0,o._)("div",U,[(0,o.Wm)(m,{modelValue:i.valueSingle,"onUpdate:modelValue":a[7]||(a[7]=e=>i.valueSingle=e),class:"sm12",label:"кількість осіб",options:i.options},null,8,["modelValue","options"])]),(0,o._)("div",P,[(0,o.Wm)(u,{size:"medium",class:"px-6",onClick:s.searchFlights},{default:(0,o.w5)((()=>[(0,o.Uk)("Пошук рейсов")])),_:1},8,["onClick"])]),i.flightsVisible?((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("table",N,[(0,o._)("thead",null,[(0,o._)("tr",null,[A,i.showToColumn?((0,o.wg)(),(0,o.iD)("th",L,"Куди")):(0,o.kq)("",!0),O,S])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.flights,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.from,class:"tr"},[(0,o._)("td",null,(0,r.zw)(e.from),1),i.showToColumn?((0,o.wg)(),(0,o.iD)("td",j,(0,r.zw)(e.to),1)):(0,o.kq)("",!0),(0,o._)("td",null,(0,r.zw)(e.price),1),(0,o._)("td",null,(0,r.zw)(e.departure),1)])))),128))]),(0,o._)("div",R,[0===i.valueFrom.length||0===i.valueTo.length?((0,o.wg)(),(0,o.iD)("div",z)):((0,o.wg)(),(0,o.iD)("div",I))])])):(0,o.kq)("",!0)])])])}var B=JSON.parse('[{"from":"City A","to":"City B","departure":"2023-06-01","arrival":"2023-06-02","price":200,"type":"two-way"},{"from":"City C","to":"City D","departure":"2023-06-03","arrival":"2023-06-04","price":250,"type":"two-way"},{"from":"City F","to":"City K","departure":"2023-06-03","arrival":"2023-06-04","price":300,"type":"two-way"},{"from":"City B","to":"City A","departure":"2023-06-20","arrival":"2023-06-25","price":240,"type":"two-way"}]'),H={data(){return{valueSingle:"Один",selectedRow:null,optionsFrom:B.map((e=>e.from)),optionsTo:B.map((e=>e.to)),flightsData:[],waybillFrom:!0,waybillTo:!0,flightsVisible:!0,valueFrom:[],valueTo:[],valueDateFrom:null,valueDateTo:null,showFromDate:!0,showToDate:!0,showTo:!0,options:["Одна","Дві","Три","Чотири","П'ять","Шість"],flights:[],showToColumn:!0}},mounted(){this.flights=B},methods:{handleClickshowTo(){this.showToDate=!1,this.showToColumn=!0,this.valueFrom=[],this.valueTo=[],this.valueDateTo=null,this.valueDateFrom=null},handleClickshowFrom(){this.showToDate=!0,this.showToColumn=!0,this.valueDateTo=null},handleFlightTypeChange(){this.selectedFrom="",this.selectedTo="",this.selectedDate=null},reverseSelection(){[this.valueFrom,this.valueTo]=[this.valueTo,this.valueFrom]},searchFlights(){this.flightsVisible=!0,this.flights=B.filter((e=>this.matchesSelectedDate(e.departure)))},matchesSelectedDate(e){if(!this.valueDateFrom&&!this.valueDateTo)return!0;const a=this.valueDateFrom?new Date(this.valueDateFrom):null,l=this.valueDateTo?new Date(this.valueDateTo):null,t=new Date(e);return a&&l?t>=a&&t<=l:a?t>=a:!l||t<=l},formatDate(e){const a={day:"2-digit",month:"2-digit",year:"numeric"};return new Intl.DateTimeFormat("en-US",a).format(new Date(e))}},name:"HomeView"};const M=(0,d.Z)(H,[["render",Z]]);var K=M;const Y={class:"AccountView"},E={class:"account__container"},J={class:"account"},G={class:"account__sing-in"},Q={class:"btn__sing-in"},X={class:"flex items-center gap-8 flex-wrap"},$={class:"flex items-center gap-8 flex-wrap"},ee=(0,o._)("div",{class:"account__region"},null,-1),ae={class:"account__info xs12"},le={class:"mail"},te=(0,o._)("div",null,[(0,o._)("a",{href:"mailto:example@example.com"},"Написать нам")],-1),oe=(0,o._)("div",null," Ми вживаємо всіх необхідних заходів для захисту даних від несанкціонованого доступу, зміни, розкриття чи знищення. До цих заходів належать, зокрема, внутрішня перевірка процесів збору, зберігання та обробки даних і заходів безпеки, включаючи відповідне шифрування і заходи щодо забезпечення фізичної безпеки даних для запобігання неавторизованого доступу до систем, в яких ми зберігаємо особисті дані. Нагадування. Додаток не є справжнім. ",-1),ne=(0,o._)("div",null,"пМи вживаємо всіх необхідних заходів для захисту даних від несанкціонованого доступу, зміни, розкриття чи знищення. До цих заходів належать, зокрема, внутрішня перевірка процесів збору, зберігання та обробки даних і заходів безпеки, включаючи відповідне шифрування і заходи щодо забезпечення фізичної безпеки даних для запобігання неавторизованого доступу до систем, в яких ми зберігаємо особисті дані. Нагадування. Додаток не є справжнім.",-1),ie={class:"rating-dialog"},re=(0,o._)("h2",null,"Оцените приложение",-1);function se(e,a,l,t,n,i){const r=(0,o.up)("va-icon"),s=(0,o.up)("va-button"),u=(0,o.up)("router-link"),m=(0,o.up)("va-collapse"),d=(0,o.up)("va-rating");return(0,o.wg)(),(0,o.iD)("main",Y,[(0,o._)("div",E,[(0,o._)("div",J,[(0,o._)("div",G,[(0,o.Wm)(r,{class:"material-icons sm12",size:"8rem"},{default:(0,o.w5)((()=>[(0,o.Uk)(" account_circle ")])),_:1}),(0,o._)("div",Q,[(0,o._)("div",X,[(0,o.Wm)(u,{to:"/singin"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{round:"",color:"#6B86D9"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Увійти ")])),_:1})])),_:1})]),(0,o._)("div",$,[(0,o.Wm)(u,{to:"/Register"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{round:"",color:"#6B86D9B2"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Реєстрація ")])),_:1})])),_:1})])])]),ee,(0,o._)("div",ae,[(0,o._)("div",le,[(0,o.Wm)(m,{modelValue:n.valueMail,"onUpdate:modelValue":a[0]||(a[0]=e=>n.valueMail=e),header:"Зв'язок з розробниками",solid:""},{default:(0,o.w5)((()=>[te])),_:1},8,["modelValue"])]),(0,o.Wm)(m,{modelValue:n.valuePrivacyPolicy,"onUpdate:modelValue":a[1]||(a[1]=e=>n.valuePrivacyPolicy=e),header:"Політика конфіденційності",solid:""},{default:(0,o.w5)((()=>[oe])),_:1},8,["modelValue"]),(0,o.Wm)(m,{modelValue:n.valueAboutUs,"onUpdate:modelValue":a[2]||(a[2]=e=>n.valueAboutUs=e),header:"Про нас",solid:""},{default:(0,o.w5)((()=>[ne])),_:1},8,["modelValue"]),(0,o._)("div",ie,[re,(0,o.Wm)(d,{modelValue:n.valueRating,"onUpdate:modelValue":a[3]||(a[3]=e=>n.valueRating=e)},null,8,["modelValue"])])])])])])}var ue={data(){return{valueAboutUs:!1,valuePrivacyPolicy:!1,valueMail:!1,valueRating:3}},methods:{scrollPage(e){if(e){const e=document.querySelector(".account__info");e.scrollIntoView({behavior:"smooth"})}}}};const me=(0,d.Z)(ue,[["render",se]]);var de=me;const ce={class:"RegisterAccountView"},ve={class:"register"};function he(e,a,l,t,n,i){const r=(0,o.up)("va-input"),s=(0,o.up)("va-form");return(0,o.wg)(),(0,o.iD)("main",ce,[(0,o._)("div",ve,[(0,o.Wm)(s,{class:"flex flex-col gap-6",ref:"formRef"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:n.form.firstName,"onUpdate:modelValue":a[0]||(a[0]=e=>n.form.firstName=e),rules:[e=>e&&e.length>0||"First name is required"],label:"Ім'я"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.lastName,"onUpdate:modelValue":a[1]||(a[1]=e=>n.form.lastName=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Фамілія"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.PhoneNumber,"onUpdate:modelValue":a[2]||(a[2]=e=>n.form.PhoneNumber=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Номер телефону"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.Login,"onUpdate:modelValue":a[3]||(a[3]=e=>n.form.Login=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Логін"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.Password,"onUpdate:modelValue":a[4]||(a[4]=e=>n.form.Password=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Пароль"},null,8,["modelValue","rules"])])),_:1},512)])])}var pe={data(){return{form:{firstName:"",lastName:"",PhoneNumber:"",Login:"",Password:""}}},name:"RegisterAccountView"};const fe=(0,d.Z)(pe,[["render",he]]);var ge=fe;const we={class:"SingInView"},_e={class:"register"};function be(e,a,l,t,n,i){const r=(0,o.up)("va-input"),s=(0,o.up)("va-form");return(0,o.wg)(),(0,o.iD)("main",we,[(0,o._)("div",_e,[(0,o.Wm)(s,{class:"flex flex-col gap-6",ref:"formRef"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:n.form.PhoneNumber,"onUpdate:modelValue":a[0]||(a[0]=e=>n.form.PhoneNumber=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Номер телефону"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.Login,"onUpdate:modelValue":a[1]||(a[1]=e=>n.form.Login=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Логін"},null,8,["modelValue","rules"]),(0,o.Wm)(r,{modelValue:n.form.Password,"onUpdate:modelValue":a[2]||(a[2]=e=>n.form.Password=e),rules:[e=>e&&e.length>0||"Last name is required"],label:"Пароль"},null,8,["modelValue","rules"])])),_:1},512)])])}var Ve={data(){return{form:{PhoneNumber:"",Login:"",Password:""}}},name:"SingIn"};const ye=(0,d.Z)(Ve,[["render",be]]);var De=ye;const ke=(0,w.p7)({history:(0,w.PO)(),routes:[{path:"/",name:"Home",component:K},{path:"/account",name:"Account",component:de},{path:"/register",name:"Register",component:ge},{path:"/singIn",name:"SingIn",component:De}]});var Te=ke;(0,t.ri)(f).use((0,g.c)()).use(Te).mount("#app")}},a={};function l(t){var o=a[t];if(void 0!==o)return o.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(a,t,o,n){if(!t){var i=1/0;for(m=0;m<e.length;m++){t=e[m][0],o=e[m][1],n=e[m][2];for(var r=!0,s=0;s<t.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((function(e){return l.O[e](t[s])}))?t.splice(s--,1):(r=!1,n<i&&(i=n));if(r){e.splice(m--,1);var u=o();void 0!==u&&(a=u)}}return a}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[t,o,n]}}(),function(){l.d=function(e,a){for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};l.O.j=function(a){return 0===e[a]};var a=function(a,t){var o,n,i=t[0],r=t[1],s=t[2],u=0;if(i.some((function(a){return 0!==e[a]}))){for(o in r)l.o(r,o)&&(l.m[o]=r[o]);if(s)var m=s(l)}for(a&&a(t);u<i.length;u++)n=i[u],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},t=self["webpackChunkair_tickets_client"]=self["webpackChunkair_tickets_client"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(107)}));t=l.O(t)})();
//# sourceMappingURL=app.6d9ff717.js.map