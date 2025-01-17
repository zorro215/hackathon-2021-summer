import _ from 'lodash';
import actions from './actions';

const initState = {
  count: 0,
  account: null,
  projects: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actions.INCREASE:
      {
        const { count } = state;
        return { ...state, count: count + 1 };
      }
    case actions.SET_ACCOUNT:
      {
        const { account } = action;
        return { ...state, account };
      }
    case actions.SET_PROJECTS:
      {
        const { projects } = action;
        console.log('SET_PROJECTS, projects: ', projects);
        return { ...state, projects };
      }
  }
}

export default reducer;
