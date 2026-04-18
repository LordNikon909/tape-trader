import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
  currentTape: null,
  isPlaying: false,
  currentTime: 0,
  setTape: (tape) => set({ currentTape: tape, isPlaying: true }),
  setIsPlaying: (bool) => set({ isPlaying: bool }),
  setCurrentTime: (time) => set({ currentTime: time }),
}));