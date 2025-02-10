import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
process.env.NUXT_SUPABASE_URL!,
process.env.SUPABASE_KEY!
);
