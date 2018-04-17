import { scoreboard } from '../../mocks/mockScoreboard';
import { emptyScoreboard } from '../../mocks/mockEmptyScoreboard';

export const fetchScoreboard = jest.fn()
  .mockImplementationOnce(() => emptyScoreboard )
  .mockImplementation(() => scoreboard );