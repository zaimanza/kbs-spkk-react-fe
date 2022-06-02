import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TableOne from '../components/TableOne'
import TableOneAdmin from '../components/TableOneAdmin'
import useKertasKerjaModule from '../modules/useKertasKerjaModule'

const DashboardPage = () => {

    const kelabProvider = useSelector((state) => state.kelab.value);

    const [isCheck, setIsCheck] = useState([])
    const [titleCheck, setTitleCheck] = useState()
    const [getKertasKerjaListState, setKertasKerjaListState] = useState([])
    const { kelabKertasKerjaFindAllFunction, masterKertasKerjaFindAllFunction } = useKertasKerjaModule()

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
                        options={(<div></div>)}
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