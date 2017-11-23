
(function () {

  'use strict';

  let accordions, i;

  function makeAccordion(accordion) {
    let targets, currentTarget;
    targets = accordion.querySelectorAll('.menu-list >  .accordion-toggle');

    function expand() {
      if (currentTarget) {
        currentTarget.classList.remove('d-block');
        currentTarget.classList.add('d-none');
      }
      currentTarget = this.nextElementSibling;
      currentTarget.classList.remove('d-none');
      currentTarget.classList.add('d-block');
    }

    for (i = 0; i < targets.length; i += 1) {
      targets[i].addEventListener('click', expand, false);
    }

  }

  accordions = document.querySelectorAll('.menu-list');

  for (i = 0; i < accordions.length; i += 1) {
    makeAccordion(accordions[i]);
  }

}());
