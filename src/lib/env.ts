function read(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export function hasSupabaseEnv() {
  return Boolean(
    read("NEXT_PUBLIC_SUPABASE_URL") && read("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  );
}

export function getSupabaseEnv() {
  const url = read("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = read("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Copy .env.example to .env.local and add your Supabase keys.",
    );
  }

  return { url, anonKey };
}

export function getSupabaseServiceRoleKey() {
  const serviceRoleKey = read("SUPABASE_SERVICE_ROLE_KEY");

  if (!serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY. Add it to .env.local. Do not use this key in client components.",
    );
  }

  return serviceRoleKey;
}
