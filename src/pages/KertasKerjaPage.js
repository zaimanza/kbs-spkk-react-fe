import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import useKertasKerjaModule from '../modules/useKertasKerjaModule'

const KertasKerjaPage = () => {
    const { id } = useParams()

    const [getPdfUrl, setPdfUrl] = useState()

    const { kertasKerjaFindOneByIdFunction } = useKertasKerjaModule()

    const fetchData = async () => {

        console.log("in_one_kertas_kerja_page")
        console.log(id)
        const response = await kertasKerjaFindOneByIdFunction({
            "kertasKerjaFindOneByIdId": id
        })
        console.log(response.s3_upload_url)
        setPdfUrl(response.s3_upload_url)

    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    // function changePage(offSet) {
    //     setPageNumber(prevPageNumber => prevPageNumber + offSet);
    // }

    // function changePageBack() {
    //     changePage(-1)
    // }

    // function changePageNext() {
    //     changePage(+1)
    // }

    return (
        <div className="App">
            {/* <div className="">
                <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="600" pageNumber={pageNumber} />
                </Document>
                <p> Page {pageNumber} of {numPages}</p>
                {pageNumber > 1 &&
                    <button onClick={changePageBack}>Previous Page</button>
                }
                {
                    pageNumber < numPages &&
                    <button onClick={changePageNext}>Next Page</button>
                }
            </div> */}

            <div className="py-8 px-8 bg-black">
                <div className=" w-full space-y-8">
                    <Document
                        // file="/sample.pdf"
                        file={{
                            url: getPdfUrl,
                        }}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            )
                        )}
                    </Document>
                </div>
                {/* </center> */}
            </div>
        </div>
    )
}

export default KertasKerjaPage