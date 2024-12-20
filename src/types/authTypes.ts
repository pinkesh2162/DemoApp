interface Currency {
    currencyId: string;
    symbol: string;
    thousandSeparator: string;
    decimalSeparator: string;
    locationOfSymbol: string;
}

export interface User {
    id: number;
    StoreId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    userRoleId: number;
    StoreName: string;
    StoreLanguageId: string;
    UserType: number;
    currencyId: string;
    currencySymbol: Currency;
    currency: Currency;
    totalInventory: string;
    isOnboardingFilled: number;
    isFirstUser: string;
    storeTypeId: string;
    jobTitle: string;
    countryId: string;
    isLoginWithMobile: string;
    isMillumConnected: number;
    isSapAribaConnected: number;
    hasUnreadNotification: number;
    isLightspeedConnected: number;
}

export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    apiKey: string | null;
    error: string | null;
    forgetPasswordData: object | null;
}  