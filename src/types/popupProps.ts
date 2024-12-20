import { Item } from "./inventoryTypes";

export interface NoInternetConnectionPopUpRef {
    openModal: () => void;
    closeModal: () => void;
}

export interface CustomAlertProps {
    onOkButtonTap?: () => void;
    onCancelButtonTap?: () => void;
    alertBody?: string;
    okButtonTitle?: string;
    okButtonTitleColor?: string;
    cancelButtonTitle?: string;
    cancelButtonTitleColor?: string;
    isOkShow?: boolean;
    isLeftRightButton?: boolean;
}

export interface ConfirmationPopupProps {
    modalVisible: boolean;
    alertBody: string;
    isOkShow?: boolean;
    isLeftRightButton?: boolean;
    okButtonTitle?: string;
    cancelButtonTitle?: string;
    onOkButtonTap?: () => void;
    onCancelButtonTap?: () => void;
    onClose?: () => void;
}

export interface SectionData {
    title?: string;
    name?: string;
    image: any;
}

export interface AddItemAndTransferProps {
    isTransferDisable: boolean;
    stockCountItem?: { lastMatchedStockCount?: boolean };
    onPress: (index: number) => void;
    title?: string;
    ref: any;
}

export interface InventoryListProps {
    onPress?: (selectedLocation: string, index: number) => void;
    ref: any;
    title?: string;
    inventoryArray?: [];
}

export interface AddItemAndTransferRef {
    modalOpen: () => void;
    modalClose: () => void;
}
