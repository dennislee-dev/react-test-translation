import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRequest } from '../helpers';
import { metadataUrl } from '../utils';

const name = 'metadata';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

function createInitialState() {
  return {
    loading: false,
    data: [],
    currentMetadata: {}
  }
}

function createExtraActions() {
  return {
    setCurrentMetadata: setCurrentMetadata()
  };

  function setCurrentMetadata() {
    return createAsyncThunk(
      `${name}/setCurrentMetadata`,
      async (currentId, { getState }) => {
        const { metadata } = getState();
        const result = metadata.data.find((item) => item.id === currentId);

        if (result) {
          return { isExist: true, data: result };
        } else {
          return getRequest(`${metadataUrl}/${currentId}`);
        }
      }
    )
  }
}

function createExtraReducers() {
  return {
    ...setCurrentMetadata()
  };

  function setCurrentMetadata() {
    const { pending, fulfilled, rejected } = extraActions.setCurrentMetadata;

    return {
      [pending]: (state) => {
        state.loading = true;
      },
      [fulfilled]: (state, { payload }) => {
        state.loading = false;
        if (payload.isExist) {
          state.currentMetadata = payload.data
        } else {
          state.data.push(payload)
          state.currentMetadata = payload;
        }
      },
      [rejected]: (state, { error }) => {
        state.error = error;
        state.loading = false;
      }
    }
  }
}

export const metadataActions = { ...slice.actions, ...extraActions };
export const metadataReducer = slice.reducer;
