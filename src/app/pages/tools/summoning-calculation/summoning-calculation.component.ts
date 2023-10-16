import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Selector, Store } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';
import { ToolsAction, ToolsSelector } from '../../../store/tools';

@Component({
  selector: 'app-summoning-calculation',
  templateUrl: './summoning-calculation.component.html',
  styles: [],
})
export class SummoningCalculationComponent {
  @AutoUnsubscribe() in1$ = this.store.select(ToolsSelector.baseMaterial('in1'));
  @AutoUnsubscribe() in2$ = this.store.select(ToolsSelector.baseMaterial('in2'));
  @AutoUnsubscribe() in3$ = this.store.select(ToolsSelector.baseMaterial('in3'));
  @AutoUnsubscribe() in4$ = this.store.select(ToolsSelector.baseMaterial('in4'));
  @AutoUnsubscribe() in5$ = this.store.select(ToolsSelector.baseMaterial('in5'));

  ou1 = 0;
  ou2 = 0;
  ou3 = 0;
  ou4 = 0;
  ou5 = 0;

  validateForm: FormGroup = this.fb.group({
    in1: [null],
    in2: [null],
    in3: [null],
    in4: [null],
    in5: [null],
  });


  constructor(
      private fb: FormBuilder,
      private store: Store,
  ) {
  }

  ngOnInit() {
    this.calculateValue();
  }

  calculateValue() {
    let flag = '';
    if (this.validateForm.get('in1')?.value != null) flag = 'in1';
    if (this.validateForm.get('in2')?.value != null) flag = 'in2';
    if (this.validateForm.get('in3')?.value != null) flag = 'in3';
    if (this.validateForm.get('in4')?.value != null) flag = 'in4';
    if (this.validateForm.get('in5')?.value != null) flag = 'in5';

    let scale = 1;
    if (flag === 'in1') {
      let a = (this.validateForm.get('in1')?.value) as number;
      let b = this.store.selectSnapshot(ToolsSelector.baseMaterial('in1')) as number;
      scale = a / b;
    }
    if (flag === 'in2') {
      let a = (this.validateForm.get('in2')?.value) as number;
      let b = this.store.selectSnapshot(ToolsSelector.baseMaterial('in2')) as number;
      scale = a / b;
    }
    if (flag === 'in3') {
      let a = (this.validateForm.get('in3')?.value) as number;
      let b = this.store.selectSnapshot(ToolsSelector.baseMaterial('in3')) as number;
      scale = a / b;
    }
    if (flag === 'in4') {
      let a = (this.validateForm.get('in4')?.value) as number;
      let b = this.store.selectSnapshot(ToolsSelector.baseMaterial('in4')) as number;
      scale = a / b;
    }
    if (flag === 'in5') {
      let a = (this.validateForm.get('in5')?.value) as number;
      let b = this.store.selectSnapshot(ToolsSelector.baseMaterial('in5')) as number;
      scale = a / b;
    }

    if (flag !== 'in1') this.validateForm.patchValue({'in1': null});
    if (flag !== 'in2') this.validateForm.patchValue({'in2': null});
    if (flag !== 'in3') this.validateForm.patchValue({'in3': null});
    if (flag !== 'in4') this.validateForm.patchValue({'in4': null});
    if (flag !== 'in5') this.validateForm.patchValue({'in5': null});

    this.ou1 = Math.ceil(scale * (this.store.selectSnapshot(ToolsSelector.baseMaterial('in1')) as number));
    this.ou2 = Math.ceil(scale * (this.store.selectSnapshot(ToolsSelector.baseMaterial('in2')) as number));
    this.ou3 = Math.ceil(scale * (this.store.selectSnapshot(ToolsSelector.baseMaterial('in3')) as number));
    this.ou4 = Math.ceil(scale * (this.store.selectSnapshot(ToolsSelector.baseMaterial('in4')) as number));
    this.ou5 = Math.ceil(scale * (this.store.selectSnapshot(ToolsSelector.baseMaterial('in5')) as number));

  }

  changeBaseInput($event: any, flag: string) {
    this.store.dispatch(new ToolsAction.ChangeInAmount($event.target?.value, flag));
    this.calculateValue();
  }

  changeInput($event: Event, flag: string) {
    this.calculateValue();
  }
}
