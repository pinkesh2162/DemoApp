export interface InventoryState {
    isLoading: boolean;
    error: string | null;
    editOnly: any[];
    viewOnly: any[];
    noOfInventory: number;
}

export interface Item {
    name?: string;
    lastUpdatedAt?: string;
    [key: string]: any;
}

export interface RenderDataItemProps {
    item: Item;
    onInventoryTap: (item: Item) => void;
}

export type Items = {
    id: number;
    productName: string;
};

export interface RenderInventorySelectionProps {
    selectedLocation: string;
    isKeyboardOpen: boolean;
    onTapAddProduct: () => void;
}