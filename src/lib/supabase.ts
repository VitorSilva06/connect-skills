import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPA_KEY, SUPA_URL } from "../constants/supabase";

export const supabase =  createClient(SUPA_URL, SUPA_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,

    }
});