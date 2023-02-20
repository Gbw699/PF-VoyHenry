import { faker } from "@faker-js/faker";
import axios from "axios";

async function generateBaseCreator() {
  function generateProducts() {
    const title = faker.word.adjective(5);
    const price = faker.datatype.number();
    const detail = faker.lorem.sentence();
    const mainImage = faker.image.abstract();
    const availability = faker.datatype.boolean();

    return {
      title,
      price,
      detail,
      mainImage,
      availability,
    };
  }
  const fakeProduct = generateProducts();
  for (let j = 0; j < 20; j++) {
    await axios.post("http://localhost:3001/api/v1/products", fakeProduct);
  }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function test() {
  try {
    console.log("====================================");
    console.log("Creating user, blogs and post");
    console.log("====================================");
    await generateBaseCreator();
    console.log("====================================");
    console.log("Finished creating. Waiting for next action. (10s)");
    console.log("====================================");
    await delay(2000);
  } catch (error) {
    console.log("====================================");
    console.log("Error occurred... Trying again...");
    console.log("====================================");
  } finally {
    await test();
  }
}

test();
