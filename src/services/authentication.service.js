export const loginRequest = (email, password) => {
  return new Promise(function (resolve, reject) {
    return fetch("http://zmjtxnigks.eu11.qoddiapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject("Login failed");
        }
      })
      .then((data) => {
        return {
          uid: data.uid,
          email: data.email,
        };
      })
      .catch((error) => {
        reject("Wrong email and/or password");
      });
  });
};

export const createUserRequest = (email, password) => {
  return new Promise(function (resolve, reject) {
    return fetch("http://zmjtxnigks.eu11.qoddiapp.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          reject("Email already registered");
        }
      })
      .then((data) => {
        resolve("User created!");
      })
      .catch((error) => {
        reject(error);
      });
  });
};
