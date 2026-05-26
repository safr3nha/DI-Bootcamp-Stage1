type Person = { name: string; age: number };
type Job = { position: "Manager" | "Developer"; department: string };
type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in ${emp.department}.`;
  } else {
    return `${emp.name} is a Developer in ${emp.department}.`;
  }
}