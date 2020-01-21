/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactUs = `mutation CreateContactUs(
  $input: CreateContactUsInput!
  $condition: ModelContactUsConditionInput
) {
  createContactUs(input: $input, condition: $condition) {
    id
    name
    email
    description
  }
}
`;
export const updateContactUs = `mutation UpdateContactUs(
  $input: UpdateContactUsInput!
  $condition: ModelContactUsConditionInput
) {
  updateContactUs(input: $input, condition: $condition) {
    id
    name
    email
    description
  }
}
`;
export const deleteContactUs = `mutation DeleteContactUs(
  $input: DeleteContactUsInput!
  $condition: ModelContactUsConditionInput
) {
  deleteContactUs(input: $input, condition: $condition) {
    id
    name
    email
    description
  }
}
`;
