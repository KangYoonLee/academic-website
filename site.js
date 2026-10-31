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
      {date:'Aug 2026',title:'Started my Ph.D. in Computer Science at Johns Hopkins University',tag:'Academic',desc:'I began my doctoral studies in Computer Science at Johns Hopkins University, focusing on networking and systems for AI datacenters.'},
      {date:'May 2026',title:'Completed my research internship at KIST',tag:'Research',desc:'I completed my research internship at the Korea Institute of Science and Technology, where I worked on network-data analysis and multimodal spatiotemporal modeling.'},
      {date:'2026',title:'Co-authored a research poster at IPIU 2026',tag:'Publication',desc:'Our work, “Frequency-Aware Multi-Resolution Architecture for High-Resolution Spatiotemporal Map Reconstruction from Sparse Observations,” appeared as a poster at IPIU 2026.'},
      {date:'2025',title:'Co-authored a traffic prediction poster at IEIE 2025',tag:'Publication',desc:'Our work on learnable adjacency matrices for spatiotemporal graph convolutional networks was presented as a poster at the IEIE Autumn Annual Conference.'},
      {date:'Dec 2023',title:'Received a Best Paper Award for synthetic data research',tag:'Award',desc:'Our work comparing generative AI models for synthetic data received a Best Paper Award at an international engineering and ICT conference.'}
    ];
    document.querySelectorAll('[data-news-list]').forEach(el=>{
      const count=Number(el.getAttribute('data-news-limit')||news.length);
      el.innerHTML=news.slice(0,count).map(n=>`<details class="news-entry"><summary><span class="news-date">${n.date}</span><span class="news-title">${n.title}<span class="tag">${n.tag}</span></span><span class="chevron" aria-hidden="true">+</span></summary><p class="news-detail">${n.desc}</p></details>`).join('');
    });
  });
})();
