// Salendram Nidhitha Portfolio Scripts (Cyber Obsidian Theme)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      if (isExpanded) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-xmark', 'fa-bars-staggered');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.replace('fa-bars-staggered', 'fa-xmark');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-xmark', 'fa-bars-staggered');
      });
    });
  }

  // Active navigation tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400');
      }
    });
  });
});

// Copy Email Utility with Toast Notification
function copyEmail(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const email = 'nidhitha10001@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Copied: ' + email);
  }).catch(() => {
    showToast(email);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}
