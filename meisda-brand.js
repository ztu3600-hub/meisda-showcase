/* The template owns its hover/menu/scroll animations. Only content and inquiry behavior are adapted here. */
(()=>{
function init(){
 const reveal=document.querySelectorAll('.meisda-reveal');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>target.classList.toggle('is-visible',isIntersecting)),{threshold:.2});reveal.forEach(el=>observer.observe(el));}else reveal.forEach(el=>el.classList.add('is-visible'));
 document.querySelectorAll('input[type="submit"]').forEach(e=>{const v=e.value.trim();if(/Subscribe|Send|Submit|Sign up/i.test(v))e.value='提交需求'});
 document.querySelectorAll('input[placeholder]').forEach(e=>{if(/mail/i.test(e.placeholder))e.placeholder='联系邮箱';else if(/search/i.test(e.placeholder))e.placeholder='搜索型号或产品';else if(/name/i.test(e.placeholder))e.placeholder='您的姓名';else if(/phone/i.test(e.placeholder))e.placeholder='联系电话'});
 document.querySelectorAll('textarea[placeholder]').forEach(e=>e.placeholder='请填写型号、数量、应用场景与定制需求');
 // Product cards remain real links. The basket carries inquiry selections, never invented prices.
 document.querySelectorAll('.w-commerce-commercecartcheckoutlink,.w-commerce-commercecartcheckoutbutton').forEach(a=>{a.href='/meisda-showcase/contact?selection=1';a.textContent='咨询选型方案'});
 if(window.__showcasePath==='/meisda-showcase/contact'&&new URLSearchParams(location.search).has('selection')){
  let selected=[];try{selected=JSON.parse(localStorage.getItem('meisda-selection-v1')||'[]')}catch{}
  const message=document.querySelector('textarea');if(message&&selected.length)message.value='产品选型需求：\n'+selected.map(p=>p.name+' × '+p.quantity).join('\n')+'\n\n应用场景：\n定制要求：';
 }
 // The two archived commerce utility paths now lead to the inquiry page.
 if(['/meisda-showcase/checkout','/meisda-showcase/order-confirmation'].includes(window.__showcasePath))location.replace('/meisda-showcase/contact?selection=1');
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();
