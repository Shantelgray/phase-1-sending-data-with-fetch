function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((response) => appendToDOM(response.id))
    .catch((response) => appendToDOM(response.message));
}

const appendToDOM = (data) => {
  const newElement = document.createElement("h1");
  newElement.textContent = data;
  document.body.appendChild(newElement);
  return data;
};
