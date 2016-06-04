import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TrailCommonsAppComponent } from '../app/trail-commons.component';

beforeEachProviders(() => [TrailCommonsAppComponent]);

describe('App: TrailCommons', () => {
  it('should create the app',
      inject([TrailCommonsAppComponent], (app: TrailCommonsAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
