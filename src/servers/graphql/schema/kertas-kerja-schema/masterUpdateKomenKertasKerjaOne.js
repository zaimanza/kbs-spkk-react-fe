import { gql } from "@apollo/client";

export const masterUpdateKomenKertasKerjaOne = gql`
query MasterUpdateKomenKertasKerjaOne($komen: String!, $id: String!) {
  masterUpdateKomenKertasKerjaOne(komen: $komen, _id: $id) {
    _id
    kelab_id
    nama_program
    pengarah_program
    tarikh_program
    email_pengarah
    nombor_matrik_pengarah
    nombor_tel_pengarah
    fakulti
    kertas_kerja_status
    s3_upload_url
    komen
  }
}
`