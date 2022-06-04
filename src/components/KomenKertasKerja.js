import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextArea from '../components/TextArea';
import useKertasKerjaModule from '../modules/useKertasKerjaModule';

const KomenKertasKerja = ({ id, fetchData, getKErtasKerjaData }) => {

    const kelabProvider = useSelector((state) => state.kelab.value);
    const { masterUpdateKomenKertasKerjaOneFunction } = useKertasKerjaModule()

    const [getKomenState, setKomenState] = useState("")

    const handleSubmit = async () => {
        await masterUpdateKomenKertasKerjaOneFunction({
            "komen": getKomenState,
            "id": id
        })
        fetchData()
    }
    return (
        <div className="sticky top-0 z-50 mt-8 p-8 w-[36rem] h-[20rem] mx-8 bg-white rounded-md">

            {
                (!(getKErtasKerjaData?.komen) && kelabProvider.isMaster === true) ?
                    <div>
                        <div className="-space-y-px">
                            <TextArea
                                handleChange={(e) => setKomenState(e.target.value)}
                                value={getKomenState}
                                labelText={"Komen"}
                                labelFor={"komen"}
                                id={"komen"}
                                name={"komen"}
                                type={"text"}
                                isRequired={true}
                                placeholder={"Komen"}
                            />
                        </div>

                        <button
                            className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
                            onClick={() => handleSubmit()}
                        >
                            {"Hantar"}
                        </button>
                    </div>
                    : <div>
                        <div
                            className='pb-2'
                        >
                            {"Komen"}
                        </div><div
                            className='content-start text-left items-start'
                        >
                            {getKErtasKerjaData?.komen ?? "Tiada Komen"}
                        </div>
                    </div>
            }
        </div>
    )
}

export default KomenKertasKerja