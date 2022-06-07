
// import imageCompression from 'browser-image-compression';
import { kertasKerjaS3UploadUrl } from '../servers/graphql/schema';
import useGraphql from '../servers/graphql/useGraphql';
// import imageCompression from 'browser-image-compression';

const useAwsS3 = () => {
    const { query } = useGraphql()

    const awsS3UploadFile = async (file) => {
        console.log("start_upload_url")
        const data = await query({
            query: kertasKerjaS3UploadUrl,
        });
        console.log("pass_upload_url")
        //put to aws
        await fetch(data.kertasKerjaS3UploadUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: file
        }).catch(error => {
            // enqueueSnackbar("There's an error", error);
            console.error('There was an error!', error);
        })

        const awsFileUrl = data.kertasKerjaS3UploadUrl.split('?')[0]
        console.log("file_result_success_save");
        console.log(awsFileUrl)

        return awsFileUrl
    }

    return {
        awsS3UploadFile,
    }
}

export default useAwsS3