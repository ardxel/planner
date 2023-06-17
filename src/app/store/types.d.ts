declare type RootState = ReturnType<typeof import('./index.ts').store.getState>
declare type AppDispatch = typeof import('./index.ts').store.dispatch
