const getFormattedPhone = (phone: string): string => {
  return phone
    .split("")
    .filter(
      (character) =>
        character !== "-" &&
        character !== "(" &&
        character !== ")" &&
        character !== " "
    )
    .join("");
};

export default getFormattedPhone;
