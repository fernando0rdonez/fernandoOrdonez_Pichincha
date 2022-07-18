"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationDTO = exports.listOrganizationDTO = void 0;
const listOrganizationDTO = (orgs) => {
    const response = orgs.map(org => {
        return {
            id: org.id_organization,
            name: org.name,
            status: Number(org.status)
        };
    });
    return response;
};
exports.listOrganizationDTO = listOrganizationDTO;
const organizationDTO = (org) => {
    return {
        id: org.id_organization,
        name: org.name,
        status: org.status
    };
};
exports.organizationDTO = organizationDTO;
exports.default = { organizationDTO: exports.organizationDTO, listOrganizationDTO: exports.listOrganizationDTO };
