var students = [];

function show() {
    var form = document.getElementById('fill');
    form.style.display = "block";
}

function remove() {
    document.getElementById('fill').style.display = "none";
}

function add(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var contact = document.getElementById('contact').value;


    var student = {
        name: name,
        dob: dob,
        address: address,
        gender: gender,
        contact: contact
    };


    students.push(student);


    document.getElementById('name').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('address').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('contact').value = '';


    displayStudents();
}

function displayStudents() {



    var displayArea = document.getElementById('display');


    displayArea.innerHTML = '';

    displayArea.classList.add('d-flex', 'flex-wrap', 'justify-content-center', 'w-100');
    for (var i = 0; i < students.length; i++) {

        var studentDiv = document.createElement('div');


        if (students[i].gender === "male") {
            studentDiv.innerHTML = `
           
            <div class=" bg-dark text-white tw-normal rounded-4 ms-5 mt-3  h-100">
            <div class="bg-warning p-5   d-flex justify-content-center align-items-center rounded-top-4  ">
            <img height="100px " width="100px" src="./26faa912b13013b8e2d6e98446862dbd.png"></div>
    
                <div>
                <div class="ms-2 me-2" >
                <br>
                    <div class="d-flex justify-content-center">Student Name: ${students[i].name}</div>
                    <br>
                    <div class="d-flex justify-content-center" >Gender ${students[i].gender}</div>
                    <br>
                    <div class="d-flex justify-content-center">DOB: ${students[i].dob}</div>
                    <br>
                    <div class="d-flex justify-content-center">Address: ${students[i].address}</div>
                    <br>
                    <div class="d-flex justify-content-center">Contact: ${students[i].contact}</div>
                    <div class="d-flex justify-content-center">
                        <button onclick="deleteStudent(${i})" class="btn btn-danger mt-2 mb-2 text-white mt-4">Delete</button>
                    </div>
                    </div
                </div>
            </div>
            
        `;

        }

        else {
            studentDiv.innerHTML = `
           
            <div class=" bg-dark text-white tw-normal rounded-4 ms-5 mt-3  h-100">
            <div class="bg-warning p-5   d-flex justify-content-center align-items-center rounded-top-4  ">
            <img height="100px " width="100px" src="./d2dbc3cefd09d74f5d457518bd0d5cda.png"></div>
    
                <div>
                <div class="ms-2 me-2" >
                <br>
                    <div class="d-flex justify-content-center">Student Name: ${students[i].name}</div>
                    <br>
                    <div class="d-flex justify-content-center" >Gender ${students[i].gender}</div>
                    <br>
                    <div class="d-flex justify-content-center">DOB: ${students[i].dob}</div>
                    <br>
                    <div class="d-flex justify-content-center">Address: ${students[i].address}</div>
                    <br>
                    <div class="d-flex justify-content-center">Contact: ${students[i].contact}</div>
                    <div class="d-flex justify-content-center">
                        <button onclick="deleteStudent(${i})" class="btn btn-danger mt-2 mb-2 text-white mt-4">Delete</button>
                    </div>
                    </div
                </div>
            </div>
            
        `;


        }


        displayArea.appendChild(studentDiv);
    }


    displayArea.style.display = "block";
}

function deleteStudent(index) {

    students.splice(index, 1);


    displayStudents();
}

function hide() {
    document.getElementById("display").style.display = "none";
}
