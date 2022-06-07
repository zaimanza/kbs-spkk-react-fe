import React from 'react'
import { useSelector } from 'react-redux'
import InputDisable from '../components/InputDisable'

const ProfilPage = ({ setTabIndex }) => {

    const kelabProvider = useSelector((state) => state.kelab.value)


    console.log(kelabProvider)
    return (
        <div className="py-8 px-8">
            <div className=" w-full space-y-8">
                <div className="mb-10">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        {"PROFIL"}
                    </h2>
                </div>
                <div className="mt-8">
                    {kelabProvider?.s3_upload_url && (
                        <img
                            alt=""
                            className="object-contain "
                            src={kelabProvider?.s3_upload_url} />
                    )}
                    <InputDisable
                        handleChange={(e) => { }}
                        value={kelabProvider.kelab_id}
                        labelText={"ID"}
                        labelFor={"kelab_id"}
                        id={"kelab_id"}
                        name={"kelab_id"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"ID"}
                    />
                    <InputDisable
                        handleChange={(e) => { }}
                        value={kelabProvider.kelab_email}
                        labelText={"Email"}
                        labelFor={"kelab_email"}
                        id={"kelab_email"}
                        name={"kelab_email"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Email"}
                    />
                    <InputDisable
                        handleChange={(e) => { }}
                        value={kelabProvider.kelab_nama}
                        labelText={"Nama"}
                        labelFor={"kelab_nama"}
                        id={"kelab_nama"}
                        name={"kelab_nama"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nama"}
                    />
                    <InputDisable
                        handleChange={(e) => { }}
                        value={kelabProvider.kelab_password}
                        labelText={"Kata Laluan"}
                        labelFor={"kelab_password"}
                        id={"kelab_password"}
                        name={"kelab_password"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Kata Laluan"}
                    />
                    <InputDisable
                        handleChange={(e) => { }}
                        value={kelabProvider.kelab_tel}
                        labelText={"Nombor Telefon"}
                        labelFor={"kelab_tel"}
                        id={"kelab_tel"}
                        name={"kelab_tel"}
                        type={"text"}
                        isRequired={true}
                        placeholder={"Nombor Telefon"}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfilPage