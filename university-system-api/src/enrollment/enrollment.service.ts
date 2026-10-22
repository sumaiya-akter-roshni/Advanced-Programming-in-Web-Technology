import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';
import type { NotificationService as NotificationServiceType } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CourseService,
    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationServiceType,
  ) {}

  enrollStudent(studentName: string, courseId: string) {
    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(
      studentName,
      `You are enrolled in course ${courseId}`,
    );

    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course,
      notification,
    };
  }

  getEnrollments() {
    return { message: 'All enrollments fetched', data: [] };
  }
}