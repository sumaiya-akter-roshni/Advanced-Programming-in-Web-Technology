import {
Controller, Get, Post, Put, Patch, Delete, Param,
} from '@nestjs/common';
import { CourseService } from './course.service.js';
 
@Controller('course')
export class CourseController {
constructor(private readonly courseService: CourseService) {}
 
@Get(':id')
getCourse(@Param('id') id: string): string {
return this.courseService.getCourseById(Number(id));
}
 
@Post()
createCourse(): string {
return this.courseService.createCourse();
}
 
@Put()
updateCourse(): string {
return this.courseService.updateCourse();
}
 
@Patch()
patchCourse(): string {
return this.courseService.patchCourse();
}
 
@Delete()
deleteCourse(): string {
return this.courseService.deleteCourse();
}
}