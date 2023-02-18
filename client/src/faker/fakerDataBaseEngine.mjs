import { faker } from "@faker-js/faker";
import axios from "axios";

async function dataBaseCreator() {
  function generateUsers() {
    const nickName = faker.name.middleName();
    const email = faker.internet.email();
    const genre = "Femenino";
    const about = faker.lorem.sentence();
    const dateOfBirth = faker.date.between(
      "1980-02-18T03:00:00.000Z",
      "2004-02-18T03:00:00.000Z"
    );
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const image = faker.image.avatar();
    const role = "Costumer";
    const password = faker.internet.password();

    return {
      nickName,
      email,
      about,
      genre,
      dateOfBirth,
      firstName,
      lastName,
      image,
      role,
      password,
    };
  }

  const fakeUser = generateUsers();

  function generateBlogs() {
    const usernickName = fakeUser.nickName;
    const title = faker.lorem.words();
    const content = faker.lorem.paragraph(1);
    const rating = faker.datatype.number(5);
    const image = faker.image.avatar();

    return {
      usernickName,
      title,
      content,
      rating,
      image,
    };
  }

  const fakeBlog = generateBlogs();

  function generatePlans() {
    const title = faker.word.adjective(5);
    const summary = faker.lorem.sentence();
    const description = faker.lorem.sentence();
    const mainImage = faker.image.abstract();
    const image = faker.image.abstract();
    const eventDate = faker.date.future();
    const state = "En planeacion";

    return {
      title,
      summary,
      description,
      mainImage,
      images: [image],
      eventDate,
      state,
    };
  }

  const fakePlan = generatePlans();

  await axios.post("http://localhost:3001/api/v1/users", fakeUser);

  for (let j = 0; j < 10; j++) {
    await axios.post("http://localhost:3001/api/v1/blogs", fakeBlog);
  }

  for (let k = 0; k < 15; k++) {
    await axios.post("http://localhost:3001/api/v1/plans", fakePlan);
  }
}

async function createDataBase() {
  try {
    for (let i = 0; i < 10000; i++) {
      dataBaseCreator();
    }
  } catch (error) {
    dataBaseCreator();
  }
}

createDataBase();
