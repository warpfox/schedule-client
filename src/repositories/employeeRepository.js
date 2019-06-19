module.exports = {
	getAllEmployees() {
		return fetch('/api/employees', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	},
	addEmployee(employee) {
		return fetch('/api/employee', {
			method: 'POST',
			body: JSON.stringify({
				name: employee.name,
				schedule: employee.schedule,
			}),
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	},
	editEmployee(employee) {
		return fetch('/api/employee/' + employee.id, {
			method: 'PUT',
			body: JSON.stringify({
				id: employee._id,
				name: employee.name,
				schedule: employee.schedule,
			}),
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	},
	deleteEmployee(id) {
		return fetch('/api/employee/' + id, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	},
};
