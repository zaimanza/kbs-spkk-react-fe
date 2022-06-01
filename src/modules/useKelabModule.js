import { kelabAdd, kelabLogin } from "../servers/graphql/schema";
import useGraphql from "../servers/graphql/useGraphql";

function useKelabModule() {
    const { query } = useGraphql()

    const kelabAddFunction = async (variables) => {
        const data = await query(kelabAdd, { kelab: variables })

        return data?.kelabAdd
    }

    const kelabLoginFunction = async (variables) => {
        const data = await query(kelabLogin, variables)
        return data?.kelabLogin
    }

    return {
        kelabAddFunction,
        kelabLoginFunction,
    }
}
export default useKelabModule