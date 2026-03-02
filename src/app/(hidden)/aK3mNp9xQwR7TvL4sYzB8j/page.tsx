import { isAuthenticated } from "./actions";
import { PasswordForm } from "./password-form";

export default async function ProtectedPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = await isAuthenticated();
  const { error } = await searchParams;

  if (authed) {
    return (
      <div>
        {/* Protected content goes here */}
        aK3mNp9xQwR7TvL4sYzB8j
      </div>
    );
  }

  return <PasswordForm error={!!error} />;
}
