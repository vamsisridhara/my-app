import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMasterComponent } from './user-master.component';
import { UserComponent } from '../user/user.component';
import { UserAsyncComponent } from '../user-async/user-async.component';

describe('UserMasterComponent', () => {
  beforeEach(async(() => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
    TestBed.configureTestingModule({
      declarations: [UserMasterComponent, UserComponent, UserAsyncComponent]
    }).compileComponents();
  }));
  describe(':', () => {
    // tslint:disable-next-line:one-variable-per-declaration
    let fixture, app;
    // Most test suites in this guide call beforeEach() to set the preconditions for each it()
    // test and rely on the TestBed to create classes and inject services.
    beforeEach(() => {
      fixture = TestBed.createComponent(UserMasterComponent);
      app = fixture.debugElement.componentInstance;
    });
    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));
    it('should have title as \'Angular7-unit-testing!\'', async(() => {
      expect(app.title).toBe('Angular7-unit-testing!');
    }));
    it('should have h1 tag as \'Welcome Angulat7-unit-testing!\'', async(() => {
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h1');
      expect(h1tag.textContent).toBe(' Welcome to Angular7-unit-testing!! ');
    }));
  });
});
