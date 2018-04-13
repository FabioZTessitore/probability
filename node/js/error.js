var Error = function (container, message) {
  var errorContainer = $(container);

  errorContainer.text(message);
  errorContainer.removeClass('d-none');

  setTimeout( function () {
    errorContainer.text('');
    errorContainer.addClass('d-none');
  }, 3000);
};
