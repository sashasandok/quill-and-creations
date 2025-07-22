import { create } from 'zustand'

interface ThemeState {
  isDarkTheme: boolean
  setIsDarkTheme: (isDark: boolean) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  isDarkTheme: false,
  setIsDarkTheme: (isDark: boolean) => set(() => ({ isDarkTheme: isDark })),
}))
