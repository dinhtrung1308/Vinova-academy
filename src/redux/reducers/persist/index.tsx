import { persistReducer  } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['authentication']
};

const createPersistReducer = (rootReducer: any) => {
  return persistReducer(persistConfig, rootReducer);
};

export default createPersistReducer;
