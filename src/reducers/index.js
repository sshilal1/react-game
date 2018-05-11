import { MOVE_OBJECTS, START_GAME, SHOOT } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  cannonBalls: [],
  lastObjectCreatedAt: new Date(),
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return startGame(state, initialGameState);
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case SHOOT:
      return shoot(state, action)
    default:
      return state;
  }
}

export default reducer;