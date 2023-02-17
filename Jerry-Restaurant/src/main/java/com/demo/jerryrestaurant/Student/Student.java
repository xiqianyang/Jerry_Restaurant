package com.demo.jerryrestaurant.Student;

import java.util.UUID;

public class Student {
         private final UUID studentId;
          private  final  String firstName;
          private  final String lastName;

    public Student(UUID studentId, String firstName, String lastName, Gender male) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }


    enum Gender {
              MALE,FEMAL
          }




}
