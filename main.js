var app = {};
app.widgets = {};

(function(exports) {
  exports.element = document.getElementById('element1');
  if (exports.element === null) {
    return;
  }
  exports.wrapper = exports.element.closest('.form-group');
  exports.setHeight = function() {
    //Код, который устанавливает высоту виджета
    exports.wrapper.style.height = '200px';
  };
  exports.setHeight();
  window.addEventListener('resize', exports.setHeight);
})((this.app.widgets.element1 = {}));

(function(exports) {
  exports.element = document.getElementById('element2');
  if (exports.element === null) {
    return;
  }
  exports.wrapper = exports.element.closest('.form-group');
  exports.setHeight = function() {
    exports.wrapper.style.height = '0px';
    const well = exports.wrapper.closest('.well');
    let wellChild = well.children;
    let currentElementHeight = 0;
    const windowheight = window.innerHeight;
    const button = document.querySelector('.k-button');
    const buttonRow = button.closest('.row');
    const buttonRowHeight = buttonRow.offsetHeight;
    const wellMarginBottom = 40;
    let otherElementHeight = 0;

    for (let i = 0, max = well.children.length; i < max; i++) {
      const elementHeight = well.children[i].style.height;
      const elementMarginBottom = 15;
      if (!!elementHeight) {
        otherElementHeight += parseInt(elementHeight.replace('px', ''), 10) + elementMarginBottom;
      }
    }

    currentElementHeight = windowheight - (otherElementHeight + buttonRowHeight + wellMarginBottom);
    //Код, который устанавливает высоту виджета
    exports.wrapper.style.height = `${currentElementHeight}px`;
  };
  exports.setHeight();
  window.addEventListener('resize', exports.setHeight);
})((this.app.widgets.element2 = {}));

(function(exports) {
  exports.element = document.getElementById('element3');
  if (exports.element === null) {
    return;
  }
  exports.wrapper = exports.element.closest('.form-group');
  exports.setHeight = function() {
    exports.wrapper.style.height = '0px';
    const well = exports.wrapper.closest('.well');
    let wellChild = well.children;
    let currentElementHeight = 0;
    const windowheight = window.innerHeight;
    const button = document.querySelector('.k-button');
    const buttonRow = button.closest('.row');
    const buttonRowHeight = buttonRow.offsetHeight;
    const wellMarginBottom = 40;
    let otherElementHeight = 0;

    for (let i = 0, max = well.children.length; i < max; i++) {
      const elementHeight = well.children[i].style.height;
      const elementMarginBottom = 15;
      if (!!elementHeight) {
        otherElementHeight += parseInt(elementHeight.replace('px', ''), 10) + elementMarginBottom;
      }
    }

    currentElementHeight = windowheight - (otherElementHeight + buttonRowHeight + wellMarginBottom);
    console.log(currentElementHeight);
    //Код, который устанавливает высоту виджета
    exports.wrapper.style.height = `${currentElementHeight}px`;
  };
  exports.setHeight();
  window.addEventListener('resize', exports.setHeight);
})((this.app.widgets.element3 = {}));
