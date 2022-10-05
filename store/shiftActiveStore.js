import create from 'zustand'

const useShiftActiveStore = create((set) => ({
    shiftActive: "A",
    setShiftActive: (payload) => set(() => ({ shiftActive: payload })),
}))

export default useShiftActiveStore