import { create } from 'zustand';

interface LocationPickerStoreTypes {
    selectedMenuItem: string;
    setSelectedMenuItem: (selectedMenuItem: string) => void;
    showLocationPicker: boolean;
    setShowLocationPicker: (showLocationPicker: boolean) => void;
}

export const useLocationPickerStore = create<LocationPickerStoreTypes>((set) => ({
    selectedMenuItem: '',
    showLocationPicker: false,
    setShowLocationPicker: (showLocationPicker) => set({ showLocationPicker: !showLocationPicker }),
    setSelectedMenuItem: (selectedMenuItem) => set({ selectedMenuItem }),
}));
