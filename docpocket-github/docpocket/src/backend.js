import {createClient} from '@supabase/supabase-js';
const U=import.meta.env.VITE_SUPABASE_URL,K=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const configured=!!(U&&K);
export const sb=configured?createClient(U,K,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
export const isMock=false;
export const seed=null;
