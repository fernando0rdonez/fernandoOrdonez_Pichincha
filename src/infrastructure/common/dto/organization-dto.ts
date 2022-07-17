interface IOrganizationDTO {
  id?: string
  name: string
  status: number
}
export const listOrganizationDTO = (orgs: any[]): IOrganizationDTO[] => {
  const response = orgs.map(org => {
    return {
      id: org.id_organization,
      name: org.name,
      status: Number(org.status)
    }
  })
  return response
}

export const organizationDTO = (org: any): IOrganizationDTO => {
  return {
    id: org.id_organization,
    name: org.name,
    status: org.status
  }
}

export default { organizationDTO, listOrganizationDTO }
