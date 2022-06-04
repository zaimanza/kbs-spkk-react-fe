import {
    kertasKerjaAdd,
    kelabKertasKerjaFindAll,
    kertasKerjaFindOneById,
    masterKertasKerjaFindAll,
    masterUpdateKertasKerjaOne,
    masterUpdateKomenKertasKerjaOne
} from "../servers/graphql/schema";
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

    const kelabKertasKerjaFindAllFunction = async (variables) => {
        const data = await query({
            query: kelabKertasKerjaFindAll,
            variables: variables
        })
        if (data) {
            data.kelabKertasKerjaFindAll = data?.kelabKertasKerjaFindAll.map((oneData) => {
                delete oneData.__typename;

                return oneData
            })
        }

        return data?.kelabKertasKerjaFindAll
    }

    const kertasKerjaFindOneByIdFunction = async (variables) => {
        const data = await query({
            query: kertasKerjaFindOneById,
            variables: variables
        })

        return data?.kertasKerjaFindOneById
    }

    const masterKertasKerjaFindAllFunction = async () => {
        const data = await query({
            query: masterKertasKerjaFindAll,
        })
        if (data) {
            data.masterKertasKerjaFindAll = data?.masterKertasKerjaFindAll.map((oneData) => {
                delete oneData.__typename;

                return oneData
            })
        }

        return data?.masterKertasKerjaFindAll
    }

    const masterUpdateKertasKerjaOneFunction = async (variables) => {
        const data = await query({
            query: masterUpdateKertasKerjaOne,
            variables: variables
        })

        return data?.masterUpdateKertasKerjaOne
    }

    const masterUpdateKomenKertasKerjaOneFunction = async (variables) => {
        const data = await query({
            query: masterUpdateKomenKertasKerjaOne,
            variables: variables
        })

        return data?.masterUpdateKomenKertasKerjaOne
    }

    return {
        kertasKerjaAddFunction,
        kelabKertasKerjaFindAllFunction,
        kertasKerjaFindOneByIdFunction,
        masterKertasKerjaFindAllFunction,
        masterUpdateKertasKerjaOneFunction,
        masterUpdateKomenKertasKerjaOneFunction,
    }
}
export default useKertasKerjaModule