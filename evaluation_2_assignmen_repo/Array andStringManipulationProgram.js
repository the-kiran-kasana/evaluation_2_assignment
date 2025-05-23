function manageStudents(i, j, name) {
    let students = ["Alice", "Bob", "Charlie"];

    // Add the new student at the specified index using splice
    students.splice(i, j, name);

    // Check if "Eve" is in the list
    console.log(students.includes("Eve"));  // Should return false

    // Convert the array to a string with names separated by commas
    console.log(students.join(","));  // Should show names separated by commas
}

// Correct function call with intended name and parameters
manageStudents(1, 0, "kiran");
