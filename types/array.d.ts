export { }

declare global {
  interface Array<T> {
    isEmpty(): boolean
  }
}