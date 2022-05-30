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

                <div className="mt-8 space-y-6">
                    <div className="-space-y-px">
                        <Input
                            handleChange={(e) => setEmailState(e.target.value)}
                            value={getEmailState}
                            labelText={"Email address"}
                            labelFor={"email-address"}
                            id={"email-address"}
                            name={"email"}
                            type={"email"}
                            isRequired={true}
                            placeholder={"Email address"}
                        />
                        <Input
                            handleChange={(e) => setPasswordState(e.target.value)}
                            value={getPasswordState}
                            labelText={"Password"}
                            labelFor={"password"}
                            id={"password"}
                            name={"password"}
                            type={"password"}
                            isRequired={true}
                            placeholder={"password"}
                        />
                    </div>


                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <label className="font-medium text-purple-600 hover:text-purple-500">
                                Forgot your password?
                            </label>
                        </div>
                    </div>
                    <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
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