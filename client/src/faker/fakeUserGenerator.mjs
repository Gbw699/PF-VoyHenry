import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

function generateUsers() {
    let users = [];
    for (let id = 1; id <= 100; id++) {
        const nickName = faker.name.middleName();
        const email = faker.internet.email();
        const genre = faker.name.gender();
        const dateOfBirth = faker.date.birthdate();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const image = faker.image.avatar();

        users.push({
            id,
            nickName,
            email,
            genre,
            dateOfBirth,
            firstName,
            lastName,
            image,
        });
    }
    return { data:users };
}

const generatedData = generateUsers();

fs.writeFile("users.json", JSON.stringify(generatedData, null, "\t"));