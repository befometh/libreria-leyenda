import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { renderizadorResolver } from './renderizador.resolver';

describe('renderizadorResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => renderizadorResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
