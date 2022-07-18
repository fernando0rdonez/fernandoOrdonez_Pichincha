"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nameState = {
    E: 'Habilitado',
    D: 'Desabilitado',
    A: 'Archivado'
};
const ListRepositoriesFromTribeDTO = (repositories, organization, tribe, mockRepostories) => {
    const listRepositories = repositories.map(repository => {
        return {
            id: repository.id_repository,
            name: repository.name,
            tribe: tribe.name,
            organization: organization.name,
            coverage: repository.metric.coverage + '%',
            codeSmell: repository.metric.code_smells,
            bugs: repository.metric.bugs,
            vulnerabilities: repository.metric.vulnerabilities,
            hotspots: repository.metric.hotspots,
            verificationState: getVerificationState(repository.id_repository, mockRepostories),
            state: largeNameOfState(repository.state)
        };
    });
    return listRepositories;
};
const largeNameOfState = (state) => {
    switch (state) {
        case 'E':
            return nameState.E;
        case 'D':
            return nameState.D;
        case 'A':
            return nameState.A;
        default:
            return nameState.E;
    }
};
const getVerificationState = (idRepostory, repositoriesWithState) => {
    const repositoryMock = repositoriesWithState.find(repository => repository.id === idRepostory);
    if ((repositoryMock === null || repositoryMock === void 0 ? void 0 : repositoryMock.state) === 604)
        return 'Verificado';
    if ((repositoryMock === null || repositoryMock === void 0 ? void 0 : repositoryMock.state) === 605)
        return 'En espera';
    if ((repositoryMock === null || repositoryMock === void 0 ? void 0 : repositoryMock.state) === 606)
        return 'Aprobado';
    return 'Desconocido';
};
exports.default = { ListRepositoriesFromTribeDTO };
