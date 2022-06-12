import { gql } from "@apollo/client";

export const kertasKerjaAdd = gql`
mutation KertasKerjaAdd($kertasKerja: kertasKerjaReq!) {
  kertasKerjaAdd(kertasKerja: $kertasKerja) {
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