const users = [
  {
    user_id: 1,
    user_name: "John Doe",
    user_role: "ADMIN",
    email: "john.doe@example.com",
    password: "password123",
    phone: "+919078453456",
    manager_id: 101,
    status: "Active",
    specialization: "Backend Development",
    date_of_joining: "2023-01-15",
    projects: [
      {
        project_id: 1,
        project_name: "Backend Revamp",
        client: "Acme Corp",
        tasks: [
          {
            task_id: 1,
            task_name: "API Development",
            task_description: "Develop new API endpoints",
            start_date: "2023-02-01",
            end_date: "2023-03-01",
            status: "Completed",
          },
          {
            task_id: 2,
            task_name: "Database Optimization",
            task_description: "Optimize database queries",
            start_date: "2023-03-02",
            end_date: "2023-04-01",
            status: "In Progress",
          },
        ],
      },
    ],
  },
  {
    user_id: 2,
    user_name: "Jane Smith",
    user_role: "PROJECT_MANAGER",
    email: "jane.smith@example.com",
    password: "securepass456",
    phone: "+919078454456",
    manager_id: null,
    status: "Active",
    specialization: "Project Management",
    date_of_joining: "2022-09-05",
    projects: [
      {
        project_id: 2,
        project_name: "Website Redesign",
        client: "Beta LLC",
        tasks: [
          {
            task_id: 3,
            task_name: "Requirement Gathering",
            task_description: "Gather requirements from the client",
            start_date: "2022-10-01",
            end_date: "2022-10-15",
            status: "Completed",
          },
          {
            task_id: 4,
            task_name: "UI Design",
            task_description: "Design the user interface",
            start_date: "2022-10-16",
            end_date: "2022-11-15",
            status: "In Progress",
          },
        ],
      },
    ],
  },
  {
    user_id: 3,
    user_name: "Alice Johnson",
    user_role: "TEAM_MEMBER",
    email: "alice.johnson@example.com",
    password: "test123",
    phone: "+919088453456",
    manager_id: 102,
    status: "Inactive",
    specialization: "Quality Assurance",
    date_of_joining: "2024-03-10",
    projects: [
      {
        project_id: 3,
        project_name: "Mobile App Testing",
        client: "Gamma Inc",
        tasks: [
          {
            task_id: 5,
            task_name: "Test Plan Creation",
            task_description: "Create test plan for the mobile app",
            start_date: "2024-03-15",
            end_date: "2024-04-01",
            status: "Pending",
          },
          {
            task_id: 6,
            task_name: "Manual Testing",
            task_description: "Perform manual testing",
            start_date: "2024-04-02",
            end_date: "2024-05-01",
            status: "Pending",
          },
        ],
      },
    ],
  },
  {
    user_id: 4,
    user_name: "Bob Brown",
    user_role: "TEAM_MEMBER",
    email: "bob.brown@example.com",
    password: "password456",
    phone: "+919178453456",
    manager_id: 102,
    status: "Active",
    specialization: "Frontend Development",
    date_of_joining: "2023-07-20",
    projects: [
      {
        project_id: 4,
        project_name: "E-commerce Frontend",
        client: "Delta Co",
        tasks: [
          {
            task_id: 7,
            task_name: "Homepage Design",
            task_description: "Design the homepage",
            start_date: "2023-08-01",
            end_date: "2023-08-15",
            status: "Completed",
          },
          {
            task_id: 8,
            task_name: "Product Page Development",
            task_description: "Develop the product page",
            start_date: "2023-08-16",
            end_date: "2023-09-15",
            status: "In Progress",
          },
        ],
      },
    ],
  },
  {
    user_id: 5,
    user_name: "David Wilson",
    user_role: "ADMIN",
    email: "david.wilson@example.com",
    password: "qwerty789",
    phone: "+919478453456",
    manager_id: null,
    status: "Inactive",
    specialization: "DevOps",
    date_of_joining: "2021-12-01",
    projects: [
      {
        project_id: 5,
        project_name: "CI/CD Pipeline",
        client: "Epsilon Ltd",
        tasks: [
          {
            task_id: 9,
            task_name: "Setup Jenkins",
            task_description: "Setup Jenkins for CI/CD",
            start_date: "2022-01-01",
            end_date: "2022-01-15",
            status: "Completed",
          },
          {
            task_id: 10,
            task_name: "Integrate Docker",
            task_description: "Integrate Docker with Jenkins",
            start_date: "2022-01-16",
            end_date: "2022-02-15",
            status: "Completed",
          },
        ],
      },
    ],
  },
  {
    user_id: 6,
    user_name: "Emily Davis",
    user_role: "TEAM_MEMBER",
    email: "emily.davis@example.com",
    password: "secret123",
    phone: "+919078453416",
    manager_id: 101,
    status: "Active",
    specialization: "UX/UI Design",
    date_of_joining: "2023-05-15",
    projects: [
      {
        project_id: 6,
        project_name: "New Dashboard UI",
        client: "Zeta Corp",
        tasks: [
          {
            task_id: 11,
            task_name: "Wireframe Design",
            task_description: "Design wireframes for the dashboard",
            start_date: "2023-06-01",
            end_date: "2023-06-15",
            status: "Completed",
          },
          {
            task_id: 12,
            task_name: "Prototype Development",
            task_description: "Develop a prototype of the dashboard",
            start_date: "2023-06-16",
            end_date: "2023-07-15",
            status: "In Progress",
          },
        ],
      },
    ],
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   const table = document.getElementById("userTable");
//   const headers = Object.keys(users[0]);

//   const thead = document.createElement("thead");
//   const headerRow = document.createElement("tr");
//   headers.forEach((header) => {
//     const th = document.createElement("th");
//     th.textContent = header.replace(/_/g, " ").toUpperCase();
//     headerRow.appendChild(th);
//   });
//   thead.appendChild(headerRow);
//   table.appendChild(thead);

//   const tbody = document.createElement("tbody");
//   users.forEach((user) => {
//     const row = document.createElement("tr");
//     headers.forEach((header) => {
//       const td = document.createElement("td");
//       td.textContent = user[header];
//       row.appendChild(td);
//     });
//     tbody.appendChild(row);
//   });
//   table.appendChild(tbody);
// });

// for login form
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      switch (user.user_role) {
        case "ADMIN":
          window.location.href = "../html/admin.html";
          break;
        case "PROJECT_MANAGER":
          window.location.href = "./html/project_manager.html";
          break;
        case "TEAM_MEMBER":
          window.location.href = "./html/team_member.html";
          break;
        default:
          break;
      }
    } else {
      document.getElementById("message").innerHTML =
        '<div class="alert alert-danger" role="alert">Invalid email or password.</div>';
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const resetButton = document.querySelector(".btn-danger");

  resetButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "./reset.html";
  });
});

// adding user to user object

function validateAndSubmitForm() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const specialization = document.getElementById("specialization").value;

  const user_id = users.length + 1;

  const newUser = {
    user_id: user_id,
    user_name: name,
    user_role: role,
    email: email,
    password: password,
    phone: phone,
    manager_id: null,
    status: "Active",
    specialization: specialization,
    date_of_joining: new Date().toISOString().split("T")[0],
    projects: [],
  };

  users.push(newUser);

  console.log("User added:", newUser);

  document.getElementById("userForm").reset();
}
