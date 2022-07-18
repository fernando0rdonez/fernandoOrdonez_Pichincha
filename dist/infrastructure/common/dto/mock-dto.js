"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const makeDTOMock = (data) => {
    return {
        repositories: data.map(repository => {
            return {
                id: repository.id_repository,
                state: faker_1.faker.datatype.number({
                    min: 604,
                    max: 606
                })
            };
        })
    };
};
exports.default = { makeDTOMock };
