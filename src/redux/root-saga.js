import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './shop/shop.sagas';

export function* rootSaga() {
    yield all(
        [call(categoriesSaga)]
    );
  }
