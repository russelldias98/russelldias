/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelcontactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      email
      query
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelcontactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      email
      query
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelcontactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      email
      query
    }
  }
`;
