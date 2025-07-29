async function fetchJson(url) {
  const response = await fetch(url);
  const obj = await response.json();
  return obj;
}

async function getChefBirthday(id) {
  const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await responseRicetta.json();
  const responseUser = await fetch(
    `https://dummyjson.com/users/${ricetta.userId}`
  );
  const user = await responseUser.json();
  return user.birthDate;
}
try {
  getChefBirthday(1).then((res) =>
    console.log("Data di nascita dello chef:", res)
  );
} catch (err) {
  console.error(err);
}
