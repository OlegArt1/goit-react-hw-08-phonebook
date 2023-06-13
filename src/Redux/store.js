import { configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./auth/authSlice";
import { contactsReduser } from "./contacts/contactsSlice";
import { filtersReducer } from "./contacts/filtersSlice";
import storage from "redux-persist/lib/storage";
import
{
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
}
from "redux-persist";

const persistConfig =
{
    key: 'auth',
    storage,
    whitelist: ['token'],
};
export const store = configureStore({
    reducer:
    {
        auth: persistReducer(persistConfig, authReduser),
        filter: filtersReducer,
        contacts: contactsReduser,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck:
            {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);