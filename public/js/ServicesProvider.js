class ServicesProvider {
  logInWithCredentials(data, callback, error) {
    $.ajax({
      url: "../src/services/READ_admin_BY_credentials.php",
      method: "POST",
      data: JSON.stringify(data),
      success: callback,
      error: error,
    });
  }

  logInStudentWithCredentials(data,callback,error){
    $.ajax({
      url: "../src/services/READ_student_BY_credentials.php",
      method: "POST",
      data: JSON.stringify(data),
      success: callback,
      error: error,
    });
  }

  logInProfessorWithCredentials(data, callback, error) {
    $.ajax({
      url: "../src/services/READ_professor_BY_credentials.php",
      method: "POST",
      data: JSON.stringify(data),
      success: callback,
      error: error,
    });
  }

  readGroups(callback) {
    $.ajax({
      url: "../src/services/READ_groups_GB_major.php",
      success: callback,
    });
  }

  readClassrooms(callback) {
    $.ajax({
      url: "../src/services/READ_classrooms.php",
      success: callback,
    });
  }

  readCourses(group_id, callback) {
    $.ajax({
      data: { group_id: group_id },
      url: "../src/services/READ_courses_BY_group_id.php",
      success: callback,
    });
  }

  readClasses(group_id, callback) {
    $.ajax({
      data: { group_id: group_id },
      url: "../src/services/READ_classes_GB_course_id_BY_group_id.php",
      success: callback,
    });
  }

  readGroupClasses(group_id, callback) {
    $.ajax({
      data: { group_id: group_id },
      url: "../src/services/READ_classes_GB_weekday_BY_group_id.php",
      success: callback,
    });
  }

  readProfessorClasses(professor_id, callback) {
    $.ajax({
      data: { professor_id: professor_id },
      url:
        "../src/services/READ_approved_classes_GB_weekday_BY_professor_id.php",
      success: callback,
    });
  }

  readGroup(group_id, callback) {
    $.ajax({
      data: { group_id: group_id },
      url: "../src/services/READ_group_BY_group_id.php",
      success: callback,
    });
  }
}
