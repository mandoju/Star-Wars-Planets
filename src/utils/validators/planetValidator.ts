import AJV from "ajv";
import planetJSC from "../../models/schemas/planet.json";
import { Planet } from "../../models/planet.js";


//Função que valida se o dado recebido é um planeta
export const validatePlanet = (data: any): data is Planet => {
  const ajv = new AJV({ allErrors: true });
  const valid = ajv.validate(planetJSC, data);
  return !!valid;
};
