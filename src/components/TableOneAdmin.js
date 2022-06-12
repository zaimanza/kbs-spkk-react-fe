import React, { useEffect } from 'react'
export default function TableOneAdmin({ isCheck, setIsCheck, titleCheck, setTitleCheck, titles, products, options, isCheckboxOn, tableKey, isShowId, changeKertasKerjaStatus }) {
    const onCheckboxClick = (e) => {
        const { name, id, checked } = e.target
        if (name === "allSelect") {
            if (typeof setIsCheck === "function") setIsCheck(isCheck.map(() => checked))

            if (typeof setTitleCheck === "function") setTitleCheck(checked)
        }
        else {
            let dataState
            for (const data of isCheck) {
                if (data === true) {
                    dataState = true
                    break;
                }
                if (data === false) {
                    dataState = false
                    break;
                }
            }
            if (typeof (dataState) !== "undefined" && dataState !== null) {
                //set title checkbox
                if (dataState === true) {
                    if (typeof setTitleCheck === "function") setTitleCheck(false)
                }
            }

            let tempCheckStates = isCheck
            tempCheckStates[id] = checked
            if (typeof setIsCheck === "function") setIsCheck(isCheck.map((state, index) => {
                if (index === id) { return checked }
                else { return state }
            }))
        }
    }

    useEffect(() => {
        let tempCheckArray = []
        products.forEach(() => {
            tempCheckArray.push(false)
        });
        if (typeof setTitleCheck === "function") setTitleCheck(false)
        if (typeof setIsCheck === "function") setIsCheck(tempCheckArray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {
                (
                    ((typeof isShowId === 'undefined' || isShowId == null) && (products.length > 0 ? products[0].length : 0) > titles.length) ||
                    (isShowId === false && (products.length > 0 ? products[0]?.toString().length : 0) > titles.length) ||
                    (isShowId === true && (products.length > 0 ? products[0]?.toString().length : 0) === titles.length)
                ) ? (
                    <div className="shadow-md bg-white w-[90rem]">
                        {options ? (
                            <div className="w-[12rem] p-4 bg-white rounded-t-md">
                                {options}
                            </div>
                        ) : null}
                        <div className={`overflow-x-scroll ${options ? "" : "rounded-t-md"}`}>

                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                {titles ? (
                                    <thead className="text-sm text-gray-700 capitalize bg-white">
                                        <tr>
                                            {isCheckboxOn && (titleCheck === false || titleCheck) && (typeof setTitleCheck === "function") ? (
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="checkbox-all-search"
                                                            type="checkbox"
                                                            name="allSelect"
                                                            checked={titleCheck || false}
                                                            onChange={onCheckboxClick}
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                            ) : null}
                                            {titles?.map((title) => (
                                                <th key={title} scope="col" className="px-6 py-3">
                                                    {title}
                                                </th>))}
                                        </tr>
                                    </thead>
                                ) : null}
                                {products ? (
                                    <tbody>
                                        {products?.map((product, index) => {
                                            let columns = []

                                            for (const [key, value] of Object.entries(product)) {
                                                //if isShowId 
                                                if (key === tableKey && isShowId && key !== "kertas_kerja_status" && key !== "s3_upload_url" && key !== "komen") {
                                                    columns.push((
                                                        <th key={key} scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                            {value}
                                                        </th>)
                                                    )
                                                }
                                                else if (key !== tableKey && key !== "kertas_kerja_status" && key !== "s3_upload_url" && key !== "komen") {
                                                    columns.push((
                                                        <th key={key} scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                            {value}
                                                        </th>)
                                                    )
                                                }
                                            }
                                            return (
                                                <tr key={product._id} className="text-sm bg-white border-b  hover:bg-gray-50 ">
                                                    {/* isCheckBox? */}
                                                    {isCheckboxOn && isCheck && (typeof setIsCheck === "function") ? (
                                                        <td className="w-4 p-4">
                                                            <div className="flex items-center">
                                                                <input
                                                                    id={index}
                                                                    name={product[tableKey]}
                                                                    type="checkbox"
                                                                    onChange={onCheckboxClick}
                                                                    checked={isCheck[index] || false}
                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                                />
                                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                            </div>
                                                        </td>
                                                    ) : null}
                                                    {columns?.map((column) => column)}
                                                    {
                                                        !(product.kertas_kerja_status) ?
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                                                    <button onClick={
                                                                        () => changeKertasKerjaStatus({
                                                                            kertasKerjaStatus: "decline",
                                                                            id: product._id,
                                                                        })
                                                                    } type="button" className="rounded-l inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-sm leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">Decline</button>
                                                                    <button onClick={
                                                                        () => changeKertasKerjaStatus({
                                                                            kertasKerjaStatus: "accepted",
                                                                            id: product._id,
                                                                        })
                                                                    } type="button" className=" rounded-r inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out">Accept</button>
                                                                </div>
                                                            </th>
                                                            : <th scope="row" className={`px-6 py-4 font-medium ${product.kertas_kerja_status === "accepted" ? "text-green-900" : "text-red-900"}  whitespace-nowrap`}>
                                                                {product.kertas_kerja_status ?? ""}
                                                            </th>
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                ) : null}
                            </table>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );


}
