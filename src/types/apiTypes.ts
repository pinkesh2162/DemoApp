export interface ApiRequestBody {
    [key: string]: any;
}

export interface ApiResponse {
    StatusCode?: number;
    message?: string;
    data?: any;
}
