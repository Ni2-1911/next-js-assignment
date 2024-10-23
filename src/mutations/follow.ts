export const followCharacter = async ({ id }) => {
  const response = await fetch("/api/follow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: id }),
  });

  await response.json();
  if (response.status === 201) {
    return "sucess";
  } else {
    return "error";
  }
};
