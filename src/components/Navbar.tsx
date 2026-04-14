import { signOut } from "@/auth";
import LoginModal from "./LoginModal";
import { Session } from "next-auth";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <header>
      <nav>
        <div>TAPE TRADER</div>

        <div>
          {session ? (
            <div>
              <span>Hello, {session.user?.name}</span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </div>
          ) : (
            <LoginModal />
          )}
        </div>

      </nav>
    </header>
  );
}
