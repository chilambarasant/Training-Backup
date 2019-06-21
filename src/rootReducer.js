import {combineReducers} from 'redux';
import issues from './components/issues/reducer';
import report from './components/reports/reducer';
import appBar from './components/appBar/reducer'

const rootReducer = combineReducers({
    issues,report,appBar
});
export default rootReducer;