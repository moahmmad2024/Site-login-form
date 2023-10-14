$("#formValidation").validate({
  rules: {
    name: {
      minlength: 2,
    },
    email: {
      email: true,
    },
    Phone: {
      number: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name should be at least 2 characters",
    },
    email: "Please enter a valid email",
    Phone: "Please enter a valid phone number",
    subject: "Please enter the subject",
    formMessage: "Please enter your message",
  },
  submitHandler: function (form) {
    const latitude = 52.2730528;
    const longitude = 4.8383051;
    const zoom = 14;

    const mapUrl = `https://github.com/mohammadd600`;
    window.location.href = mapUrl;
  },
});
