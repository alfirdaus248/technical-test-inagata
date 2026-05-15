const pageTitles = {
  credit: 'Credit Cards',
  services: 'Services',
  setting: 'Setting'
};

async function loadPage(page){
  const container = document.getElementById('page-container');
  const title = document.getElementById('page-title');

  try{
    const response = await fetch(`pages/${page}.html`);

    if(!response.ok){
      throw new Error('Page not found');
    }

    const html = await response.text();

    container.innerHTML = html;
    title.textContent = pageTitles[page] || 'BankDash';

  }catch(error){
    container.innerHTML = `
      <div class="page-content">
        <div class="add-card-box">
          <p>Failed to load page.</p>
        </div>
      </div>
    `;
  }
}

function showPage(page, element){
  loadPage(page);

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.classList.remove('active');

    const icon = item.querySelector('img');
    const defaultIcon = item.dataset.icon;

    if(icon && defaultIcon){
      icon.src = defaultIcon;
    }
  });

  const activeItems = document.querySelectorAll(`[data-page="${page}"]`);

  activeItems.forEach(item => {
    item.classList.add('active');

    const icon = item.querySelector('img');
    const activeIcon = item.dataset.activeIcon;

    if(icon && activeIcon){
      icon.src = activeIcon;
    }
  });

  const mobileMenu = document.getElementById('mobileMenu');

  if(mobileMenu){
    mobileMenu.classList.remove('show');
  }
}

function toggleMobileMenu(){
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
  loadPage('credit');
});