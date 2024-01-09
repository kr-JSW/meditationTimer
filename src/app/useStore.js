import { create } from 'zustand';
import { backImages } from './constants';

const useStore = create((set) => ({
    mode: true,
    changeMode: () => set((state) => ({ mode: !state.mode })),
    modeBackground: backImages.bg1,
    modeBackgroundChange: () =>
        set((state) => ({
            modeBackground: state.mode ? backImages.bg1 : backImages.bg2,
        })),
}));

export default useStore;
