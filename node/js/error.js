var Error = function (container, message) {
  var errorContainer = $(container);

  errorContainer.text(message);
  errorContainer.removeClass('invisible');

  setTimeout( function () {
    errorContainer.text('');
    errorContainer.addClass('invisible');
  }, 3000);
};
