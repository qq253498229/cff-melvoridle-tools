import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ToolsAction } from '.';

export interface ToolsStateModel {
  in1: number,
  in2: number,
  in3: number,
  in4: number,
  in5: number
}

@State<ToolsStateModel>({
  name: 'tools',
  defaults: {
    in1: 10,
    in2: 8,
    in3: 6,
    in4: 5,
    in5: 25,
  },
})
@Injectable({
  providedIn: 'root',
})
export class ToolsState {
  @Action(ToolsAction.ChangeInAmount)
  ChangeInAmount(ctx: StateContext<ToolsStateModel>, {amount, flag}: ToolsAction.ChangeInAmount) {
    ctx.patchState({[flag]: amount});
  }
}
