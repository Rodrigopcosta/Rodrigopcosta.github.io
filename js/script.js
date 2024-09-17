document.addEventListener("DOMContentLoaded", () => {
  // Define a seção ativa inicialmente
  const initialSection = document.querySelector('.about');
  if (initialSection) {
    initialSection.classList.add('active');
  }

  // Adiciona evento de clique para os links de navegação
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => handleNavigationClick(link));
  });

  // Funcionalidade de alternância da barra lateral
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => toggleClass(sidebar, "active"));
  }

  // Função de filtro
  const filterFunc = (selectedValue) => {
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const normalizedValue = selectedValue.toLowerCase();

    filterItems.forEach(item => {
      const itemCategory = item.dataset.category.toLowerCase();
      item.classList.toggle("active", normalizedValue === "todos" || normalizedValue === itemCategory);
    });
  };

  // Variáveis do filtro
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtns = document.querySelectorAll("[data-filter-btn]");

  // Evento do botão de seleção
  if (select) {
    select.addEventListener("click", () => toggleClass(select, "active"));
  }

  // Evento para itens de select
  selectItems.forEach(item => {
    item.addEventListener("click", () => {
      const selectedValue = item.innerText.trim().toLowerCase();
      if (selectValue) selectValue.innerText = item.innerText;
      toggleClass(select, "active");
      filterFunc(selectedValue);
    });
  });

  // Evento para botões de filtro
  let lastClickedBtn = filterBtns[0];
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedValue = btn.innerText.trim().toLowerCase();
      if (selectValue) selectValue.innerText = btn.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      btn.classList.add("active");
      lastClickedBtn = btn;
    });
  });

  // Variáveis do formulário de contato
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // Evento para campos de entrada do formulário
  if (form) {
    form.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  }

  // Funções auxiliares
  function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
  }

  function handleNavigationClick(link) {
    document.querySelectorAll('article').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.navbar-link').forEach(navLink => navLink.classList.remove('active'));

    const pageName = link.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    const pageClassMap = {
      'sobre': 'about',
      'currículo': 'resume',
      'portfólio': 'portfolio',
      'blog': 'blog',
      'contato': 'contact'
    };

    const sectionClass = pageClassMap[pageName];
    const targetSection = document.querySelector(`.${sectionClass}`);
    if (targetSection) {
      targetSection.classList.add('active');
      link.classList.add('active');
    }
  }
});
