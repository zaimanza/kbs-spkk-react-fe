import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TableOne from '../components/TableOne'
import TableOneAdmin from '../components/TableOneAdmin'
import useKertasKerjaModule from '../modules/useKertasKerjaModule'

const DashboardPage = () => {

    const kelabProvider = useSelector((state) => state.kelab.value);
    const navigate = useNavigate();

    const [isCheck, setIsCheck] = useState([])
    const [titleCheck, setTitleCheck] = useState()
    const [getKertasKerjaListState, setKertasKerjaListState] = useState([])
    const { kelabKertasKerjaFindAllFunction, masterKertasKerjaFindAllFunction, masterUpdateKertasKerjaOneFunction } = useKertasKerjaModule()

    const fetchData = async () => {

        if (kelabProvider.isMaster === true) {
            const response = await masterKertasKerjaFindAllFunction()
            setKertasKerjaListState(response)
        } else {
            const response = await kelabKertasKerjaFindAllFunction({
                "kelabId": kelabProvider.kelab_id
            })
            setKertasKerjaListState(response)
        }

    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     console.log("check_table_state")
    //     console.log(isCheck)
    //     console.log(titleCheck)

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isCheck, titleCheck]);

    const changeKertasKerjaStatus = async (status) => {
        const returnData = await masterUpdateKertasKerjaOneFunction(status)
        // if success update
        if (returnData)
            fetchData();
    }

    const handleBukaKertasKerja = async () => {
        var numCounter = 0;
        isCheck.forEach((itemCheck) => {
            if (itemCheck === true) {
                numCounter = numCounter + 1
            }
        })

        if (numCounter > 1 || numCounter < 1) return


        // 
        const oneKertasKErja = getKertasKerjaListState[isCheck.indexOf(true)]
        console.log(oneKertasKErja._id)

        navigate(`/kertasKerja/${oneKertasKErja._id}`);
    }


    if (kelabProvider.isMaster === true) {
        return (
            <div className="py-8 px-8">
                <div className=" w-full space-y-8">
                    <TableOneAdmin
                        tableKey={"_id"}
                        isShowId={false}
                        isCheck={isCheck}
                        setIsCheck={setIsCheck}
                        titleCheck={titleCheck}
                        setTitleCheck={setTitleCheck}
                        isCheckboxOn={true}
                        titles={[
                            "kelab_id",
                            "nama_program",
                            "pengarah_program",
                            "kluster_program",
                            "tarikh_program",
                            "email_pengarah",
                            "nombor_matrik_pengarah",
                            "nombor_tel_pengarah",
                            "fakulti",
                            "status",
                        ]}
                        products={getKertasKerjaListState ?? []}
                        options={(<div>
                            <button
                                className="group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={() => handleBukaKertasKerja()}
                            >
                                {"Buka"}
                            </button>
                        </div>)}
                        changeKertasKerjaStatus={changeKertasKerjaStatus}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className="py-8 px-8">
                <div className=" w-full space-y-8">
                    <TableOne
                        tableKey={"_id"}
                        isShowId={false}
                        isCheck={isCheck}
                        setIsCheck={setIsCheck}
                        titleCheck={titleCheck}
                        setTitleCheck={setTitleCheck}
                        isCheckboxOn={true}
                        titles={[
                            "kelab_id",
                            "nama_program",
                            "pengarah_program",
                            "kluster_program",
                            "tarikh_program",
                            "email_pengarah",
                            "nombor_matrik_pengarah",
                            "nombor_tel_pengarah",
                            "fakulti",
                            "status",
                        ]}
                        products={getKertasKerjaListState ?? []}
                        options={(<div></div>)}
                    />
                </div>
            </div>
        )
    }
}

export default DashboardPage