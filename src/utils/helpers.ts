export const getWordOfStringFromIndex = (text: string, index = 0) =>
  text.split(' ')[index];
/* eslint-disable no-useless-escape */

export function validMail(mail: string) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail,
  );
}
