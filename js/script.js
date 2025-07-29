async function fetchJson(url) {
  const response = await fetch(url);
  const obj = await response.json();
  return obj;
}

async function getChefBirthday(id) {
  let ricetta;
  try {
    ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
  } catch (err) {
    throw new Error(`impossibile raggiungere la ricetta con id: ${id}`);
  }
  // bonus 1
  if (ricetta.message) {
    throw new Error(ricetta.message);
  }

  let user;
  try {
    user = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
  } catch (err) {
    throw new Error(
      `impossibile raggiungere lo chef con id: ${ricetta.userId}`
    );
  }
  if (user.message) {
    throw new Error(user.message);
  }
  return dayjs(user.birthDate).format("DD/MM/YYYY");
}

(async () => {
  try {
    const res = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", res);
  } catch (err) {
    console.error(err);
  }
})();
