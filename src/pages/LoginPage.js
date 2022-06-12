import React, { useEffect, useState } from 'react'
import useKelabModule from '../modules/useKelabModule'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'
import BackgroundImage from '../bg_screen.jpg'
import { useSelector, useDispatch } from "react-redux"
import { kelabLoginReducer } from '../providers/kelabProvider'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [getKelabIdState, setKelabIdState] = useState("")
    const [getPasswordState, setPasswordState] = useState("")
    const { kelabLoginFunction } = useKelabModule()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const kelabProvider = useSelector((state) => state.kelab.value);

    useEffect(() => {
        if (kelabProvider.kelab_id !== "") {
            navigate("/home");
        } else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kelabProvider]);

    useEffect(() => {
        if (kelabProvider.kelab_id !== "") {
            navigate("/home");
        } else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleSubmit = async (e) => {
        const returnData = await kelabLoginFunction({
            "kelabId": getKelabIdState,
            "kelabPassword": getPasswordState
        });
        if (returnData) {
            dispatch(
                kelabLoginReducer(returnData)
            );
        }

    }

    return (
        <div className={`min-h-full h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-left`}
            style={{
                backgroundImage: "url(" + BackgroundImage + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-md w-full space-y-8">
                <AuthHeader
                    heading=""
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />

                <div className="mt-8">
                    <div className="-space-y-px">
                        <Input
                            handleChange={(e) => setKelabIdState(e.target.value)}
                            value={getKelabIdState}
                            labelText={"Nama ID"}
                            labelColor={"text-white"}
                            labelFor={"nama_id"}
                            id={"nama_id"}
                            name={"nama_id"}
                            type={"text"}
                            isRequired={true}
                            placeholder={"Nama ID"}
                        />
                        <Input
                            handleChange={(e) => setPasswordState(e.target.value)}
                            value={getPasswordState}
                            labelText={"Kata laluan"}
                            labelColor={"text-white"}
                            labelFor={"kata_laluan"}
                            id={"kata_laluan"}
                            name={"kata_laluan"}
                            type={"password"}
                            isRequired={true}
                            placeholder={"Kata laluan"}
                        />
                    </div>

                    <button
                        className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-xl font-medium rounded-md text-blue-600 bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white mt-10"
                        onClick={() => handleSubmit()}
                    >

                        {"Login"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default LoginPage