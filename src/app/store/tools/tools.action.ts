export namespace ToolsAction {
  export class ChangeInAmount {
    static readonly type = `修改in的数值`;

    constructor(public amount: number, public flag: string) {
    }
  }

}
