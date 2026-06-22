const data = {
  uid: "test-firebase-uid-123",
  email: "test12345@example.com",
  role: "student",
  name: "Test Student"
};

fetch("http://localhost:4321/api/save-user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(json => console.log("Response:", json))
.catch(err => console.error("Error:", err));
