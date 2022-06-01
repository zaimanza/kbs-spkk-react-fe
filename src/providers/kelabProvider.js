

import { createSlice } from "@reduxjs/toolkit";

export const kelabSlice = createSlice({
    name: "kelab",
    initialState: {
        value: {
            kelab_email: "",
            kelab_id: "",
            kelab_nama: "",
            kelab_password: "",
            kelab_tel: "",
            _id: "",
            isMaster: false,
        },
    },
    reducers: {
        kelabLoginReducer: (state, action) => {
            if (action.payload.isMaster == null) {
                action.payload.isMaster = false
            }
            state.value = action.payload;
        },
        kelabLogoutReducer: (state, action) => {
            state.value = {
                kelab_email: "",
                kelab_id: "",
                kelab_nama: "",
                kelab_password: "",
                kelab_tel: "",
                _id: "",
                isMaster: false,
            };
        },
    },
});

export const { kelabLoginReducer, kelabLogoutReducer } = kelabSlice.actions;

export default kelabSlice.reducer;
