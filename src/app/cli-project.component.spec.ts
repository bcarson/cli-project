import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliProjectAppComponent } from '../app/cli-project.component';

beforeEachProviders(() => [CliProjectAppComponent]);

describe('App: CliProject', () => {
  it('should create the app',
      inject([CliProjectAppComponent], (app: CliProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-project works!\'',
      inject([CliProjectAppComponent], (app: CliProjectAppComponent) => {
    expect(app.title).toEqual('cli-project works!');
  }));
});
