async function getChefBirthday(id) {
  const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await responseRicetta.json();
  const responseUser = await fetch(
    `https://dummyjson.com/users/${ricetta.userId}`
  );
  const user = await responseUser.json();
  return user.birthDate;
}

getChefBirthday(1)
  .then((res) => console.log("Data di nascita dello chef:", res))
  .catch((error) => console.error("Errore:", error.message));
