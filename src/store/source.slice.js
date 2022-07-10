import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRequest } from '../helpers';
import { sourceUrl } from '../utils';

const name = 'source';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

function createInitialState() {
  return {
    loading: false,
    data: [],
    currentSource: {},
    totalCount: 0,
    currentWordsCount: 0
  }
}

function createExtraActions() {
  return {
    getAll: getAll(),
    setCurrentSource: setCurrentSource()
  };

  function setCurrentSource() {
    return createAsyncThunk(
      `${name}/setCurrentSource`,
      (currentId, { getState }) => {
        const { source } = getState();
        return source.data.find((item) => item.id === currentId);
      }
    )
  }

  function getAll() {
    return createAsyncThunk(
      `${name}/getAll`,
      () => getRequest(sourceUrl)
    );
  }
}

function createExtraReducers() {
  return {
    ...getAll(),
    ...setCurrentSource()
  };

  function setCurrentSource() {
    const { fulfilled } = extraActions.setCurrentSource;

    return {
      [fulfilled]: (state, { payload }) => {
        if (payload) {
          state.currentSource = payload;
          state.currentWordsCount = state.currentSource.body.split(" ").length;
        }
      }
    }
  }

  function getAll() {
    const { pending, fulfilled, rejected } = extraActions.getAll;

    return {
      [pending]: (state) => {
        state.loading = true;
      },
      [fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.totalCount = payload.length;
      },
      [rejected]: (state, { error }) => {
        state.error = error;
        state.loading = false;
      }
    }
  }
}

export const sourceActions = { ...slice.actions, ...extraActions };
export const sourceReducer = slice.reducer;
