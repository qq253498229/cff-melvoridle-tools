import { createSelector } from '@ngxs/store';
import { ToolsState } from '.';

export class ToolsSelector {

  static baseMaterial(flag: string) {
    return createSelector([ToolsState], (state => {
      if (flag in state) return state[flag];
      return null;
    }));
  }

}
