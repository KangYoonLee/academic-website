(function(){
  const root=document.documentElement;
  const key='klee-theme';
  let saved=null;try{saved=localStorage.getItem(key)}catch(e){}
  root.dataset.theme=saved || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  function sync(){
    document.querySelectorAll('.theme-toggle').forEach(btn=>{
      const night=root.dataset.theme==='dark';
      btn.setAttribute('aria-label',night?'Switch to day mode':'Switch to night mode');
      btn.setAttribute('title',night?'Day mode':'Night mode');
      btn.innerHTML='<span class="theme-icon" aria-hidden="true">'+(night?'☀':'☾')+'</span>';
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    sync();
    document.querySelectorAll('.theme-toggle').forEach(btn=>btn.addEventListener('click',function(){
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      try{localStorage.setItem(key,root.dataset.theme)}catch(e){}sync();
    }));
    const menu=document.querySelector('.mobile-menu'),nav=document.querySelector('.nav');
    if(menu && nav){
      menu.addEventListener('click',()=>{
        const on=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(on));
      });
      nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
    }
    document.querySelectorAll('.year').forEach(e=>e.textContent=String(new Date().getFullYear()));
    const news=[
  {
    "date": "Aug 2026",
    "title": "Started my Ph.D. in Computer Science at Johns Hopkins University",
    "desc": "[TBD]"
  },
  {
    "date": "May 2026",
    "title": "Completed my AI research internship at KIST",
    "desc": "[TBD]"
  },
  {
    "date": "Feb 2026",
    "title": "Presented our KIST research as a poster at IPIU 2026",
    "desc": "Our research at KIST was presented as a poster at IPIU 2026."
  },
  {
    "date": "Nov 2025",
    "title": "Presented our KIST research as a poster at IEIE 2025",
    "desc": "Our research at KIST was presented as a poster at IEIE 2025."
  },
  {
    "date": "Oct 2025",
    "title": "Presented our team’s research at KPEX 2025",
    "desc": "Our team's research was selected for presentation at KPEX 2025."
  },
  {
    "date": "Mar 2025",
    "title": "Started my research internship at KIST",
    "desc": "[TBD]"
  },
  {
    "date": "Feb 2025",
    "title": "Graduated from Hankuk University of Foreign Studies",
    "desc": "I graduated with a GPA of 4.34/4.50 (Top 1.8%) and was grateful to receive several scholarships during my undergraduate studies."
  },
  {
    "date": "Nov 2023",
    "title": "Received a Best Paper Award",
    "desc": "[TBD]"
  }
];
    document.querySelectorAll('[data-news-list]').forEach(el=>{
      const count=Number(el.getAttribute('data-news-limit')||news.length);
      el.innerHTML=news.slice(0,count).map(n=>`<details class="news-entry"><summary><span class="news-date">${n.date}</span><span class="news-title">${n.title}</span><span class="chevron" aria-hidden="true">+</span></summary><p class="news-detail">${n.desc}</p></details>`).join('');
    });
  });
})();
