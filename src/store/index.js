import { configureStore } from '@reduxjs/toolkit';

import { sourceReducer } from './source.slice';
import { metadataReducer } from './metadata.slice';

export * from './source.slice';
export * from './metadata.slice';

export const store = configureStore({
  reducer: {
    source: sourceReducer,
    metadata: metadataReducer
  },
});