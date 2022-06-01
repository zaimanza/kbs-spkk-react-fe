import React, { useState } from 'react'
import Input from '../components/Input'
import useKelabModule from '../modules/useKelabModule'

const DashboardPage = () => {
    const { kelabAddFunction } = useKelabModule()
    const [getKelabIdState, setKelabIdState] = useState("")
    const [getKelabNamaState, setKelabNamaState] = useState("")
    const [getKelabTelState, setKelabTelState] = useState("")
    const [getKelabEmailState, setKelabEmailState] = useState("")
    const [getKelabPasswordState, setKelabPasswordState] = useState("")

    const handleSubmit = async () => {
        if (getKelabIdState !== "" &&
            getKelabNamaState !== "" &&
            getKelabTelState !== "" &&
            getKelabEmailState !== "" &&
            getKelabPasswordState !== "") {

            const returnData = await kelabAddFunction({
                "kelab_id": getKelabIdState,
                "kelab_nama": getKelabNamaState,
                "kelab_tel": getKelabTelState,
                "kelab_email": getKelabEmailState,
                "kelab_password": getKelabPasswordState,
            });
            if (returnData) {
            }

        }
    }
    return (
        <div className="py-8 px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="mb-10">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        {"DAFTAR KELAB BARU"}
                    </h2>
                </div>

                <div className="mt-8">
                    <Input
                        handleChange={(e) => setKelabIdState(e.target.value)}
                        value={getKelabIdState}
                        labelText={"Nama ID"}
                        labelFor={"nama_id"}
                        id={"nama_id"}
                        name={"nama_id"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nama ID"}
                    />
                    <Input
                        handleChange={(e) => setKelabNamaState(e.target.value)}
                        value={getKelabNamaState}
                        labelText={"Nama Kelab"}
                        labelFor={"kelab_nama"}
                        id={"kelab_nama"}
                        name={"kelab_nama"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nama Kelab"}
                    />
                    <Input
                        handleChange={(e) => setKelabTelState(e.target.value)}
                        value={getKelabTelState}
                        labelText={"Nombor Telefon"}
                        labelFor={"kelab_tel"}
                        id={"kelab_tel"}
                        name={"kelab_tel"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nombor Telefon"}
                    />
                    <Input
                        handleChange={(e) => setKelabEmailState(e.target.value)}
                        value={getKelabEmailState}
                        labelText={"Email"}
                        labelFor={"kelab_email"}
                        id={"kelab_email"}
                        name={"kelab_email"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Email"}
                    />
                    <Input
                        handleChange={(e) => setKelabPasswordState(e.target.value)}
                        value={getKelabPasswordState}
                        labelText={"Kata laluan"}
                        labelFor={"kelab_password"}
                        id={"kelab_password"}
                        name={"kelab_password"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Kata laluan"}
                    />

                    <button
                        className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        onClick={() => handleSubmit()}
                    >

                        {"Tambah"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DashboardPage