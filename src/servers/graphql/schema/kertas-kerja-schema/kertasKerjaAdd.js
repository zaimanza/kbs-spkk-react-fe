import { gql } from "@apollo/client";

export const kertasKerjaAdd = gql`
mutation KertasKerjaAdd($kertasKerja: kertasKerjaReq!) {
  kertasKerjaAdd(kertasKerja: $kertasKerja) {
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
  }
}
`