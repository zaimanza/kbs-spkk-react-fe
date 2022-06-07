import { gql } from "@apollo/client";

export const kelabAdd = gql`
mutation KelabAdd($kelab: kelabReq!) {
  kelabAdd(kelab: $kelab) {
    _id
    kelab_id
    kelab_nama
    kelab_tel
    kelab_email
    kelab_password
    isMaster
    s3_upload_url
  }
}
`