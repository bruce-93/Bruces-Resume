    
    
    const toggleBtn = document.getElementById('toggleSummary');
    const summaryBox = document.getElementById('summaryBox');
    const downloadBtn = document.getElementById('downloadBtn');

    function setSummary(open){
      if(open){
        summaryBox.classList.add('open');
        summaryBox.setAttribute('aria-hidden','false');
        toggleBtn.textContent = 'Hide summary';
        toggleBtn.setAttribute('aria-expanded','true');
      } else {
        summaryBox.classList.remove('open');
        summaryBox.setAttribute('aria-hidden','true');
        toggleBtn.textContent = 'Show summary';
        toggleBtn.setAttribute('aria-expanded','false');
      }
    }

    toggleBtn.addEventListener('click', ()=> setSummary(!summaryBox.classList.contains('open')));

    document.querySelectorAll('.bottom-nav .nav-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        document.querySelectorAll('.bottom-nav .nav-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const t = btn.dataset.target;
        if(t === 'summary'){
          document.getElementById('mainContent').scrollIntoView({behavior:'smooth',block:'start'});
          setSummary(true);
        } else {
          setSummary(false);
          const el = document.getElementById(t) || document.getElementById('mainContent');
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });

    downloadBtn.addEventListener('click', ()=>{
      const blob = new Blob([document.documentElement.outerHTML], {type: 'application/msword'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'Bruces-Resume/Bruce_Ngixi_Full_Stack_Developer_CV.docx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });