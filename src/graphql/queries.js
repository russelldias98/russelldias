/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = `query GetContactUs($id: ID!) {
  getContactUs(id: $id) {
    id
    name
    email
    description
  }
}
`;
export const listContactUss = `query ListContactUss(
  $filter: ModelContactUsFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactUss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      description
    }
    nextToken
  }
}
`;
