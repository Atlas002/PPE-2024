// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xgyvltwklyjhoondqvni.supabase.co'; // Remplace par ton URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhneXZsdHdrbHlqaG9vbmRxdm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMzU5NjEsImV4cCI6MjA0NzYxMTk2MX0.w59h2_R-LbN1ZqPg6734YT-zY7JT9VrrtBbeV-ncEVQ'; // Remplace par ta clé anonyme

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
