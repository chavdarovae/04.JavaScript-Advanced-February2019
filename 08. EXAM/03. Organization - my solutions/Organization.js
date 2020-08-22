class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.departmentsBudget = budget;
        this.employees = [];
    }

    get departmentsBudget() {
        return this._departmentsBudget;
    }

    set departmentsBudget(value) {
        return this._departmentsBudget = {
            marketing: 0.4 * +value,
            finance: 0.25 * +value,
            production: 0.35 * +value
        };
    }

    add(employeeName, department, salary) {
        if (this._departmentsBudget[department] >= salary) {
            let currEmployee = { employeeName, department, salary };
            this.employees.push(currEmployee);
            this._departmentsBudget[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this._departmentsBudget[department]}.`
        }
    }

    employeeExists(employeeName) {
        let foundEmployee = this.employees.find(x => x.employeeName === employeeName);
        if (foundEmployee !== undefined) {
            return `Mr./Mrs. ${employeeName} is part of the ${foundEmployee.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    leaveOrganization(employeeName) {
        let foundEmployee = this.employees.find(x => x.employeeName === employeeName);
        if (foundEmployee !== undefined) {
            let foundSalary = +foundEmployee.salary;
            let foundDepartement = foundEmployee.department;
            this._departmentsBudget[foundDepartement] += foundSalary;
            this.employees = this.employees.filter(x => x.employeeName !== employeeName);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    status() {

        let print = `${this.name.toUpperCase()} DEPARTMENTS:`

        let currDepartmentArr = this.employees.filter((x => x.department === 'marketing'))
            .sort((a, b) => b.salary - a.salary);
        print += `\nMarketing | Employees: ${currDepartmentArr.length}: ${currDepartmentArr.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this._departmentsBudget.marketing}`;

        currDepartmentArr = this.employees.filter((x => x.department === 'finance'))
            .sort((a, b) => b.salary - a.salary);
        print += `\nFinance | Employees: ${currDepartmentArr.length}: ${currDepartmentArr.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this._departmentsBudget.finance}`;

        currDepartmentArr = this.employees.filter((x => x.department === 'production'))
            .sort((a, b) => b.salary - a.salary);
        print += `\nProduction | Employees: ${currDepartmentArr.length}: ${currDepartmentArr.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this._departmentsBudget.production}`;

        return print;
    }
}

let organization = new Organization('SBTech', 20000);

console.log(organization.add('Peter', 'marketing', 800));
console.log(organization.departmentsBudget);
console.log(organization.employees);

console.log(organization.leaveOrganization('Peter'));
console.log(organization.departmentsBudget);
console.log(organization.employees);

console.log(organization.add('Robert', 'production', 2000));
console.log(organization.add('Peter', 'production', 2000));
console.log(organization.status());

