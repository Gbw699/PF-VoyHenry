import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

function generateBlogs() {
  let blogs = [];
  for (let id = 1; id <= 100; id++) {
    const userName = faker.name.middleName();
    const title = faker.lorem.sentence();
    const content = faker.lorem.paragraph();
    const rating = faker.random.numeric(1);

    blogs.push({
      id: id,
      userName,
      title,
      content,
      rating,
    });
  }
  return { data: blogs };
}

const generatedData = generateBlogs();

fs.writeFile("blogs.json", JSON.stringify(generatedData, null, "\t"));
