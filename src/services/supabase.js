import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wgjujckzmectjkufmkgj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnanVqY2t6bWVjdGprdWZta2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MzUyMDEsImV4cCI6MjA0NDQxMTIwMX0.CSSinxilC_5xK_I1yOdB7QLYeEPIsVCFlcTkpyr2m5s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
