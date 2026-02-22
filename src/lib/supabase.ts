import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Debug: log env values at load (helps trace deploy config issues)
console.log("[Supabase] VITE_SUPABASE_URL:", supabaseUrl || "(undefined)");
console.log("[Supabase] Key present:", !!supabasePublishableKey, supabasePublishableKey ? `(starts with ${supabasePublishableKey.slice(0, 15)}...)` : "");

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing Supabase env vars. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to .env"
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
