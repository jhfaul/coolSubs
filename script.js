var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    nameValidate: "",
    emailValidate: "",
    submit: "",
    cdenmes: [
      {
        name: "Protagonist",
        codename: "Joker",
        flipped: false
      },
      {
        name: "Anne",
        codename: "Panther",
        flipped: false
      },
      { name: "Ryuji", codename: "Skull", flipped: false }
    ]
  },

  methods: {
    check: function () {
      if (this.nameValidate == null && this.emailValidate == null) {
        this.submit = "Submitted";
      } else {
        this.submit = "Not Submitted. Missing required fields.";
      }
    }
  },

  watch: {
    name: function () {
      if (this.name.length < 2) {
        this.nameValidate = "Name must require more than 2 letters.";
      } else if ((this.name.length = 0 || this.name.length >= 2)) {
        this.nameValidate = null;
      }
    },

    email: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        this.emailValidate = "Invalid email address.";
      } else if (re.test(email)) {
        this.emailValidate = null;
      }
    }
  }
});