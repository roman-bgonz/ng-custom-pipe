import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(async () => {
    appComponent = new AppComponent();
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });
});
