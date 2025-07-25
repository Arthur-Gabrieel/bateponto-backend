import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Hook que retorna 'light' ou 'dark' dependendo do tema do sistema.
 */
export function useColorScheme() {
  return _useColorScheme();
}
