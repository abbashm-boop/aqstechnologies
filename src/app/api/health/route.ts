import { NextResponse } from "next/server";

import { hasSupabaseEnv } from "@/lib/env";

export function GET() {
  return NextResponse.json({
    status: "ok",
    supabase: hasSupabaseEnv() ? "configured" : "missing-env",
  });
}
