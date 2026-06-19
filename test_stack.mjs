import { Stack } from '@stackframe/stack';

const stack = new Stack({
  projectId: "mock-project-id",
});

async function run() {
  // Let's see if there is a method to get the oauth url
  console.log(Object.keys(stack));
  // Let's try to get the oauth URL directly
  // stackAuthUrl = `https://app.hexclave.com/handler/sign-in?project_id=${projectId}&redirect_url=${encodeURIComponent(redirectUrl)}`;
}
run();
