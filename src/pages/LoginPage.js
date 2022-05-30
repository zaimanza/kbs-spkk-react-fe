import React, { useState } from 'react'
import AuthHeader from '../components/AuthHeader'
import Input from '../components/Input'

const LoginPage = () => {
    const [getEmailState, setEmailState] = useState("");
    const [getPasswordState, setPasswordState] = useState("");


    const handleSubmit = (e) => {

    }

    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <AuthHeader
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />

                <div className="mt-8">
                    <div className="-space-y-px">
                        <Input
                            handleChange={(e) => setEmailState(e.target.value)}
                            value={getEmailState}
                            labelText={"Nama ID"}
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
                            labelFor={"kata_laluan"}
                            id={"kata_laluan"}
                            name={"kata_laluan"}
                            type={"password"}
                            isRequired={true}
                            placeholder={"Kata laluan"}
                        />
                    </div>

                    <button
                        className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
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