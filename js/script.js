var constraints = {
    name: {
        presence: true,
        length: {
          minimum: 3,
        },
        format: {
          pattern: "[a-z ]+",
          flags: "X",
          message: "Only contains letters"
        }
      },

    email: {
        // Email is required
        presence: true,
        // and must be an email (duh)
        email: true
      },
    
    username: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
        maximum: 20
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z0-9]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "X",
        message: "can only contain a-z and 0-9"
      }
    },
}