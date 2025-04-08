import { store } from './root';
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Status = 'init' | 'loading' | 'error' | 'success';
