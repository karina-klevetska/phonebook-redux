// import { createStore } from 'redux'
// import { contactsReducer } from './contacts/reducers'
import { configureStore } from '@reduxjs/toolkit'
import { contactsList, contactFilter } from './contacts/reducers'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// export const store = createStore(
//   contactsReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
}

const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactFilter,
})

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
