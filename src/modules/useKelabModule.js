import { kelabAdd, kelabLogin } from "../servers/graphql/schema";
import { kelabFindAll } from "../servers/graphql/schema/kelab-schema/kelabFindAll";
import useGraphql from "../servers/graphql/useGraphql";

function useKelabModule() {
    const { query } = useGraphql()

    const kelabAddFunction = async (variables) => {
        const data = await query({
            query: kelabAdd,
            variables: { kelab: variables }
        })

        return data?.kelabAdd
    }

    const kelabLoginFunction = async (variables) => {
        const data = await query({
            query: kelabLogin,
            variables: variables
        })
        return data?.kelabLogin
    }

    const kelabFindAllFunction = async () => {
        var data = await query({
            query: kelabFindAll,
        })
        if (data) {
            data.kelabFindAll = data?.kelabFindAll.map((oneData) => {
                delete oneData.__typename;
                delete oneData.isMaster;

                return oneData
            })
        }
        return data?.kelabFindAll
    }

    return {
        kelabAddFunction,
        kelabLoginFunction,
        kelabFindAllFunction,
    }
}
export default useKelabModule