// Conexión a Supabase — estas claves son públicas a propósito (clave "anon/publishable"),
// están protegidas por las reglas de seguridad (RLS) configuradas en la base de datos.
const SUPABASE_URL = 'https://ksdrmgyjwidkmozqkqiu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_jWc6QX8kRq_wx2AdDWZ0JQ_SqPsWqmz';

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
