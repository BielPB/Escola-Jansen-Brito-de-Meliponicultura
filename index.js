// NAV scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    // Ativa o efeito após 20px de rolagem para uma transição mais rápida e fluida
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
  // Mobile menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  
  const toggleMenu = (forceClose = false) => {
    const isOpen = forceClose ? false : navLinks.classList.toggle('mobile-open');
    if (forceClose) navLinks.classList.remove('mobile-open');
    
    document.body.classList.toggle('menu-open', isOpen);
    mobileBtn.classList.toggle('active', isOpen);
  };

  mobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      // Pequeno delay para permitir que o clique seja processado antes de fechar o menu com animação
      setTimeout(() => toggleMenu(true), 150);
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // WhatsApp form
  function enviarFormulario() {
    const nome = document.getElementById('f_nome').value.trim();
    const whatsapp = document.getElementById('f_whatsapp').value.trim();
    const cidade = document.getElementById('f_cidade').value.trim();
    const tipo = document.getElementById('f_tipo').value.trim();
    const mensagem = document.getElementById('f_mensagem').value.trim();

    if (!nome || !whatsapp) {
      alert('Por favor, preencha pelo menos seu nome e WhatsApp.');
      return;
    }

    const texto = `Olá, Jansen! Me chamo *${nome}* e estou em *${cidade || 'localidade não informada'}*.\n\n*Tipo de solicitação:* ${tipo || 'Não informado'}\n\n*Mensagem:*\n${mensagem || 'Gostaria de mais informações.'}\n\n*Meu WhatsApp:* ${whatsapp}`;
    const url = `https://wa.me/5583988243144?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  // Smooth parallax on hero orbs
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const orb1 = document.querySelector('.hero-orb-1');
    const orb2 = document.querySelector('.hero-orb-2');
    if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
    if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
  });