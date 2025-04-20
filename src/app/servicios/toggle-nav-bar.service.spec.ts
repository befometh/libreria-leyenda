
import { TestBed } from '@angular/core/testing';

import { ToggleNavBarService } from './toggle-nav-bar.service';

describe('ToggleNavBarService', () => {
  let service: ToggleNavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleNavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
