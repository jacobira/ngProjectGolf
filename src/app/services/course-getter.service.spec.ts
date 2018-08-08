import { TestBed, inject } from '@angular/core/testing';

import { CourseGetterService } from './course-getter.service';

describe('CourseGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseGetterService]
    });
  });

  it('should be created', inject([CourseGetterService], (service: CourseGetterService) => {
    expect(service).toBeTruthy();
  }));
});
