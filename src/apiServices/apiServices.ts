import { axiosInstance } from './interceptors';
import { ApiResponse, ApiRequestBody } from '../types/apiTypes';

export const POST = async (url: string, requestBody: ApiRequestBody): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.post(url, requestBody);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

export const GET = async (url: string, headers: any = null): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.get(url, { headers });
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

export const PUT = async (url: string, requestBody: ApiRequestBody): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.put(url, requestBody);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

export const PATCH = async (url: string, requestBody: ApiRequestBody): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.patch(url, requestBody);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

export const DELETE = async (url: string, requestBody: ApiRequestBody): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.delete(url, { data: requestBody });
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

const handleError = (error: any): ApiResponse => {
    return error?.response?.data || { message: error.message };
};
