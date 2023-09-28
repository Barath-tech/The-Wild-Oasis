import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhqaghzaowvrgmkgaqdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocWFnaHphb3d2cmdta2dhcWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MjI3NjgsImV4cCI6MjAxMTE5ODc2OH0.lwSAEjD4a3fHD5MGQihND4K6C8y8KPi10AAF78FlJW4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
