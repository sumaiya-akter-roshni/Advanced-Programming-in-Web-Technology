import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return { message: 'Notification sent', student: studentName, text: message };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    return this.enrollmentService.getEnrollments();
  }
}