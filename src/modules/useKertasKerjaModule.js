import { kertasKerjaAdd } from "../servers/graphql/schema";
import useGraphql from "../servers/graphql/useGraphql";

function useKertasKerjaModule() {
    const { query } = useGraphql()

    const kertasKerjaAddFunction = async (variables) => {
        const data = await query({
            query: kertasKerjaAdd,
            variables: { kertasKerja: variables }
        })

        return data?.kertasKerjaAdd
    }

    return {
        kertasKerjaAddFunction,
    }
}
export default useKertasKerjaModule