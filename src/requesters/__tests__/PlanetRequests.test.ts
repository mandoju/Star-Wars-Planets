import axios from "axios";

import { getPlanetById, getPlanetRandom } from "../PlanetRequester";
import sucessfulPlanetRequest from "./mocks/PlanetRequest.mock.json";
import PlanetRequestAnwser from "./mocks/PlanetRequestAnswer.mock.json";

jest.mock("axios");

describe("getPlanets ", () => {
  it("fetches successfuly data from an API by ID", async () => {
    const data = { data: sucessfulPlanetRequest };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getPlanetById(3)).resolves.toEqual(PlanetRequestAnwser);
    expect(axios.get).toHaveBeenCalledWith("https://swapi.co/api/planets/3/");
  });
  it("fetches successfuly data from an API by Random ID", async () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.03;
    global.Math = mockMath;
    const data = { data: sucessfulPlanetRequest };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getPlanetRandom()).resolves.toEqual(PlanetRequestAnwser);
    expect(axios.get).toHaveBeenCalledWith("https://swapi.co/api/planets/3/");
  });
});
