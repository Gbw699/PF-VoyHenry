import { faker } from "@faker-js/faker";
import { promises as fs } from "fs";

function generatePlans() {
    let plansSelection = [];
    for (let id = 1; id <= 8; id++) {

        const title = faker.lorem.sentence();
        const summary = faker.lorem.paragraph();
        const description = faker.lorem.paragraphs();
        const mainImage = faker.image.abstract();
        const image = faker.image.abstract();
        const eventDate = faker.date.past();
        const state = "Planing";

        plansSelection.push({
            id: id,
            title,
            summary, 
            description, 
            mainImage,
            image,
            eventDate,
            state,
        });
    }
    return { data: plansSelection };
}

const generatedData = generatePlans();

fs.writeFile("plansSelection.json", JSON.stringify(generatedData, null, "\t"));