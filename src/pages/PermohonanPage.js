import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Input from '../components/Input'
import useKertasKerjaModule from '../modules/useKertasKerjaModule'
import useAwsS3 from '../services/useAwsS3'

const PermohonanPage = ({ setTabIndex }) => {
    const { kertasKerjaAddFunction } = useKertasKerjaModule()
    const [getNamaProgramState, setNamaProgramState] = useState("")
    const [getPengarahProgramState, setPengarahProgramState] = useState("")
    const [getKlusterProgramState, setKlusterProgramState] = useState("")
    const [getTarikhProgramState, setTarikhProgramState] = useState("")
    const [getEmailPengarahState, setEmailPengarahState] = useState("")
    const [getNomborMatrikPengarahState, setNomborMatrikPengarahState] = useState("")
    const [getNomborTelPengarahState, setNomborTelPengarahState] = useState("")
    const [getFakultiState, setFakultiState] = useState("")
    const [getS3UploadUrl, setS3UploadUrl] = useState("")

    const kelabProvider = useSelector((state) => state.kelab.value)
    const { awsS3UploadFile } = useAwsS3()

    const handleSubmit = async () => {

        // await kelabFindAllFunction()
        if (getNamaProgramState !== "" &&
            getPengarahProgramState !== "" &&
            getKlusterProgramState !== "" &&
            getTarikhProgramState !== "" &&
            getEmailPengarahState !== "" &&
            getNomborMatrikPengarahState !== "" &&
            getNomborTelPengarahState !== "" &&
            getFakultiState !== "" &&
            getS3UploadUrl !== "") {

            const savedKertasKerja = await kertasKerjaAddFunction({
                "kelab_id": kelabProvider.kelab_id,
                "nama_program": getNamaProgramState,
                "pengarah_program": getPengarahProgramState,
                "kluster_program": getKlusterProgramState,
                "tarikh_program": getTarikhProgramState,
                "email_pengarah": getEmailPengarahState,
                "nombor_matrik_pengarah": getNomborMatrikPengarahState,
                "nombor_tel_pengarah": getNomborTelPengarahState,
                "fakulti": getFakultiState,
                "s3_upload_url": getS3UploadUrl,
            });

            if (savedKertasKerja) {
                setNamaProgramState("")
                setPengarahProgramState("")
                setKlusterProgramState("")
                setTarikhProgramState("")
                setEmailPengarahState("")
                setNomborMatrikPengarahState("")
                setNomborTelPengarahState("")
                setFakultiState("")
                setTabIndex(0)
            }
        }
    }

    const uploadPDF = async (e) => {
        try {
            console.log("start_upload_pdf")
            const file = e.target.files[0];
            const bodyFormData = new FormData();
            bodyFormData.append('file', file);

            var reader = new FileReader();
            reader.onload = await async function () {
                setS3UploadUrl(await awsS3UploadFile(file))
                // setValue(imageField, reader.result)
            }
            reader.readAsDataURL(e.target.files[0]);
        } catch (err) {
        }
    }

    return (
        <div className="py-8 px-8">
            <div className=" w-full">
                <div className="">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        {"PERMOHONAN KERTAS KERJA"}
                    </h2>
                </div>
                <div className="">
                    <Input
                        handleChange={(e) => setNamaProgramState(e.target.value)}
                        value={getNamaProgramState}
                        labelText={"Nama Program"}
                        labelFor={"nama_program"}
                        id={"nama_program"}
                        name={"nama_program"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nama Program"}
                    />
                    <Input
                        handleChange={(e) => setPengarahProgramState(e.target.value)}
                        value={getPengarahProgramState}
                        labelText={"Pengarah Program"}
                        labelFor={"pengarah_program"}
                        id={"pengarah_program"}
                        name={"pengarah_program"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Pengarah Program"}
                    />
                    <Input
                        handleChange={(e) => setKlusterProgramState(e.target.value)}
                        value={getKlusterProgramState}
                        labelText={"Kluster Program"}
                        labelFor={"kluster_program"}
                        id={"kluster_program"}
                        name={"kluster_program"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Kluster Program"}
                    />
                    <Input
                        handleChange={(e) => setTarikhProgramState(e.target.value)}
                        value={getTarikhProgramState}
                        labelText={"Tarikh Program"}
                        labelFor={"tarikh_program"}
                        id={"tarikh_program"}
                        name={"tarikh_program"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Tarikh Program"}
                    />
                    <Input
                        handleChange={(e) => setEmailPengarahState(e.target.value)}
                        value={getEmailPengarahState}
                        labelText={"Email Pengarah"}
                        labelFor={"email_pengarah"}
                        id={"email_pengarah"}
                        name={"email_pengarah"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Email Pengarah"}
                    />
                    <Input
                        handleChange={(e) => setNomborMatrikPengarahState(e.target.value)}
                        value={getNomborMatrikPengarahState}
                        labelText={"Nombor Matrik Pengarah"}
                        labelFor={"nombor_matrik_pengarah"}
                        id={"nombor_matrik_pengarah"}
                        name={"nombor_matrik_pengarah"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nombor Matrik Pengarah"}
                    />
                    <Input
                        handleChange={(e) => setNomborTelPengarahState(e.target.value)}
                        value={getNomborTelPengarahState}
                        labelText={"Nombor Telefon Pengarah"}
                        labelFor={"nombor_tel_pengarah"}
                        id={"nombor_tel_pengarah"}
                        name={"nombor_tel_pengarah"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nombor Telefon Pengarah"}
                    />
                    <Input
                        handleChange={(e) => setFakultiState(e.target.value)}
                        value={getFakultiState}
                        labelText={"Fakulti"}
                        labelFor={"fakulti"}
                        id={"fakulti"}
                        name={"fakulti"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Fakulti"}
                    />

                    {"Kertas Kerja (.PDF): "}
                    <input type="file" onChange={(e) => uploadPDF(e)} />

                    <div className='grid grid-cols-2 gap-2'>
                        <button
                            className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
                            onClick={() => handleSubmit()}
                        >
                            {"Tambah"}
                        </button>

                        <button
                            className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-10"
                            onClick={() => {
                                setNamaProgramState("")
                                setPengarahProgramState("")
                                setKlusterProgramState("")
                                setTarikhProgramState("")
                                setEmailPengarahState("")
                                setNomborMatrikPengarahState("")
                                setNomborTelPengarahState("")
                                setFakultiState("")
                            }}
                        >
                            {"Reset"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermohonanPage