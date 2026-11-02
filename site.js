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
    "title": "Started My Ph.D. at Johns Hopkins University",
    "desc": "I'm excited to begin my Ph.D. in Computer Science at Johns Hopkins University! I'm investigating the origins of traffic bursts in distributed AI training, hoping to turn these insights into better scheduling and load-balancing mechanisms. I can't wait to see where this journey takes me!"
  },
  {
    "date": "May 2026",
    "title": "Completed My Research Internship at KIST",
    "desc": "After 14 wonderful months, my time at KIST has come to an end. I'm grateful to Dr. Haesol Park, Dr. Heeseung Choi, and Dr. Hyungjoo Jung for their guidance, and to Eunshik Kim and Yekwon Kim for working alongside me. I hope our paths cross again at a conference someday!"
  },
  {
    "date": "Feb 2026",
    "title": "Presented Our Research at IPIU 2026",
    "desc": "Our research on frequency-aware spatiotemporal map reconstruction was presented as a poster at IPIU 2026 in Jeju! We developed a Fourier-based multi-resolution framework to reconstruct high-resolution maps from extremely sparse observations while preserving spatial structures and boundaries."
  },
  {
    "date": "Nov 2025",
    "title": "Presented Our Research at IEIE 2025",
    "desc": "Our research on learnable spatiotemporal graph networks was presented as a poster at IEIE 2025 in Gwangju, Gyeonggi-do! Our model learns hidden relationships between traffic sensors directly from data rather than relying on predefined road-network connections."
  },
  {
    "date": "Oct 2025",
    "title": "Showcased Our Research at KPEX 2025",
    "desc": "Our multimodal time-series research for proactive crowd-density management was showcased at <a href=\"https://eng.police-expo.com/exhibition/show-report/\" target=\"_blank\" rel=\"noopener noreferrer\">KPEX 2025</a> in Songdo, Incheon! As the lead presenter at our booth, I enjoyed sharing how our work could support public safety and discussing its real-world applications with visitors beyond academia."
  },
  {
    "date": "Mar 2025",
    "title": "Joined KIST as a Full-Time Research Intern",
    "desc": "I'm excited to join <a href=\"https://vig.kist.re.kr/\" target=\"_blank\" rel=\"noopener noreferrer\">KIST's Visual Intelligence Group</a> as a full-time Research Intern! As one of three researchers on a crowd-safety project (~$1.2M), I'll focus on multimodal time-series modeling and distributed training optimization. It's a big responsibility, but I'm ready for the challenge!"
  },
  {
    "date": "Feb 2025",
    "title": "Graduated from Hankuk University of Foreign Studies",
    "desc": "I graduated <em>summa cum laude</em> from Hankuk University of Foreign Studies (HUFS) with a B.Eng. in Information and Communications Engineering (<strong>GPA 4.34/4.50, top 1.8%</strong>)! The late nights and challenges taught me persistence, and now I'm excited to take my next step into research."
  },
  {
    "date": "Dec 2023",
    "title": "Received the Best Paper Award at NCAEIC 2023",
    "desc": "Our paper on privacy-preserving synthetic transportation data, conducted with the <a href=\"https://main.kotsa.or.kr/eng/engMain.do\" target=\"_blank\" rel=\"noopener noreferrer\">Korea Transportation Safety Authority (KOTSA)</a>, received the <strong>Best Paper Award (1/95)</strong> at NCAEIC 2023! We compared GAN, CTGAN, and VAE, with CTGAN performing best overall. I'm grateful to Dr. Sejong Oh, Dr. Illchul Doo, and my teammates Jihwan Baik and Hanbin Ryou for this memorable first award!"
  }
];
    document.querySelectorAll('[data-news-list]').forEach(el=>{
      const count=Number(el.getAttribute('data-news-limit')||news.length);
      el.innerHTML=news.slice(0,count).map(n=>`<details class="news-entry"><summary><span class="news-date">${n.date}</span><span class="news-title">${n.title}</span><span class="chevron" aria-hidden="true">+</span></summary><p class="news-detail">${n.desc}</p></details>`).join('');
    });
  });
})();
