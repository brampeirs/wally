import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingComponent } from './landing.component';
import { LandingModule } from './landing.module';
import { AuthService } from '../../auth/auth.service';

describe('LandingComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LandingComponent
      ],
      providers: [
        AuthService
      ]
    }).compileComponents();
  }));

  it('should create the LandingComponent', () => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the sign in button when not authenticated', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    let app = fixture.debugElement.componentInstance;
    app.isAuthenticated = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const signUpButton = compiled.querySelector('a');
    expect(signUpButton).toBeTruthy();
  }))

  it('should hide the sign in button when authenticated', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    let app = fixture.debugElement.componentInstance;
    app.isAuthenticated = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const signUpButton = compiled.querySelector('a');
    console.log('signupButton', signUpButton);
    expect(signUpButton).toBe(undefined);
  }))

  /* it(`should have as title 'recipes'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.debugElement.componentInstance;
     expect(app.title).toEqual('recipes');
   });

   it('should render title in a h1 tag', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('h1').textContent).toContain('Welcome to recipes!');
   });*/
});
