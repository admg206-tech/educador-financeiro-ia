/**
 * Utilitários para gerenciamento seguro de localStorage
 */

export function getStorageItem<T>(
  key: string,
  defaultValue?: T,
): T | undefined {
  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : defaultValue
  } catch (error) {
    console.warn(`Failed to read storage key: ${key}`, error)
    return defaultValue
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn(`Failed to write storage key: ${key}`, error)
  }
}

export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.warn(`Failed to remove storage key: ${key}`, error)
  }
}

export function clearStorage(): void {
  try {
    localStorage.clear()
  } catch (error) {
    console.warn('Failed to clear storage', error)
  }
}
