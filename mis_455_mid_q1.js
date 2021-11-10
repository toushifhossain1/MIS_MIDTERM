function show_results() {
    var age;
    var salary;
    var name;
    var bonus;

    name = document.getElementById("name").value;
    salary = document.getElementById("salary").value;
    age = document.getElementById("age").value;

    var yearly_salary;
    yearly_salary = salary * 12.0;

    if (age > 25 && age <= 30 && yearly_salary >= 100000) {
        bonus = salary * 0.2;
    }
    else if (age > 30 && age <= 35 && yearly_salary >= 200000) {
        bonus = salary * 0.3;
    }
    else if (age > 35 && yearly_salary >= 300000) {
        bonus = salary * 0.3;
    }
    else {
        bonus = salary * 0.1;
    }
    bonus = bonus * 12.0;
    result_show.innerText = name;

}
