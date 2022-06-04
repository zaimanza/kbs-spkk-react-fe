import { gql } from "@apollo/client";

export const kertasKerjaFindOneById = gql`
query KertasKerjaFindOneById($kertasKerjaFindOneByIdId: String!) {
  kertasKerjaFindOneById(id: $kertasKerjaFindOneByIdId) {
    _id
    kelab_id
    nama_program
    pengarah_program
    kluster_program
    tarikh_program
    email_pengarah
    nombor_matrik_pengarah
    nombor_tel_pengarah
    fakulti
    kertas_kerja_status
    s3_upload_url
  }
}
`