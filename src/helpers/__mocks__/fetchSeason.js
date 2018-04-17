import { schedule } from '../../mocks/mockschedule';
import { emptySchedule } from '../../mocks/mockEmptySchedule';

export const fetchSeason = jest.fn()
  .mockImplementationOnce(() => emptySchedule )
  .mockImplementation(() => schedule );