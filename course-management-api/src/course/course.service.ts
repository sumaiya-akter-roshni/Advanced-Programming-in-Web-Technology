import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {getCourseById(id: number): string {
return `Course ID ${id}: All the best`;
}
 
createCourse(): string {
return 'Create Course';
}
 
updateCourse(): string {
return 'Update Course';
}
 
patchCourse(): string {
return 'Patch Course';
}
 
deleteCourse(): string {
return 'Delete Course';
}}
