import axios from "axios";

import { validatePlanet } from "../planetValidator";
import sucessfulPlanetRequest from "./mocks/PlanetRequest.mock.json";
import PlanetRequestAnwser from "./mocks/PlanetRequestAnswer.mock.json";

jest.mock("axios");

describe("getPlanets ", () => {
  it("Check if validator is getting right validation", async () => {
    const data = sucessfulPlanetRequest;
    expect(validatePlanet(data)).toEqual(true);
  });
  it("Check if validator return false on wrong file", async () => {
    const data = { wrongdata: "wrong" };
    expect(validatePlanet(data)).toEqual(false);
  });
});
