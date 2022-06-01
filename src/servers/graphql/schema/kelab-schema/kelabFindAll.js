import { gql } from "@apollo/client";

export const kelabFindAll = gql`
query KelabFindAll {
  kelabFindAll {
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