import { gql } from "@apollo/client";

export const kelabLogin = gql`
mutation KelabLogin($kelabId: String!, $kelabPassword: String!) {
  kelabLogin(kelab_id: $kelabId, kelab_password: $kelabPassword) {
    _id
    kelab_id
    kelab_nama
    kelab_tel
    kelab_email
    kelab_password
    isMaster
  }
}
`