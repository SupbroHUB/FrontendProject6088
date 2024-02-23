function submitForm() {
    var studentName = document.getElementById("studentName").value;
    var nameLength = studentName.length; // Corrected spelling of 'length'
    var dob = document.getElementById("dob").value;
    var enrollment = document.getElementById("enrollment").value;
    var Email = document.getElementById("Email").value; // Changed 'email' to 'fees'
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var aadhar = document.getElementById("aadhar").value;
    var percentage = document.getElementById("percentage").value;

    document.write("Your INFO:<BR>" + " Student Name : " + studentName + "<br>");
    document.write("Date Of Birth : " + dob + "<br>");
    document.write("Enrollment : " + enrollment + "<br>");
    document.write("Email : " + Email + "<br>"); // Changed 'Enrollment' to 'Fees'
    document.write("Address : " + address + "<br>");
    document.write("Gender : " + gender + "<br>");
    document.write("Aadhar : " + aadhar + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Enrollment Number : " + studentName + "@Empire" + nameLength);
}
