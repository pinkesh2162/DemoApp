import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { userIdProps, errorTitle } from '../../constants';
import { inventoryManagement } from '../../apiServices/apiUrls';
import { GET } from '../../apiServices/apiServices';
import { InventoryState } from '../../types/inventoryTypes';

const initialState: InventoryState = {
    isLoading: false,
    error: null,
    editOnly: [],
    viewOnly: [],
    noOfInventory: 0,
};

export const getInventory = createAsyncThunk<any[], string, { rejectValue: string }>(
    'inventory/getInventory',
    async (userId: string, { rejectWithValue }) => {
        const url = `${inventoryManagement}${userIdProps}${userId}`;
        try {
            const inventoryResponse: any = await GET(url);
            // console.log("API Response:", inventoryResponse);
            if (inventoryResponse.Status === true) {
                return inventoryResponse.Data;
            } else {
                return rejectWithValue(inventoryResponse.Message || 'Failed to fetch inventory');
            }
        } catch (error: any) {
            const errorMessage = error?.message || 'Unknown error occurred!';
            // console.log("Error caught in API call:", errorMessage);
            Alert.alert(errorTitle, errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInventory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getInventory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.noOfInventory = action.payload.length;
                state.editOnly = action.payload.filter((item) => !item.isViewOnly);
                state.viewOnly = action.payload.filter((item) => item.isViewOnly);
            })
            .addCase(getInventory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch inventory';
            });
    },
});

export default inventorySlice.reducer;