const doFetch = async () => {
  const res = await fetch('http://localhost:4321/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email=test@example.com&password=password123'
  });
  const text = await res.text();
  console.log("Status:", res.status);
  console.log("Body:", text.substring(0, 2000));
};
doFetch();
