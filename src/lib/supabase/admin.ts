import { createClient } from "@supabase/supabase-js";

import { getSupabaseEnv, getSupabaseServiceRoleKey } from "@/lib/env";
import type { Database } from "@/types/database";

/**
 * Bypasses Row Level Security. Use only in server-side Route Handlers,
 * Server Actions, or scripts — never in Client Components.
 */
export function createAdminClient() {
  const { url } = getSupabaseEnv();

  return createClient<Database>(url, getSupabaseServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
