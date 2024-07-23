import { redirect } from "@sveltejs/kit";
import { loggedIn } from "../stores";

let loginValue;
loggedIn.subscribe(v => loginValue = v);

if (loginValue) {
  redirect(303, '/dashboard');
} else {
  redirect(303, '/login');
}
