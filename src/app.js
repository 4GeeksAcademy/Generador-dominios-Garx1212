/* eslint-disable */
import "bootstrap";
import "./style.css";

let domain = () => {
  let pronouns = ["/the/", "/our", "/IDK"];
  let adjs = ["/great/", "big", "/npi"];
  let nouns = ["/jogger/.", "racoon", "BTW"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        console.log("https//" + pronoun + "" + adj + "" + noun + ".com");
      }
    }
  }
};
domain();
