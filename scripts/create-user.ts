import { auth } from "../src/lib/auth";

const [name, email, password] = process.argv.slice(2);

if (!name || !email || !password) {
  console.error("Usage: npm run user:create <name> <email> <password>");
  process.exit(1);
}

(async () => {
  const result = await auth.api.signUpEmail({
    body: { name, email, password },
  });

  console.log("User created:", result.user.email);
  process.exit(0);
})();
