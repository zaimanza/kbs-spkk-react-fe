import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import TableOne from '../components/TableOne'
import useKelabModule from '../modules/useKelabModule'
import useAwsS3 from '../services/useAwsS3'

const PendaftaranPage = () => {
    const { kelabAddFunction, kelabFindAllFunction } = useKelabModule()
    const [getKelabIdState, setKelabIdState] = useState("")
    const [getKelabNamaState, setKelabNamaState] = useState("")
    const [getKelabTelState, setKelabTelState] = useState("")
    const [getKelabEmailState, setKelabEmailState] = useState("")
    const [getKelabPasswordState, setKelabPasswordState] = useState("")
    const [getKelabListState, setKelabListState] = useState([])
    const [isCheck, setIsCheck] = useState([])
    const [titleCheck, setTitleCheck] = useState()
    const { awsS3UploadFile } = useAwsS3()
    // eslint-disable-next-line no-unused-vars
    const [getS3UploadUrl, setS3UploadUrl] = useState("")
    const [getImageViewData, setImageViewData] = useState("")

    var [getimageFileInput, setimageFileInput] = useState(null)

    const fetchData = async () => {
        const response = await kelabFindAllFunction()
        setKelabListState(response)
        // ...
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async () => {

        // await kelabFindAllFunction()
        if (getKelabIdState !== "" &&
            getKelabNamaState !== "" &&
            getKelabTelState !== "" &&
            getKelabEmailState !== "" &&
            getKelabPasswordState !== "") {

            const savedKelab = await kelabAddFunction({
                "kelab_id": getKelabIdState,
                "kelab_nama": getKelabNamaState,
                "kelab_tel": getKelabTelState,
                "kelab_email": getKelabEmailState,
                "kelab_password": getKelabPasswordState,
                "s3_upload_url": getS3UploadUrl,
            });
            if (savedKelab) {
                setKelabIdState("")
                setKelabNamaState("")
                setKelabTelState("")
                setKelabEmailState("")
                setKelabPasswordState("")
                fetchData();
                setimageFileInput(null)
                setImageViewData("")
            }

        }
    }

    const uploadImg = async (e) => {
        try {
            console.log("start_upload_pdf")
            const file = e.target.files[0];
            const bodyFormData = new FormData();
            bodyFormData.append('file', file);

            var reader = new FileReader();
            reader.onload = await async function () {
                setS3UploadUrl(await awsS3UploadFile(file))
                setImageViewData(reader.result)
                // setValue(imageField, reader.result)
            }
            reader.readAsDataURL(e.target.files[0])
            // setimageFileInput(e.target.files[0])
        } catch (err) {
        }
    }
    return (
        <div className="py-8 px-8">
            <div className=" w-full space-y-8">
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
                        type={"password"}
                        isRequired={true}
                        placeholder={"Kata laluan"}
                    />


                    {"Gambar profil (.png): "}
                    <input
                        type="file"
                        // value={getimageFileInput}
                        onChange={(e) => uploadImg(e)}

                    />
                    {getImageViewData && (

                        <img className=" object-cover w-72 h-72 mr-16 rounded-full" src={getImageViewData} alt="profile" />
                    )}

                    <button
                        className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
                        onClick={() => handleSubmit()}
                    >

                        {"Tambah"}
                    </button>
                </div>

                <TableOne
                    tableKey={"_id"}
                    isShowId={false}
                    isCheck={isCheck}
                    setIsCheck={setIsCheck}
                    titleCheck={titleCheck}
                    setTitleCheck={setTitleCheck}
                    isCheckboxOn={true}
                    titles={[
                        // "id",
                        "Kelab ID",
                        "Kelab Nama",
                        "Kelab Tel",
                        "Kelab Email",
                        "Kelab Kata Laluan",
                    ]}
                    products={getKelabListState ?? []}
                    options={(<div></div>)}
                />

            </div>
        </div>
    )
}

export default PendaftaranPage