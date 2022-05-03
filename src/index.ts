import { User } from "./User";
import { Company } from "./Company";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`;

document.head.append(script);

window.addEventListener("load", () => {
  const user = new User();
  const company = new Company();
  console.log(user, company, google);
});
