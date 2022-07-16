interface IOrganizationDTO {
    id: string;
    name: string;
}
export const organizationDTO = (org: any): IOrganizationDTO => {
  return {
    id: org.id,
    name: org.name
  }
}
