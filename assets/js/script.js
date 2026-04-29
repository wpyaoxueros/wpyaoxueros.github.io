'use strict';

const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle('active');
};

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
  });
}

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  filterItems.forEach(function (item) {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

if (select && selectItems.length > 0 && selectValue) {
  select.addEventListener('click', function () {
    elementToggleFunc(this);
  });

  selectItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

if (filterBtn.length > 0 && selectValue) {
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove('active');
      this.classList.add('active');
      lastClickedBtn = this;
    });
  });
}

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });
}

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const target = (this.dataset.target || this.textContent).trim().toLowerCase();

      pages.forEach(function (page) {
        page.classList.toggle('active', page.dataset.page === target);
      });

      navigationLinks.forEach(function (nav) {
        nav.classList.toggle('active', nav === link);
      });

      window.scrollTo(0, 0);
    });
  });
}
